<script>
  // Components
  import Box from '../../components/Box.svelte';
	import Input from '../../components/Input.svelte';
	import Button from '../../components/Button.svelte';
  // Objects
  import { title, action } from 'util/store';
  // Builtins
  import { onMount } from 'svelte';
  import { goto, stores } from '@sapper/app';
  // Libs
  import axios from 'axios';
  import Form from "@svelteschool/svelte-forms";

  const { session } = stores();

  // Lifecycle
  let values;

	onMount(async () => { 
    title.set('Iniciar sesión');
  });

  // Functions
  async function handleSubmit() {

    const params = new URLSearchParams()
    
    params.append('username', values.email)
    params.append('password', values.password)
    
    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }

    const base_url = $session.API_BASE_URL;
    
    let url = `${base_url}/auth/jwt/login/`;

    if (process.browser) {
      axios.post(url, params, config)
      .then((response) => {
        if(response.status === 200) {
          $session.access_token = response.data.access_token;
          $session.authenticated = true;
          $session.user = {
            id: 'CI 21.304.0930',
            name: values.email
          };
          goto('/');
        }
      }, (error) => {
        console.log(error);
      });
    }
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
    <Form bind:values>
      <div class="grid gap-6">
        <Input placeholder="Email" name="email"/>
        <Input placeholder="Contraseña" password='true' name="password"/>
      </div>
    </Form>
    <Button class="bg-moe-blue text-white w-36 h-11 font-medium" onclick={handleSubmit}>
      Validar
    </Button>
  </Box>
  <a href="/auth/identify" class="my-5 text-moe-blue">
    Necesitas una cuenta? <span class="underline">Haz click aquí para registrarte.</span>
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
