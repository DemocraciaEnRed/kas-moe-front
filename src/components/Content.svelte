<script>
  // Components
  import Spinner from './Spinner.svelte';
  import Counter, { getStatus } from './Counter.svelte';
  import Footer from './Footer.svelte';
  // Library
  import { stores } from '@sapper/app';

  const { page } = stores();
</script>

{#await $getStatus}
  <Spinner/>
{:then}
  <main>
  {#if $page.path==='/'}
    <Counter/>
  {/if}
    <slot/>
  </main>
  <Footer/>
{/await}

<style>
  main {
    @apply flex flex-col h-full box-border overflow-x-auto bg-moe-cyan;
  }
</style>
