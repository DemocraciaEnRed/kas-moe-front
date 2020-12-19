<script>
  import { title } from '../../store';
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
        Validaremos tu documento
      </h2>
      <h2>
        2/3
      </h2>
      <Button onclick={()=>goto('/auth/register/success')}>
        Siguiente
      </Button>
    </div>
  </Box>
  <Box class="xsm-margin-top l-width justify-initial">
    <div class="step">
      <h2>
        Agrega una foto de tu documento
      </h2>
      <div class="two-columns">
        <div>
          <h3>Frente del documento</h3>
          <p>
            Puedes arrastar la imagen o cargarla<br>desde tus archivos
          </p>
          <Button>
            Cargar foto
          </Button>
        </div>
        <img src="/documento-frente.svg" alt="Frente del Documento"
          style="border: solid 1px"/>
        <div>
          <h3>Dorso del documento</h3>
          <p>
            Puedes arrastar la imagen o cargarla<br>desde tus archivos
          </p>
          <Button>
            Cargar foto
          </Button>
        </div>
        <img src="/documento-dorso.svg" alt="Dorso del Documento"/>
      </div>

    </div>
  </Box>
</main>

<style>
  h2, h3, p {
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
    justify-content: space-around;
    grid-template-rows: 1fr 3fr;   
  }

  .two-columns {
    display: grid;
    grid-row-gap: 3em;
    grid-column-gap: 2em;
    grid-template-columns: 3fr 2fr;
  }

  img {
    justify-self: center;
  }
</style>
