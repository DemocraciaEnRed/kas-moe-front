<script>
  import Button from '../../components/Button.svelte';

  import { scroll, title, action } from 'util/store';
 	import { onMount } from 'svelte';
  
  let active;
  
  $: active = $scroll;
  $: $action = 'Salir de la votación';
  onMount(() => { 
    title.set('Democracias cotidianas');
  });
</script>

<div class="wrapper" class:active>
  <div class="hero">
    <div class="card">
      <div class="card-header">
        <div class="box">
          <div class="flex flex-col">
            <h1>Elecciones</h1>
            <h1>Juntas de acción Comunal</h1>
          </div>
          <p>
            ¡Bienvenidos y bienvenidas al proceso democrático donde los afiliados de las Juntas<br>
            de Acción Comunal tienen la posibilidad de elegir a las personas<br>
            que los representarán durante un período de cuatro años!
          </p>
        </div>
      </div>
      <div class="card-action">
        <p>
          ¡Ya puedes participar en las elecciones<br> de la Junta de accion Comunal en Pereira!
        </p>
        <Button class="green-light">
          <a class="uppercase" href='/vote'>
            Ir a votar
          </a>
        </Button>
      </div>
    </div>
  </div>
  <div>
    <img src="view-vote.svg" alt=""/>      
  </div>
</div>

<style>
  .wrapper {
    @apply pt-24 flex flex-col gap-24 justify-center bg-white;
  }
  /*
  .active {
    @apply -mt-24;
  }
  */
  .hero {
    @apply w-full h-5/6 bg-white flex justify-center items-center;
  }

  .card {
    @apply w-4/6 h-96 flex bg-white rounded-lg;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  .card-header {
    @apply w-4/6 pt-8 flex justify-center bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 rounded-l-lg;
  }

  .box {
    @apply w-11/12 h-3/4 p-6 gap-6 bg-white flex flex-col justify-center rounded-lg;
  }

  h1 {
    @apply text-3xl font-inter font-medium;
  }

  .card-action {
    @apply w-2/5 p-4 py-8 flex flex-col justify-between items-center;
  }
</style>