<script>
  import { title } from 'util/store';
 	import { onMount } from 'svelte';
  import { goto } from '@sapper/app';
  import Box from '../../components/Box.svelte';
	import Button from '../../components/Button.svelte';
	import Input from '../../components/Input.svelte';
  import Form from "@svelteschool/svelte-forms";

  let values;
	onMount(() => { 
    title.set('Iniciar sesión');
  });

  function handleSubmit() {
    // To-Do: Apply `yup` for string validation
    values.email.length !== 0 ? goto('/auth/register') : null; 
  }
</script>

<div class="p-12 wrapper">
  <Box class="w-7/12">
    <div class="flex flex-col gap-6">
      <svg class="m-auto" width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="42" cy="42" r="42" fill="#C4C4C4"/>
      </svg>
      <h2>
        Parece que no estás en el padrón
      </h2>
      <p>
        Si quieres participar proporcionanos tu email<br>para enviarte los pasos a seguir
      </p>
    </div>
    <Form bind:values>
      <Input label="Ingresa tu correo electrónico" name="email"/>
    </Form>
    <Button class="bg-moe-blue text-white w-36 h-11 font-medium" onclick={handleSubmit}>
      Enviar
    </Button>
  </Box>
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
