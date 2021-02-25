<script>
  import { goto } from '@sapper/app';
  import Box from '../../components/Box.svelte';
	import Button from '../../components/Button.svelte';
</script>

<main>
  <Box class="justify-center">
    <div class="header">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M39.375 20C39.375 9.375 30.625 0.625 20 0.625C9.29688 0.625 0.625 9.375 0.625 20C0.625 30.7031 9.29688 39.375 20 39.375C30.625 39.375 39.375 30.7031 39.375 20ZM17.7344 30.3125C17.2656 30.7812 16.4062 30.7812 15.9375 30.3125L7.8125 22.1875C7.34375 21.7188 7.34375 20.8594 7.8125 20.3906L9.60938 18.6719C10.0781 18.125 10.8594 18.125 11.3281 18.6719L16.875 24.1406L28.5938 12.4219C29.0625 11.875 29.8438 11.875 30.3125 12.4219L32.1094 14.1406C32.5781 14.6094 32.5781 15.4688 32.1094 15.9375L17.7344 30.3125Z" fill="black"/>
      </svg>
      <h2>
        Buenas noticias
      </h2>
      <p>
        Validamos tus datos y ya está todo listo para que participes
      </p>
    </div>
    <Button onclick={()=>goto('/vote/how')}>
      ¿Cómo votar?
    </Button>
    <Button class="white" onclick={()=>goto('/vote')}>
      Quiero votar
    </Button>
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
