<script>
  import { title } from '$util/store';
 	import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import Box from '$components/Box.svelte';
	import Button from '$components/Button.svelte';
	import Input from '$components/Input.svelte';
  
	onMount(() => { 
    title.set('Iniciar sesión');
  });

  let InputValue = '';

  function submit() {
    InputValue.length !== 0 ? goto('/auth/success') : null; 
  }
</script>

<main>
  <Box>
    <div class="header">
      <h2>
        Bienvenidx
      </h2>
      <p>
        Ingresa tus datos para empezar a participar
      </p>
    </div>
    <Input label="Email" bind:prop="{InputValue}"/>
    <Input label="Contraseña" bind:prop="{InputValue}"/>
    <Button onclick={submit}>
      Ingresar
    </Button>
    <p>
      No recuerdo mis datos
    </p>
  </Box>
</main>

<style>
  h2 {
    text-transform: uppercase;
  }

  .header {
    text-align: center;
  }

  .header p {
    font-size: 18px;
    font-weight: 300;
    text-transform: uppercase;
  }
</style>
