<script>
  import { title } from '../store';
 	import { onMount } from 'svelte';
  
  onMount(() => { 
    title.set('¿Cómo votar?');
  });
</script>

