<script context="module">
	export async function preload(page, session) {
		if (!session.user) {
			return this.redirect(302, '/auth');
		}
  };  
  // Objects
  import { API_BASE_URL as base } from 'util/config';
  import { getData } from 'util/fetch';
</script>

<script>
	import { onMount, afterUpdate } from 'svelte';
  import { a, b, c } from 'util/store';

  let status = [
    true,
    true,
    true,
  ];

  onMount(async () => {
    /*
    setInterval(async () => {
      getData(`${base}/roll`, false);
    }, 1000);
    */
  });

  let response;

  afterUpdate(async () => {
    response = getData(`${base}/roll`, false);
    handleSubmit();
    console.clear();
    console.log('A: ', $a);
    console.log('B: ', $b);
    console.log('C: ', $c);
  });

  async function handleSubmit() {
    let a = status[0],
      b = status[1],
      c = status[2];
    await fetch('http://localhost:2000/roll', {
      method: 'PATCH',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        a,
        b,
        c
      })
    })
  }

  let team = [
    {
      avatar: 'gonzalez_gutierrez.jpg',
      name:'Maribel González Gutiérrez',
      role: 'Presidenta'},
    {
      avatar: 'caceres_garcia.jpg',
      name:'Silvia Cáceres García',
      role: 'Vicepresidenta'
    },
    {
      avatar: 'garcia_ballester.jpg',
      name:'María García Ballester',
      role: 'Tesorera'
    },
    {
      avatar: 'juarez_martinez.jpg',
      name:'Anabel Juárez Martínez',
      role: 'Secretaria'
    },
  ];

  let roll = [
    { 
      logo: `gid1.svg`,
      header: 'Consejo Radical',
      type: 'Directivos',
      amount: '4',
    },
    { 
      logo: `gid2.svg`,
      header: 'Claro que sí',
      type: 'Directivos',
      amount: '4',
    },
    { 
      logo: `gid3.svg`,
      header: 'Consejo Radical',
      type: 'Directivos',
      amount: '4',
    },
  ];
</script>

<div class="flex flex-col items-start justify-between pb-6 space-y-4 border-b lg:items-center lg:space-y-0 lg:flex-row">
  <h1 class="text-2xl font-semibold whitespace-nowrap">Candidatos</h1>
</div>

<div class="flex flex-col items-start justify-between space-y-4 pt-4 lg:items-center lg:space-y-0 lg:flex-row">
  <h2 class="text-xl font-semibold whitespace-nowrap">Planchas</h2>
</div>
<div class="flex flex-col mt-6">
  <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
      <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Nombre
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Bloque
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Integrantes
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Estado
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
          {#each roll as team, i}
            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-10 w-10">
                    <img class="h-10 w-10 rounded-full" src={team.logo} alt="Foto de perfil">
                  </div>
                  <div class="ml-4">
                    <div class="text-sm font-medium text-gray-900">
                      {team.header}
                    </div>
                    <div class="text-sm text-gray-500">
                      organization@email.com
                    </div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">{team.type}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 pl-16">
                {team.amount}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-center pr-4 pl-2">
                <label class="inline-flex items-center mt-3 pr-8">
                  <input type="checkbox" class="form-checkbox h-5 w-5 text-gray-600" bind:checked={status[i]}><span class="ml-2 text-gray-700"></span>
                </label>
              </td>
            </tr>
          {/each}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

<div class="flex flex-col items-start justify-between space-y-4 pt-4 lg:items-center lg:space-y-0 lg:flex-row">
  <h2 class="text-xl font-semibold whitespace-nowrap">Integrantes</h2>
</div>
<div class="flex flex-col mt-6">
  <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
      <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Nombre
              </th>
              <!--
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Plancha
              </th>
              -->
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Rol
              </th>
              <th scope="col" class="relative px-6 py-3">
                <span class="sr-only">Editar</span>
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
          {#each team as member}
            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-10 w-10">
                    <img class="h-10 w-10 rounded-full" src={member.avatar} alt="Foto de perfil">
                  </div>
                  <div class="ml-4">
                    <div class="text-sm font-medium text-gray-900">
                      {member.name}
                    </div>
                    <div class="text-sm text-gray-500">
                      user@mail.com
                    </div>
                  </div>
                </div>
              </td>
              <!--
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">{member.role}</div>
              </td>
              -->
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {member.role}
              </td>
              <!--
                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <a href="#noop" class="text-indigo-600 hover:text-indigo-900">Editar</a>
                </td>
              -->
            </tr>
          {/each}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>