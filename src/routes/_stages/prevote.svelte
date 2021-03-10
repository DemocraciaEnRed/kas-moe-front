<script>
  // Components
  import Button from '../../components/Button.svelte';
  // Objects
  import { planchas, bloques } from 'util/data';
  import { scroll, title } from 'util/store';
  // Library
  import { onMount } from 'svelte';

  // Lifecycle
  onMount(() => { 
    title.set('Democracias cotidianas');
  });
</script>

<div class="wrapper">
  <div class="w-full p-8 xl:p-24 py-16 gap-12 flex flex-col lg:flex-row justify-between">
    <div class="flex flex-col justify-evenly text-center lg:text-left">
      <div class="flex flex-col gap-y-1 gap-8">
        <h1 class="font-light">Elecciones</h1>
        <h1 class="font-semibold">Juntas de acción Comunal</h1>
      </div>
      <div class="flex flex-col gap-y-1">
        <h2 class="font-light text-moe-blue">El día de la votación es:</h2>
        <h1>8 de agosto 2021</h1>
      </div>
    </div>
    <div class="flex justify-center">
      <svg width="505" height="293" viewBox="0 0 505 293" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="505" height="293" fill="#F7F7F7" fill-opacity="0.8"/>
        <ellipse cx="252.5" cy="144" rx="79.5" ry="81" fill="#C6DEFB" fill-opacity="0.3"/>
        <path d="M285 147.5L236.25 172.182L236.25 122.818L285 147.5Z" fill="#181C8B"/>
      </svg>
    </div>
  </div>
  <div class="h-96 md:h-80 p-12 flex flex-col gap-10 text-center justify-center items-center bg-moe-blue">
    <div class="pb-8 border-b-2 border-white">
      <h2 class="text-white">¿Cómo me registro?</h2>
    </div>
    <div class="flex flex-col sm:flex-row gap-6">
      <Button class="w-72 h-14 uppercase font-medium text-sm text-white border rounded-xl border-white">
        <a href="/auth/register">
          Registro presencial
        </a>
      </Button>
      <Button class="w-72 h-14 uppercase font-medium text-sm text-moe-blue border rounded-xl border-white  bg-white">
        <a href="/auth/register">
          Registro digital
        </a>
      </Button>
    </div>
  </div>
  <div class="w-full p-12 flex flex-col gap-10 text-center justify-center items-center bg-moe-cyan-light">
    <div class="w-8/12 pb-8 border-b-2 border-moe-blue">
      <h2 class="text-moe-blue">Bloques a votar</h2>
    </div>
    <div class="p-4 flex flex-wrap xl:flex-nowrap gap-8 overflow-hidden xl:-mx-3 justify-center items-center">
    {#each bloques as bloque}
      <div class="w-52 h-60 p-4 card xl:my-3 xl:px-3 xl:w-1/5 flex flex-col overflow-hidden">
        <div>
          <p class="text-moe-blue">Bloque</p>
          <h3 class="text-moe-blue font-medium">{@html bloque.name}</h3>
        </div>
        <div class="h-full flex flex-col gap-2 justify-center">
          {@html bloque.roles}
        </div>
      </div>
    {/each}
    </div>
  </div>
  <div class="w-full p-12 flex flex-col gap-10 text-center justify-center items-center bg-white">
    <div class="w-8/12 pb-8 border-b-2 border-moe-blue">
      <h2 class="text-moe-blue">Planchas candidatas</h2>
    </div>
    <div class="flex flex-wrap xl:flex-nowrap justify-center overflow-hidden xl:-mx-3">
    {#each planchas as plancha}
      <div class="flex justify-center p-4 overflow-hidden xl:my-3 xl:px-3 xl:w-1/4">
        <div class="card max-w-sm p-3 flex flex-col gap-2 justify-center items-center">
          <div class="flex flex-col items-center">
            <img class="h-16 w-16 rounded-full" src="gid1.svg" alt={plancha.name}>
            <p>Plancha</p>
            <h3>{plancha.name}</h3>
          </div>
          <img src="avatar-group.svg" alt="Integrantes de la plancha">       
          <p>15 canditatos</p>
          <div class="w-full flex justify-evenly items-center">
            <p class="uppercase text-base text-moe-blue font-bold font-sand">Ver detalles</p>
            <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.46716 7.53125C8.74841 7.25 8.74841 6.78125 8.46716 6.5L2.40466 0.40625C2.09216 0.125 1.62341 0.125 1.34216 0.40625L0.623411 1.125C0.342161 1.40625 0.342161 1.875 0.623411 2.1875L5.43591 7L0.623411 11.8438C0.342161 12.1562 0.342161 12.625 0.623411 12.9062L1.34216 13.625C1.62341 13.9062 2.09216 13.9062 2.40466 13.625L8.46716 7.53125Z" fill="#181C8B"/>
            </svg>            
          </div>
        </div>
      </div>
      {/each}
    </div>
  </div>
  <div class="w-full p-8 xl:p-24 py-16 gap-12 flex flex-col justify-between items-center bg-moe-orange-light">
    <div class="lg:w-2/3 text-center pb-8 border-b-2 border-black">
      <h2>¿Cómo Votar?</h2>
    </div>
    <div class="w-full flex gap-8 flex-col lg:flex-row">
      <div class="w-full gap-8 flex justify-evenly text-center lg:text-left">
        <!-- 
          Por motivos de accesibilidad este apartado deberá contener atributos `alt` describiendo cada paso.
        -->
        <img class="lg:max-w-xl" src="howto-vote.svg" alt="Cómo votar?">
      </div>
      <div class="flex justify-center">
        <svg width="505" height="293" viewBox="0 0 505 293" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="505" height="293" fill="#F06543" fill-opacity="0.1"/>
          <ellipse cx="252.5" cy="144" rx="79.5" ry="81" fill="#FDECE7"/>
          <path d="M285 147.5L236.25 172.182L236.25 122.818L285 147.5Z" fill="#F06543"/>
        </svg>        
      </div>
    </div>
  </div>
  <div class="py-8 px-20 flex gap-8 flex-col md:flex-row justify-between items-center">
    <h2>¿Puedo Votar?</h2>
    <Button class="w-72 h-14 uppercase font-medium text-sm text-white border rounded-xl border-moe-orange  bg-moe-orange">
      Consultar mis datos
    </Button>
  </div>
</div>

<style>
  h1 {
    @apply font-inter text-4xl;
  }
  
  h2 {
    @apply font-inter text-3xl;
  }

  h3 {
    @apply font-inter text-xl;
  }

  .wrapper {
    @apply lg:pt-4 flex flex-col justify-center bg-white;
  }

  .card {
    @apply bg-white rounded-lg;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
</style>