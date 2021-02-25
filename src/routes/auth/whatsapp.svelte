<script>
  import { title } from 'util/store';
 	import { onMount } from 'svelte';
  import { goto } from '@sapper/app';
  import Box from '../../components/Box.svelte';
	import Button from '../../components/Button.svelte';
	import Input from '../../components/Input.svelte';
  
	onMount(() => { 
    title.set('Iniciar sesión');
  });

  let InputValue = '';

  function submit() {
    InputValue.length !== 0 ? goto('/auth/whatsapp_success') : null; 
  }
</script>

<div class="p-12 wrapper">
  <Box class="w-7/12">
    <h2>
      Te falta un paso más para empezar a votar
    </h2>
    <p>
      Ingresa el código que llegó a<br> tu numero de WhatsApp
    </p>
    <Input bind:prop={InputValue} code/>
    <Button class="disabled">
      Ingresar
    </Button>
  </Box>
  <a href="/auth" class="my-5 text-moe-blue underline">
    No tengo un código de WhatsApp
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
