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
    goto('/auth/register'); 
  }
</script>

<div class="p-12 wrapper">
  <Box class="w-7/12">
    <h2>
      Para ingresar necesitamos<br>tu identificación
    </h2>
    <p>
      Ingresa tu número de identificación
    </p>
    <Input label="Nro de Documento"/>
    <Button class="bg-moe-blue text-white w-36 h-11 font-medium" onclick={submit}>
      Validar
    </Button>
    <p>
      También puedes...
    </p>  
    <Button class="green large" onclick={()=>goto('/auth/whatsapp')}>
      Ingresar vía WhatsApp
      <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.5938 3.32812C13.9922 1.6875 11.8047 0.75 9.46094 0.75C4.69531 0.75 0.789062 4.65625 0.789062 9.42188C0.789062 10.9844 1.21875 12.4688 1.96094 13.7578L0.75 18.25L5.32031 17.0781C6.60938 17.7422 8.01562 18.1328 9.46094 18.1328C14.2656 18.1328 18.25 14.2266 18.25 9.46094C18.25 7.11719 17.2344 4.96875 15.5938 3.32812ZM9.46094 16.6484C8.17188 16.6484 6.92188 16.2969 5.78906 15.6328L5.55469 15.4766L2.82031 16.2188L3.5625 13.5625L3.36719 13.2891C2.66406 12.1172 2.27344 10.7891 2.27344 9.42188C2.27344 5.47656 5.51562 2.23438 9.5 2.23438C11.4141 2.23438 13.2109 2.97656 14.5781 4.34375C15.9453 5.71094 16.7656 7.50781 16.7656 9.46094C16.7656 13.4062 13.4453 16.6484 9.46094 16.6484ZM13.4453 11.2578C13.2109 11.1406 12.1562 10.6328 11.9609 10.5547C11.7656 10.4766 11.6094 10.4375 11.4531 10.6719C11.3359 10.8672 10.9062 11.375 10.7891 11.5312C10.6328 11.6484 10.5156 11.6875 10.3203 11.5703C9.03125 10.9453 8.21094 10.4375 7.35156 8.99219C7.11719 8.60156 7.58594 8.64062 7.97656 7.82031C8.05469 7.66406 8.01562 7.54688 7.97656 7.42969C7.9375 7.3125 7.46875 6.25781 7.3125 5.82812C7.11719 5.39844 6.96094 5.4375 6.80469 5.4375C6.6875 5.4375 6.53125 5.4375 6.41406 5.4375C6.25781 5.4375 6.02344 5.47656 5.82812 5.71094C5.63281 5.94531 5.08594 6.45312 5.08594 7.50781C5.08594 8.60156 5.82812 9.61719 5.94531 9.77344C6.0625 9.89062 7.46875 12.0781 9.65625 13.0156C11.0234 13.6406 11.5703 13.6797 12.2734 13.5625C12.6641 13.5234 13.5234 13.0547 13.7188 12.5469C13.9141 12.0391 13.9141 11.6094 13.8359 11.5312C13.7969 11.4141 13.6406 11.375 13.4453 11.2578Z" fill="#F8F8F8"/>
      </svg>
    </Button>
  </Box>
  <a href="/auth" class="my-5 text-moe-blue">
    Ya estás registrado? <span class="underline">Podés acceder haciendo click aquí.</span>
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
