<script>
  import { goto } from '$app/navigation';
  import Box from '$components/Box.svelte';
	import Button from '$components/Button.svelte';
	import Input from '$components/Input.svelte';

  let InputValue = '';

  function submit() {
    InputValue.length !== 0 ? goto('register/how') : null; 
  }
</script>

<main>
  <Box class="justify-center">
    <div class="header">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 0.625C9.29688 0.625 0.625 9.29688 0.625 20C0.625 30.7031 9.29688 39.375 20 39.375C30.7031 39.375 39.375 30.7031 39.375 20C39.375 9.29688 30.7031 0.625 20 0.625ZM26.25 13.75C27.5781 13.75 28.75 14.9219 28.75 16.25C28.75 17.6562 27.5781 18.75 26.25 18.75C24.8438 18.75 23.75 17.6562 23.75 16.25C23.75 14.9219 24.8438 13.75 26.25 13.75ZM13.75 13.75C15.0781 13.75 16.25 14.9219 16.25 16.25C16.25 17.6562 15.0781 18.75 13.75 18.75C12.3438 18.75 11.25 17.6562 11.25 16.25C11.25 14.9219 12.3438 13.75 13.75 13.75ZM27.0312 30.8594C25.2344 28.75 22.6562 27.5 20 27.5C17.2656 27.5 14.6875 28.75 12.8906 30.8594C11.875 32.1094 9.92188 30.4688 11.0156 29.2188C13.2031 26.5625 16.4844 25 20 25C23.4375 25 26.7188 26.5625 28.9062 29.2188C30 30.4688 28.0469 32.1094 27.0312 30.8594Z" fill="black"/>
      </svg>
      <h2>
        Parece que no estás en el padrón
      </h2>
      <p>
        Si quieres participar de la votación<br>ingresa tu email para indicarte los pasos a seguir
      </p>
    </div>
    <Input label="Email" bind:prop="{InputValue}"/>
    <Button class="white" onclick={submit}>
      Quiero ser parte del padrón
    </Button>
    <p>
      <a href="/auth/identify">
        Volver al inicio
      </a>
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
    font-weight: 300;
    text-transform: uppercase;
  }
</style>
