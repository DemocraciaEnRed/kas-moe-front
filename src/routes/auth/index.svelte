<script>
  import { title, action } from 'util/store';
 	import { onMount } from 'svelte';
  import { goto } from '@sapper/app';
  import Box from '../../components/Box.svelte';
	import Button from '../../components/Button.svelte';
	import Input from '../../components/Input.svelte';
  
	onMount(() => { 
    title.set('Iniciar sesión');
  });

  let password = '', email = '';

  function submit() {
    email.length !== 0 ? goto('/') : null; 
  }
</script>

<div class="p-12 wrapper">
  <Box class="w-7/12">
    <h2>
      ¡Hola!
    </h2>
    <p>
      Ingresa los datos de tu cuenta<br> para empezar a participar
    </p>
    <div class="grid gap-6">
      <Input label="Email" bind:prop="{email}"/>
      <Input label="Contraseña" password='true' bind:prop="{password}"/>
    </div>
    <Button class="blue" onclick={submit}>
      Validar
    </Button>
  </Box>
  <a href="/auth" class="my-5 text-moe-blue underline">
    No recuerdo mis datos de ingreso
  </a>
</div>

<style>
  .wrapper {
    @apply h-full flex flex-col items-center text-center bg-moe-cyan;
  }

  h2 {
    @apply font-bold text-2xl text-moe-blue text-center;
  }

  p {
    @apply font-medium text-xl text-moe-blue;
  }
</style>
