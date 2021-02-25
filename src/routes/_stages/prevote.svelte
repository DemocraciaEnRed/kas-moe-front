<script>
  import { scroll, title } from 'util/store';
 	import { onMount } from 'svelte';
  
  let active;
  
  $: active = $scroll;
  onMount(() => { 
    title.set('Democracias cotidianas');
  });
</script>

<style>
  .wrapper {
    @apply pt-4 flex flex-row justify-center bg-white;
    margin-left: -2px;
  }

  img {
    @apply mt-24;
  }
</style>

<div class="wrapper" class:active>
  <img src="view-prevote.svg" alt="">
</div>