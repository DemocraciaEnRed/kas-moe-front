<script>
   // Components
  import Button from '../components/Button.svelte';
  import Spinner from '../components/Spinner.svelte'; 
  import Counter, { getStatus } from '../components/Counter.svelte';
  // Library
  import { stores } from '@sapper/app';
  // Objects
  import { title } from 'util/store';

	const { page } = stores();

  let action = 'Volver al inicio',
    expand = false,
    scrollY = 0;


  if ($page.path === '/') {
    expand = true;
  }
</script>

<svelte:window bind:scrollY/>

<div class="layout">
  <div class="header" class:expand>
    <div class="logos">
      <img src="product.svg" alt="Logotipo de la plataforma">
      <img src="event.svg" alt="Logotipo del evento">
    </div>
    <div class="title">
      <h1>
        {$title}
      </h1>
    </div>
    <div class="action">
      {scrollY}
      <Button class="transparent">
        <a class="uppercase" href="/auth/identify">
          {action}
        </a>
      </Button>
    </div>
    {#if $page.path === '/'}
    <!--
      <div style="grid-column: 1;">
        <svg width="1366" height="244" viewBox="0 0 1366 244" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="1366" height="244" fill="#ECF4FE"/>
        </svg>
        <p>
          Pronto se habilitará<br> el proceso de conteo
        </p>
      </div>
      <div style="grid-column: 3;">right</div>
     -->
      <div style="grid-column: 2; z-index: 1;">
        <Counter/>
      </div>
    {/if}
  </div>
  <div class="content">
  {#await $getStatus}
    <Spinner/>
  {:then}
    <slot />
  {/await}
    <div class="footer">
      <div class="w-1/2 py-8 grid grid-cols-2 grid-rows-3 self-center text-white uppercase">
        <p>¿Como votar?</p>
        <p>Votar por whatsapp</p>
        <p>Sobre nosotros</p>
        <p>Bloques a votar</p>
        <p>Planchas candidatas</p>
      </div>
      <div>
      </div>
    </div>
  </div>
</div>

<style>
  /*
  .expand {
    grid-template-rows: 13.5em 1fr 9em !important;
  }
    */

  .expand {
    grid-template-rows: 5em 8.75em !important;
  }

  .layout {
    @apply h-screen grid gap-0;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    grid-template-rows: auto 1fr;
    grid-template-areas:
      "header"
      "content";
  }
  
  .header {
    @apply sticky top-0 grid gap-0 grid-cols-3 bg-moe-cyan;
    grid-template-rows: 5em;
    grid-template-areas: "logos title action";
    grid-area: header;
  }

  .title {
    @apply invisible flex items-center justify-center;
    grid-area: title;
  }
  
  .logos {
    @apply px-10 flex items-center justify-around;
    grid-area: logos;
  }
  
  .action {
    @apply pr-12 flex items-center justify-center justify-self-end;
    grid-area: action;
  }

  .content {
    @apply grid justify-center bg-white;
    grid-area: content;
  }

  .footer {
    @apply flex flex-col bg-moe-blue-dark;
  }
</style>
