<script>
  import { goto } from '$app/navigation';
  import Box from '$components/Box.svelte';
	import Button from '$components/Button.svelte';
  import { title } from '../../store.js';
	import { onMount } from 'svelte';

	onMount(() => {
    title.set('Registro');
  });
</script>

<main>
  <Box class="sm-height">
    <h2>
      ¿Cómo te gustaría inscribirte?
    </h2>
    <div class="buttons">
      <div>  
        <Button onclick={()=>goto('presential')}>
          Inscripción presencial
        </Button> 
        <p>
          Deberás dirigirte al punto de<br>inscripción más cercano
        </p>
      </div>
      <div>  
        <Button onclick={()=>goto('/auth/register/')}>
          Inscripción digital
        </Button>
        <p>
          Completarás 3 pasos donde<br>ingresaras tus datos y los validaremos<br>para que puedas votar
        </p>
      </div>
    </div>
  </Box>
</main>

<style>
  h2 {
    text-transform: uppercase;
  }

  .buttons {
    text-align: center;
    display: flex;
    gap: 3em;
  }

  p {
    font-family: 'Quicksand', sans-serif;
    font-weight: 300;
  }
</style>
