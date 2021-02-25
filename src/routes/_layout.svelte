<script>
  // Inherited
  export let segment;

   // Components
  import Header from '../components/Header.svelte';
  import Counter, { getStatus } from '../components/Counter.svelte';
  import Footer from '../components/Footer.svelte';
  // Objects
  import { scroll } from 'util/store';
  // Library
  import { stores } from '@sapper/app';

  const { page } = stores();

  let scrollY, active;
  
  $: (active = scrollY > 50 ? true : false) & scroll.set(active);
</script>

<svelte:window bind:scrollY/>

<div class="layout">
  <div class="header" class:active>
    <Header {segment}/>
  </div>
  <div class="content">
    <main>
    {#if $page.path==='/'}
      <Counter/>
    {/if}
      <slot/>
      <Footer/>
    </main>
  </div>
</div>

<style>
  .layout {
    @apply min-h-screen h-screen grid gap-0 grid-cols-1;
    grid-template-rows: 5rem 1fr;
    grid-template-areas:
      "header"
      "content"
  }
  
  .header {
    @apply z-10 grid gap-0 grid-cols-3 grid-rows-1 bg-moe-cyan;
    grid-template-areas: "logos title action";
    grid-area: header;
  }

  .active {
    @apply fixed h-20 min-w-full;
  }

  .content {
    @apply flex flex-col;
    grid-template-rows: auto 1fr;
    grid-area: content;
  }

  main {
    @apply flex flex-col h-full box-border overflow-x-auto;
  }
</style>
