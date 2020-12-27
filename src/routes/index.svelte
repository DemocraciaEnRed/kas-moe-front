<script>
  // Routes
  import Prevote from './_stages/prevote.svelte';
  import Vote from './_stages/vote.svelte';
  import Preresult from './_stages/preresult.svelte';
  import Result from './_stages/result.svelte';
  // Components
  import Spinner from '$components/Spinner.svelte';
  import Counter, { getStatus } from '$components/Counter.svelte';
  // Objects
  import { title, status } from '$util/store';
  // Library
  import { onMount } from 'svelte';

  // Lifecycle
	onMount(async () => {
    title.set('Democracias cotidianas');
  });
</script>

<main>
{#await $getStatus}
  <Spinner/>
{:then election}
  <Counter/>
  {#if $status === 'prevote'}
    <Prevote/>
  {:else if $status === 'vote'}
    <Vote/>
  {:else if $status === 'preresult'}
    <Preresult/>
  {:else if $status === 'result'}
    <Result/>
  {/if}
{/await}
</main>

<style>
  main {
    text-align: center;
    align-self: center;
  }
  
  h2 {
    font-weight: 300; 
    text-transform: uppercase;
  }
</style>
