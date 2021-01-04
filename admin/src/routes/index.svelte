<script context="module">
	export async function preload(page, session) {
		if (!session.authenticated) {
			return this.redirect(302, '/auth');
		}
	};
</script>

<script>
  import { goto, stores } from '@sapper/app'
  
  const { session } = stores()
  
  let email = null
  let password = 'user123'

  async function login () {
    await fetch('http://localhost:2000/session', {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    })

    window.location.href= 'profile' 
  }
</script>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

{#if $session.authenticated}
  <!-- Main content header -->
  <div class="flex flex-col items-start justify-between pb-6 space-y-4 border-b lg:items-center lg:space-y-0 lg:flex-row">
    <h1 class="text-2xl font-semibold whitespace-nowrap">Dashboard</h1>
    <!-- 
    <a
      href="https://github.com/Kamona-WD/starter-dashboard-layout"
      target="_blank"
      class="inline-flex items-center justify-center px-4 py-1 space-x-1 bg-gray-200 rounded-md shadow hover:bg-opacity-20"
    >
      <span>
        <svg class="w-4 h-4 text-gray-500" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
          <path
            fill-rule="evenodd"
            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
          ></path>
        </svg>
      </span>
      <span>View on Github</span>
    </a>
    -->
  </div>

  <!-- Start Content -->

  <!-- Chart cards (Four columns grid) -->
  <div class="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2 lg:grid-cols-4">

    <a href="#" class="p-4 transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
      <div class="flex items-start">
        <div class="flex flex-col flex-shrink-0 space-y-2">
          <span class="text-gray-400">Vistas</span>
          <span class="text-lg font-semibold">6897</span>
        </div>
        <div class="relative min-w-0 ml-auto h-14">
          <canvas id="vistsChart"></canvas>
        </div>
      </div>
      <div>
        <span class="inline-block px-2 text-sm text-white bg-green-300 rounded">10%</span>
        <span>del 2019</span>
      </div>
    </a>  

    <a href="#" class="p-4 transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
      <div class="flex items-start">
        <div class="flex flex-col flex-shrink-0 space-y-2">
          <span class="text-gray-400">Usuarios totales</span>
          <span class="text-lg font-semibold">4529</span>
        </div>
        <div class="relative min-w-0 ml-auto h-14">
          <canvas id="usersChart"></canvas>
        </div>
      </div>
      <!--
      <div>
        <span class="inline-block px-2 text-sm text-white bg-green-300 rounded">14%</span>
        <span>del 2019</span>
      </div>
      -->
    </a>

    <a href="#" class="p-4 transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
      <div class="flex items-start">
        <div class="flex flex-col flex-shrink-0 space-y-2">
          <span class="text-gray-400">Votos efectuados</span>
          <span class="text-lg font-semibold">3174</span>
        </div>
        <div class="relative min-w-0 ml-auto h-14">
          <canvas id="articlesChart"></canvas>
        </div>
      </div>
      <div>
        <span class="inline-block px-2 text-sm text-white bg-green-300 rounded">30%</span>
        <span>del 2019</span>
      </div>
    </a>

    <a href="#" class="p-4 transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
      <div class="flex items-start">
        <div class="flex flex-col flex-shrink-0 space-y-2">
          <span class="text-gray-400">Sesiones</span>
          <span class="text-lg font-semibold">40%</span>
        </div>
        <div class="relative min-w-0 ml-auto h-14">
          <canvas id="sessionsChart"></canvas>
        </div>
      </div>
      <div>
        <span class="inline-block px-2 text-sm text-white bg-green-300 rounded">1.2%</span>
        <span>del 2019</span>
      </div>
    </a>
  </div>

  <!-- Two columns grid -->
  <div class="grid grid-cols-1 gap-6 mt-6 lg:grid-cols-2 xl:grid-cols-4">
    <!-- Import data card -->
    <div class="border rounded-lg shadow-sm">
      <!-- Card header -->
      <div class="flex items-center justify-between px-4 py-2 border-b">
        <h5 class="font-semibold">Exportar datos</h5>
        <!-- Dots button -->
        <button class="p-2 rounded-full">
          <svg class="w-6 h-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"/>
          </svg>
        </button>
      </div>
      <p class="px-4 py-6 text-gray-600">Selecciona entre las diferentes opciones:</p>
      <ul class="px-4 pb-4 space-y-4 divide-y">
        <li class="flex items-start justify-between pt-4">
          <div class="flex items-start space-x-3">
            <!-- Twitter icon -->
            <span class="flex items-center pt-1">
              <svg fill="currentColor" class="w-5 h-5 text-blue-500">
                <path
                  d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"
                ></path>
              </svg>
            </span>
            <div>
              <h5 class="font-semibold">Twitter</h5>
              <span class="text-sm font-medium text-gray-400">Retweet</span>
            </div>
          </div>
          <a href="#" class="flex items-center px-2 py-1 space-x-2 text-sm text-white bg-blue-600 rounded-md">
            <span>Acceder</span>
            <span class="">
              <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
            </span>
          </a>
        </li>
        <li class="flex items-start justify-between pt-4">
          <div class="flex items-start space-x-3">
            <!-- Github icon -->
            <span class="flex items-center pt-1">
              <svg width="24" height="24" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 64 88" style="enable-background:new 0 0 64 88;" xml:space="preserve">
                <style type="text/css">
                  .st0{fill:#0DC54C;}
                  .st1{fill:#08962D;}
                  .st2{fill:#FDFFFF;}
                </style>
                <g id="Layer_4">
                  <path class="st0" d="M58,88H6c-3.3,0-6-2.7-6-6V6c0-3.3,2.7-6,6-6h36l22,22v60C64,85.3,61.3,88,58,88z"/>
                  <path class="st1" d="M42,0l22,22H42V0z"/>
                  <path class="st2" d="M12,34.5v28h40v-28H12z M17,39.5h12.5V46H17V39.5z M17,51h12.5v6.5H17V51z M47,57.5H34.5V51H47V57.5z M47,46H34.5v-6.5H47V46z"/>
                </g>
              </svg>
            </span>
            <div>
              <h5 class="font-semibold">Google Sheets</h5>
              <span class="text-sm font-medium text-gray-400">Hoja de datos</span>
            </div>
          </div>
          <a href="#" class="flex items-center px-2 py-1 space-x-2 text-sm text-white bg-blue-600 rounded-md">
            <span>Acceder</span>
            <span class="">
              <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
            </span>
          </a>
        </li>
        <li class="pt-4 text-sm font-medium text-gray-400">
          <p>
            También puedes
            <a href="#" class="font-normal text-blue-500 hover:underline whitespace-nowrap">descargar un archivo<br> de valores separados por coma</a>
          </p>
        </li>
      </ul>
    </div>

    <!-- Monthly chart card -->
    <div class="border rounded-lg shadow-sm xl:col-span-3">
      <!-- Card header -->
      <div class="flex items-center justify-between px-4 py-2 border-b">
        <h5 class="font-semibold">Gráfico de tendencias</h5>
        <!-- Dots button -->
        <button class="p-2 rounded-full">
          <svg class="w-6 h-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"/>
          </svg>
        </button>
      </div>
      <!-- Card content -->
      <div class="flex items-center p-4 space-x-4">
        <span class="text-3xl font-medium">31%</span>
        <span class="flex items-center px-2 space-x-2 text-sm text-green-800 bg-green-100 rounded">
          <span>
            <svg viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4">
              <path
                fill-rule="evenodd"
                d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </span>
          <span>27.4%</span>
        </span>
      </div>
      <!-- Chart -->
      <div class="relative min-w-0 p-4 h-80">
        <canvas id="updatingMonthlyChart"></canvas>
      </div>
    </div>
  </div>

  <!--
  <h3 class="mt-6 text-xl">Usuarios</h3>
  <div class="flex flex-col mt-6">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
        <div class="overflow-hidden border-b border-gray-200 rounded-md shadow-md">
          <table class="min-w-full overflow-x-scroll divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                  Name
                </th>
                <th scope="col" class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                  Title
                </th>
                <th scope="col" class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                  Status
                </th>
                <th scope="col" class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                  Role
                </th>
                <th scope="col" class="relative px-6 py-3">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <template x-for="i in 10" :key="i">
                <tr class="transition-all hover:bg-gray-100 hover:shadow-lg">
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="flex-shrink-0 w-10 h-10">
                        <img class="w-10 h-10 rounded-full"
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                          alt="User Avatar"/>
                      </div>
                      <div class="ml-4">
                        <div class="text-sm font-medium text-gray-900">Jane Cooper</div>
                        <div class="text-sm text-gray-500">jane.cooper@example.com</div>
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-900">Regional Paradigm Technician</div>
                    <div class="text-sm text-gray-500">Optimization</div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <span class="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                      Active
                    </span>
                  </td>
                  <td class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">Admin</td>
                  <td class="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                    <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  -->
{:else}
<form>
<p>Login</p>
<select bind:value={email}>
  <option value={null}>-- Select User Type --</option>
  <option value="user@example.com">Regular</option>
  <option value="owner@example.org">Owner</option>
  <option value="admin@example.net">Admin</option>
</select>
<input type="password" bind:value={password} />
<button type="button" disabled={!email} on:click={login}>Log in</button>
</form>
{/if}
