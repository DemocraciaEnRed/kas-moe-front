<script>
  import { goto, stores } from "@sapper/app";

	const { page } = stores();

  let items = [
    { href: '/admin',  name: 'Dashboard', draw: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z'},
    { href: '/admin/time',  name: 'Cronograma', draw: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'},
    { href: '/admin/action',  name: 'Acciones', draw: 'M7 20l4-16m2 16l4-16M6 9h14M4 15h14'},
    { href: '/admin/analytics',  name: 'Métricas', draw: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'},
    { href: '/admin/users',  name: 'Usuarios', draw: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z'},
    { href: '/admin/candidatos',  name: 'Candidatos', draw: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'},
    { href: '/admin/settings',  name: 'Opciones', draw: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'}
  ];

  let isOpen = false;
  let openSearch = false;
  let openProfile = false;
  let openSidebar = false;
  let openNotifications = false;
  
  function toggleSidebar() {
    openSidebar =! openSidebar;
  }

  function clickOutside(node, {enabled: initialEnabled, cb}) {
    /*
    const handleOutsideClick = ({ target }) => {
      if (!node.contains(target)) {
        cb();
      }
    };

    function update({enabled}) {
      if (enabled) {
        window.addEventListener('click', handleOutsideClick);
      } else {
        window.removeEventListener('click', handleOutsideClick);
      }
    }

    update({ enabled: initialEnabled });
    return {
      update, use:clickOutside={ enabled: open, cb: () => open = false },
      destroy() {
        window.removeEventListener( 'click', handleOutsideClick );
      }
    };
    */
  }

  let crono = `
    <svg class="w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${items[0].draw}" />
    </svg>
  `;

  let action = `
    <svg class="w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${items[1].draw}" />
    </svg>
  `;

  let user = `
    <svg class="w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${items[2].draw}" />
    </svg>
  `;

  let metric = `
    <svg class="w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${items[3].draw}" />
    </svg>
  `;

  let data = `
    <svg class="w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${items[4].draw}" />
    </svg>
  `;

  import Search from './Search.svelte';
  const onPick = ({detail}) => selectedOption = detail;
  let options = [
    { label: "Agregar un usuario", icon: action },
    { label: "Modificar permisos de un usuario", icon: action },
    { label: "Modificar el cronograma", icon: crono },
    { label: "Editar el padrón", icon: action },
    { label: "Generar reportes", icon: metric},
    { label: "Ver el cronograma", icon: crono },
    { label: "Ver el padrón", icon: data },
  ];
  let inputEl;
  let selectedOption;
  let value;
</script>

<style>
  .search-header {
    flex: auto;
    display: flex;
    align-items: center;
    min-width: 0;
  }

  .search-cancel {
    flex: none;
    font-size: 0;
    border-radius: .375rem;
    background-color: #f9fafb;
    border: 1px solid #d1d5db;
    padding: .125rem .375rem;
  }

  .search-cancel:before {
    content: "Esc";
    color: #9ca3af;
    font-size: .875rem;
    line-height: 1.25rem;
  }

  .active {
    @apply bg-gray-200;
  }
</style>

<div class="flex h-screen overflow-y-hidden bg-white">
  <!-- Sidebar backdrop
    x-show.in.out.opacity="openSidebar"
  -->
  {#if openSidebar}
    <div class="fixed inset-0 z-10 bg-black bg-opacity-20 lg:hidden" style="backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px)"></div>
  {/if}
  <!-- Sidebar
    x-transition:enter="transition transform duration-300"
    x-transition:enter-start="-translate-x-full opacity-30  ease-in"
    x-transition:enter-end="translate-x-0 opacity-100 ease-out"
    x-transition:leave="transition transform duration-300"
    x-transition:leave-start="translate-x-0 opacity-100 ease-out"
    x-transition:leave-end="-translate-x-full opacity-0 ease-in"
  -->

  <aside
    class="{!openSidebar?'-translate-x-full lg:translate-x-0 lg:w-20':''} fixed inset-y-0 z-10 flex flex-col flex-shrink-0 w-48 max-h-screen overflow-hidden transition-all transform bg-white border-r shadow-lg lg:z-auto lg:static lg:shadow-none">
    <!-- sidebar header -->
    <div class="flex items-center justify-center flex-shrink-0 p-2 {!openSidebar?'lg:justify-center':''}">
      <!-- ToDo: Refactor sidebar header
      <span class="p-2 text-xl font-semibold leading-8 tracking-wider uppercase whitespace-nowrap">
        <span class={openSidebar?'lg:hidden':''}>
          <svg class="w-6 h-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </span>
        <span class={!openSidebar?'lg:hidden':''}>
          <svg class="w-6 h-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </span>
      </span>
      -->
      <button on:click={toggleSidebar} class="p-2 rounded-md lg:hidden">
        <svg class="w-6 h-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
    <!-- Sidebar links -->
    <nav class="flex-1 overflow-hidden hover:overflow-y-auto">
      <ul class="p-2 space-y-6 overflow-hidden">
      {#each items as item}
        <li>
          <a href={item.href} class:active={$page.path===item.href} class="flex items-center p-5 space-x-2 rounded-md h-16 hover:bg-gray-100">
            <span>
              <svg class="w-6 h-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={item.draw} />
              {#if item.name === 'Opciones'}
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              {/if}
              </svg>
            </span>
            <span class="{!openSidebar?'lg:hidden':''} pl-2">{item.name}</span>
          </a>
        </li>
      {/each}
      </ul>
    </nav>
    <!-- Sidebar footer -->
    <div class="flex-shrink-0 p-2 border-t max-h-14">
      <button on:click={()=>goto('/admin/auth/logout')} class="flex items-center justify-center w-full px-4 py-2 space-x-1 font-medium tracking-wider uppercase bg-gray-100 border rounded-md focus:outline-none focus:ring">
        <span>
          <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
          </svg>
        </span>
        <span class={!openSidebar?'lg:hidden':''}> Salir </span>
      </button>
    </div>
  </aside>

  <div class="flex flex-col flex-1 h-full overflow-hidden">
    <!-- Navbar -->
    <header class="flex-shrink-0 border-b">
      <div class="flex items-center justify-between p-2">
        <!-- Navbar left -->
        <div class="flex items-center space-x-3">
          <!-- Toggle sidebar button -->
          <button on:click={toggleSidebar} class="p-2 rounded-md focus:outline-none focus:ring">
            <svg class="w-4 h-4 text-gray-600 {openSidebar?'transform transition-transform -rotate-180':''}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <!-- Mobile search box -->
        {#if openSearch}
        <div x-show.transition="openSearch" class="fixed inset-0 z-10 bg-black bg-opacity-20"
          style="backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px)">
          <!-- 
            @click.away="openSearch = false"
          -->
          <div class="absolute inset-x-0 flex items-center justify-between p-2 bg-white shadow-md">
            <div class="flex items-center flex-1 px-2 space-x-2">
              <!-- search icon -->
              <span>
                <svg class="w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
              </span>
              <input type="text" placeholder="Buscar usuarios, acciones, métricas..."
                class="w-full px-4 py-3 text-gray-600 rounded-md focus:bg-gray-100 focus:outline-none"/>
            </div>
            <!-- close button -->
            <button on:click={()=>openSearch=false} class="flex-shrink-0 p-4 rounded-md">
              <svg class="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        {/if}

        <!-- Desktop search box -->
        <div class="items-center hidden px-2 space-x-4 md:flex-1 md:flex md:mr-auto md:ml-5">
          <!-- search icon -->
          <span>
            <svg class="w-5 h-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
          </span>
          <Search {options} {inputEl} bind:value on:pick={onPick} keys={['label', 'link', 'icon']}>
            <span slot="input" class="flex mx-6 items-center border-b border-gray-200">
              <form action role="search" novalidate class="search-header">
                <span>
                  <svg class="w-5 h-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                  </svg>
                </span>            
                <input type="text" bind:value bind:this={inputEl} placeholder="Buscar usuarios, acciones, métricas..."
                  class="h-16 w-100 min-w-0 text-lg px-4 py-3 md:py-2 md:flex-1 bg-transparent focus:outline-none"/>
              </form>
              <button class="search-cancel">Cancelar búsqueda</button>
            </span>
            <span slot="item" let:option class="search-option">
              <!-- 
              <span class="search-icon">
                {@html option.html.icon}
              </span>
              -->
              <span class="block mt-1">
                {@html option.html.icon}
              </span>
              {@html option.html.label}
            </span>
          </Search>
        </div>

        <!-- Navbar right -->
        <div class="relative flex items-center space-x-3">
          <!-- Search button -->
          <button on:click={()=>openSearch=true}
            class="p-2 bg-gray-100 rounded-full md:hidden focus:outline-none focus:ring hover:bg-gray-200">
            <svg class="w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
          </button>

          <div class="items-center hidden space-x-3 md:flex">
            <!-- Options Button x-data="{ isOpen: false }"-->
            <div class="relative">
              <button on:click={()=>isOpen=!isOpen} class="p-2 bg-gray-100 rounded-full hover:bg-gray-200 focus:outline-none focus:ring">
                <svg class="w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/>
                </svg>
              </button>

              <!-- Dropdown card
                @click.away="isOpen = false"
                x-show.transition.opacity="isOpen"
              -->
              {#if isOpen}
              <div use:clickOutside={{ enabled: isOpen, cb: () => isOpen = false }}
                class="absolute w-56 max-w-lg mt-3 transform bg-white rounded-md shadow-lg -translate-x-3/4 min-w-max">
                <div class="p-4 text-lg font-medium border-b">
                  <span class="text-gray-800">Opciones</span>
                </div>
                <ul class="flex flex-col p-2 my-3 space-y-3">
                  <li>
                    <a href="/admin/settigs#theme" class="flex text-lg px-2 py-1 space-x-2 transition rounded-md hover:bg-gray-100">
                      <span class="block mt-1">
                        <svg class="w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg>
                      </span>
                      <span class="flex flex-col">
                        <span class="text-lg">Alternar colores</span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/admin/settings#lang" class="flex text-lg px-2 py-1 space-x-2 transition rounded-md hover:bg-gray-100">
                      <span class="block mt-1">
                        <svg class="w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                        </svg>
                      </span>
                      <span class="flex flex-col">
                        <span class="text-lg">Idioma</span>
                      </span>
                    </a>
                  </li>
                </ul>
                <div class="flex items-center justify-center p-4 text-blue-700 underline border-t">
                  <a href="/admin/settings">Configuración</a>
                </div>
              </div>
              {/if}
            </div>

            <!-- Notification Button
            x-data="{ isOpen: false }"
              -->
            <div class="relative">
              <!-- red dot -->
              <div class="absolute right-0 p-1 bg-red-400 rounded-full animate-ping"></div>
              <div class="absolute right-0 p-1 bg-red-400 border rounded-full"></div>
              <button on:click={()=>openNotifications=!openNotifications}
                class="p-2 bg-gray-100 rounded-full hover:bg-gray-200 focus:outline-none focus:ring">
                <svg class="w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
                </svg>
              </button>

              <!-- Dropdown card 
                @click.away="isOpen = false"
                x-show.transition.opacity="isOpen"
              -->
              {#if openNotifications}
                <div class="absolute w-56 max-w-lg mt-3 transform bg-white rounded-md shadow-lg -translate-x-3/4 min-w-max">
                  <div class="p-4 text-lg font-medium border-b">Notificaciones</div>
                  <ul class="flex flex-col p-2 my-3 space-y-3">
                    <li>
                      <a href="/admin/actions" class="flex items-start px-2 py-1 space-x-2 rounded-md hover:bg-gray-100">
                        <span class="block mt-1">
                          <svg class="w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                          </svg>
                        </span>
                        <span class="flex flex-col">
                          <span class="text-lg">Acciones</span>
                          <span class="text-sm text-gray-400">Nuevo usuario generado</span>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="/admin/schedule" class="flex items-start px-2 py-1 space-x-2 rounded-md hover:bg-gray-100">
                        <span class="block mt-1">
                          <svg class="w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </span>
                        <span class="flex flex-col">
                          <span class="text-lg">Cronograma</span>
                          <span class="text-sm text-gray-400">El registro fue habilitado</span>
                        </span>
                      </a>
                    </li>
                  </ul>
                  <div class="flex items-center justify-center p-4 text-blue-700 underline border-t">
                    <a href="/admin/history">Historial</a>
                  </div>
                </div>
              {/if}
            </div>
          </div>

          <!-- avatar button x-data="{ isOpen: false }"-->
          <div class="relative">
            <!-- 
            <button on:click={()=>openProfile=!openProfile} class="p-1 bg-gray-200 rounded-full focus:outline-none focus:ring">
              <img class="object-cover w-8 h-8 rounded-full" alt="User Avatar"
                src="https://avatars0.githubusercontent.com/u/57622665?s=460&u=8f581f4c4acd4c18c33a87b3e6476112325e8b38&v=4"/>
            </button>
            -->

            <!-- Dropdown card
              @click.away="isOpen = false"
              x-show.transition.opacity="isOpen"
            -->
            {#if openProfile}
            <div class="absolute mt-3 transform -translate-x-full bg-white rounded-md shadow-lg min-w-max">
              <div class="flex flex-col p-4 space-y-1 font-medium border-b">
                <span class="text-gray-800">Nombre Apellido/s</span>
                <span class="text-sm text-gray-400">user@email.com</span>
              </div>
              <ul class="flex flex-col p-2 my-2 space-y-1">
                <li>
                  <a href="/admin/profile" class="block px-2 py-1 transition rounded-md hover:bg-gray-100">Perfil</a>
                </li>
              </ul>
              <div on:click={()=>goto('/auth/logout')} class="flex items-center justify-center p-4 text-blue-700 underline border-t">
                <a href="/admin/auth/logout">Salir</a>
              </div>
            </div>
            {/if}
          </div>
        </div>
      </div>
    </header>
    <slot/>
    <!-- Main footer -->
    <footer class="flex items-center justify-between flex-shrink-0 p-4 border-t max-h-14">
      <div>DER &copy; 2020</div>
      <div>
        <!-- Github svg -->
        <a href="https://github.com/Kamona-WD/starter-dashboard-layout" target="_blank" class="flex items-center space-x-1">
          <svg class="w-6 h-6 text-gray-400" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
          </svg>
          <span class="hidden text-sm md:block">Ver en Github</span>
        </a>
      </div>
    </footer>
  </div>
</div>