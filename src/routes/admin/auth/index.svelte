<script context="module">
	export async function preload(page, session) {
		if (session.user) {
			return this.redirect(302, '/');
		}
	};
</script>

<script>
  // Libs
  import axios from 'axios';
  import Form from "@svelteschool/svelte-forms";
  // Builtins
  import { goto, stores } from '@sapper/app';
  let values;

  const { session } = stores();

  const base_url = $session.API_BASE_URL;

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

    let url = `${base_url}/auth/jwt/login/`;

    if (process.browser) {
      axios.post(url, params, config)
      .then((response) => {
        if(response.status === 200) {
          $session.access_token = response.data.access_token;
          $session.user = {
            id: '<REDACTED>',
            name: values.email
          };
          goto('/admin');
        }
      }, (error) => {
        console.log(error);
      });
    }
  }
</script>

<div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
  <div class="max-w-md w-full space-y-8">
    <div>
      <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow">
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Democracias Cotidianas
      </h2>
      <p class="mt-2 text-center text-sm text-gray-600">
        ¿Necesitas ayuda?
        <a href="#help" class="font-medium text-indigo-600 hover:text-indigo-500">
          Contacta un administrador
        </a>
      </p>
    </div>
    <form class="mt-8 space-y-6" method="POST" on:submit|preventDefault={handleSubmit}>
      <input type="hidden" name="remember" value="true">
      <div class="rounded-md shadow-sm -space-y-px">
        <Form bind:values>
          <div>
            <label for="email-address" class="sr-only">Email</label>
            <input id="email-address" name="email" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email">
          </div>
          <div>
            <label for="password" class="sr-only">Contraseña</label>
            <input id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Contraseña">
          </div>
        </Form>
      </div>
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <input id="remember_me" name="remember_me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded">
          <label for="remember_me" class="ml-2 block text-sm text-gray-900">
            Recordar mis datos
          </label>
        </div>

        <div class="text-sm">
          <a href="#forgot" class="font-medium text-indigo-600 hover:text-indigo-500">
            ¿Olvidaste tu contraseña?
          </a>
        </div>
      </div>

      <div>
        <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <span class="absolute left-0 inset-y-0 flex items-center pl-3">
            <!-- Heroicon name: lock-closed -->
            <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
            </svg>
          </span>
          Autenticar
        </button>
      </div>
    </form>
  </div>
</div>