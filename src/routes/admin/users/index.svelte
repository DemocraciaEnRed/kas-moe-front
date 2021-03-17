<script context="module">
	export async function preload(page, session) {
		if (!session.user) {
			return this.redirect(302, '/admin/auth');
		}
	};
</script>

<script>
  // Builtins
  import { onMount } from 'svelte';
  import { stores } from '@sapper/app';
  // Libs
  import axios from 'axios';
 
  const { session } = stores();

  const base_url = $session.API_BASE_URL,
    url = `${base_url}/list/`;
    
  let files, roll = [];

  onMount(async () => { 
    getRoll()
  });

  async function getRoll() {
    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Bearer ' + $session.access_token
      }
    }

    axios.get(url, config).then((response) => {
      if(response.status === 200) {
        $session.roll = JSON.parse(response.data); 
        roll = JSON.parse(response.data);
      }
    }, (error) => {
      console.log(error);
    });
  }

  async function handleSubmit() {
    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Bearer ' + $session.access_token
      }
    }
    if (files.length > 0) {
      const data = new FormData();
      data.append("file", files[0]);
      axios.post(url, data, config)
        .then((response) => {
          if(response.status === 200) {
            getRoll()
          }
        }, (error) => {
          console.log(error);
        });
      } else if (files.length > 1) {
        files = 0;
      }
  }
 
  async function handleDelete() {
    const config = {
      headers: {
        'Authorization': 'Bearer ' + $session.access_token
      }
    }
    axios.delete(url, config)
      .then((response) => {
        if(response.status === 200) {
          getRoll()
        }
      }, (error) => {
        console.log(error);
      });
  }
</script>

<div class="flex items-start justify-between pb-6 space-y-4 border-b lg:items-center lg:space-y-0 lg:flex-row">
  <h1 class="text-2xl font-semibold whitespace-nowrap">Padrón</h1>
  <div class="flex gap-8">
    <form class="flex items-center">
      <input type="file" id="upload" bind:files on:change={handleSubmit} on:click={handleSubmit} hidden/>
      <label for="upload" class="w-44 flex items-center justify-center px-4 py-2 space-x-1 font-medium tracking-wider uppercase text-gray-50 bg-green-500 border rounded-md focus:outline-none focus:ring">
        Cargar CSV
      </label>
    </form>
    <button on:click={handleDelete} class="w-44 flex items-center justify-center px-4 py-2 space-x-1 font-medium tracking-wider uppercase text-gray-50 bg-red-500 border rounded-md focus:outline-none focus:ring">Eliminar</button>
  </div>
</div>

<div class="flex flex-col mt-6">
  <div class="-my-2 flex justify-center overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 align-middle inline-block sm:px-6 lg:px-8">
      <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
      {#if roll.length!==0}
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Indentificación
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Nombres
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
          {#each roll as row, i}
            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="ml-4">
                    <div class="text-sm font-medium text-gray-900">
                      {row.id}
                    </div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">{row.name}</div>
              </td>
            </tr>
          {/each}
          </tbody>
        </table>
      {/if}
      </div>
    </div>
  </div>
</div>