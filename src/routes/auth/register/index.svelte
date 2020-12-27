<script>
  import { title } from '$util/store';
 	import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import Box from '$components/Box.svelte';
	import Button from '$components/Button.svelte';
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
        Ingreso de tus datos
      </h2>
      <h2>
        1/3
      </h2>
      <Button onclick={()=>goto('/auth/register/picture')}>
        Siguiente
      </Button>
    </div>
  </Box>
  <Box class="xsm-margin-top l-width">
    <div class="step">
      <h2>
        Registro del votante
      </h2>
      <Input label="Nro de documento" bind:prop="{InputValue}"/>
      <div class="two-columns">  
        <Input label="Nombre" bind:prop="{InputValue}"/>
        <Input label="Apellido" bind:prop="{InputValue}"/>
        <Input label="Email" bind:prop="{InputValue}"/>
        <Input label="Confirmar tu email" bind:prop="{InputValue}"/>
      </div>
      <p>
        ¿Aceptas los terminos de votación?
      </p>
    </div>
  </Box>
</main>

<style>
  h2, p {
    font-weight: 400;
    align-self: center;
    text-transform: uppercase;
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
    justify-content: space-around;
    grid-template-rows: 1fr 1fr 2fr 1fr;   
  }
  
  .two-columns {
    display: grid;
    grid-row-gap: 2.5em;
    grid-column-gap: 5em;
    grid-template-columns: 1fr 1fr;
  }
</style>
