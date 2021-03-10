<script context="module">
  export async function preload (page, session) {
		/*
    if (!session.user) {
			return this.redirect(302, '/auth');
		} else return {
      profile: session.profile
    }
    */
  }
</script>

<script>
  export let profile

  let phase = 'vote';
  async function handleSubmit() {
    let date = '271293';
    await fetch('http://localhost:2000/status', {
      method: 'PATCH',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        phase,
        date
      })
    })
  }
</script>

{#if profile.name === 'An Owner' || profile.name === 'An Admin' }
<div class="flex flex-col items-start justify-between pb-6 space-y-4 border-b lg:items-center lg:space-y-0 lg:flex-row">
  <h1 class="text-2xl font-semibold whitespace-nowrap">Acciones</h1>
</div>
<div class="container mx-auto flex justify-center space-x-6 space-y-6 mt-6 p-6">
  <div class="mt-10 sm:mt-0">
    <div class="md:grid md:grid-cols-3 md:gap-6">
      <div class="md:col-span-1">
        <div class="px-4 sm:px-0">
          <h3 class="text-lg font-medium leading-6 text-gray-900">Acciones</h3>
          <p class="mt-1 text-sm text-gray-600">
            El sistema toma las acciones de los usuarios<br>y las efectúa llegado el quorum.
          </p>
        </div>
      </div>
      <div class="mt-5 md:mt-0 md:col-span-2">
        <form method="PATCH" on:submit|preventDefault={handleSubmit}>
          <div class="shadow overflow-hidden sm:rounded-md">
            <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
              <!--
              <fieldset>
                <legend class="text-base font-medium text-gray-900">By Email</legend>
                <div class="mt-4 space-y-4">
                  <div class="flex items-start">
                    <div class="flex items-center h-5">
                      <input id="comments" name="comments" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded">
                    </div>
                    <div class="ml-3 text-sm">
                      <label for="comments" class="font-medium text-gray-700">Comments</label>
                      <p class="text-gray-500">Get notified when someones posts a comment on a posting.</p>
                    </div>
                  </div>
                  <div class="flex items-start">
                    <div class="flex items-center h-5">
                      <input id="candidates" name="candidates" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded">
                    </div>
                    <div class="ml-3 text-sm">
                      <label for="candidates" class="font-medium text-gray-700">Candidates</label>
                      <p class="text-gray-500">Get notified when a candidate applies for a job.</p>
                    </div>
                  </div>
                  <div class="flex items-start">
                    <div class="flex items-center h-5">
                      <input id="offers" name="offers" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded">
                    </div>
                    <div class="ml-3 text-sm">
                      <label for="offers" class="font-medium text-gray-700">Offers</label>
                      <p class="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
                    </div>
                  </div>
                </div>
              </fieldset>
              -->
              <fieldset>
                <div>
                  <legend class="text-base font-medium text-gray-900">Determinar el proceso electoral</legend>
                  <p class="text-sm text-gray-500">Elegí una de las siguientes fases para modificar el proceso.</p>
                </div>
                <div class="mt-4 space-y-4">
                  <div class="flex items-center">
                    <input bind:group={phase} value='prevote' id="push_everything" name="push_notifications" type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300">
                    <label for="push_everything" class="ml-3 block text-sm font-medium text-gray-700">
                      Pre-votación
                    </label>
                  </div>
                  <div class="flex items-center">
                    <input bind:group={phase} value='vote' id="push_email" name="push_notifications" type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300">
                    <label for="push_email" class="ml-3 block text-sm font-medium text-gray-700">
                      Votación
                    </label>
                  </div>
                  <div class="flex items-center">
                    <input bind:group={phase} value='preresult' id="push_nothing" name="push_notifications" type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300">
                    <label for="push_nothing" class="ml-3 block text-sm font-medium text-gray-700">
                      Pre-resultados
                    </label>
                  </div>
                  <div class="flex items-center">
                    <input bind:group={phase} value='result' id="push_nothing" name="push_notifications" type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300">
                    <label for="push_nothing" class="ml-3 block text-sm font-medium text-gray-700">
                      Resultados
                    </label>
                  </div>
                </div>
              </fieldset>
            </div>
            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Enviar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
{/if}