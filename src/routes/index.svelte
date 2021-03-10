<script>
  // Routes
  import Prevote from './_stages/prevote.svelte';
  import Vote from './_stages/vote.svelte';
  import Preresult from './_stages/preresult.svelte';
  import Result from './_stages/result.svelte';
  // Objects
  import { title, status } from 'util/store';
  // Library
  import { onMount } from 'svelte';
  import { stores } from '@sapper/app';
  const { session } = stores();

  // Lifecycle
	onMount(async () => {
    console.log($session.access_token);
    title.set('Democracias cotidianas');
    status.set('vote');
  });
</script>

{#if $status === 'prevote' || !$session.user}
  <Prevote/>
{:else if $status === 'vote' && $session.user}
  <Vote/>
{:else if $status === 'preresult'}
  <Preresult/>
{:else if $status === 'result'}
  <Result/>
{/if}