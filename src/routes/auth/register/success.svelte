<script>
  import { title } from '../../store';
 	import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import Box from '$components/Box.svelte';
	import Button from '$components/Button.svelte';
  import Counter from '$components/Counter.svelte';
  import Input from '$components/Input.svelte';
  
	onMount(() => { 
    title.set('Registro');
  });

  let InputValue = '';

  function submit() {
    InputValue.length !== 0 ? goto('/auth') : goto('join'); 
  }
</script>

<main>
  <Box class="xsm-height row justify-between">
    <div class="progress">  
      <h2>
        Procesando datos
      </h2>
      <h2>
        3/3
      </h2>
      <Button onclick={()=>goto('/auth/register/success')}>
        Finalizar
      </Button>
    </div>
  </Box>
  <Box class="l-width xsm-margin-top">
    <div class="step">
      <svg width="92" height="92" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M92 17.25V74.75H0V17.25H92ZM6.42383 23L46 42.8105L85.5762 23H6.42383ZM86.25 69V29.1094L46 49.1895L5.75 29.1094V69H86.25Z" fill="black"/>
      </svg>
      <h2>
        Te notificaremos una vez terminemos de<br>validar y procesar tus datos
      </h2>
      <p>
        Te enviaremos un correo electronico avisandote que ya puedes<br>votar, mientras tanto puedes ver informarte de las candidaturas<br>y el proceso a través de la portada
      </p>
      <Button class="white" onclick={()=>goto('/')}>
        Ir a la portada
      </Button>
      <p>
        El proceso de votación iniciará en...
      </p>
      <Counter/>
    </div>
  </Box>
</main>

<style>
  h2, p {
    font-weight: 400;
    align-self: center;
    text-transform: uppercase;
  }

  p {
    text-transform: initial;
    font-family: 'Quicksand', sans-serif;
  }

  main {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .progress {
    width: 100%;
    padding: 2em;
    display: grid;
    align-items: center;
    grid-template-columns: 1fr .3fr .5fr;
  }

  .step {
    width: 100%;
    display: grid;
    place-items: center;
    justify-content: space-around;
    grid-template-rows: .1fr .1fr .1fr .1fr; 
    text-align: center;
  }
</style>
