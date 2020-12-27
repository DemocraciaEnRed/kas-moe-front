<script context="module">
  // Objects
  import { API_BASE_URL as base } from '$util/config';
  import { getData } from '$util/fetch';

  // Functions, definitions
  export const getStatus = getData(`${base}/status`, false);
</script>

<script>
  // Objects
  import { time, status } from '$util/store';
  // Library
  import { fade } from 'svelte/transition';
  import { onMount } from 'svelte';

  // Lifecycle
	onMount(async () => {
    setInterval(async () => {
      getData(`${base}/status`, false);
      setCounter($time);
    }, 1000);
  });

  // Functions, definitions
  var hours = 0, minutes = 0, seconds = 0;
  async function setCounter(time) {
    var end = new Date(time), timer,
      second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

    timer = setInterval(() => {
      var now = new Date(),
        distance = end - now;

      hours = Math.floor((distance % day) / hour);
      minutes = Math.floor((distance % hour) / minute);
      seconds = Math.floor((distance % minute) / second);
    }, 1000);
  }
</script>

{#await $status then title}
  {#if title === 'prevote'}
    <h2>Registro de votantes<br>habilitado</h2>
  {:else if title === 'vote'}
    <h2>Votación activa</h2>
  {:else if title === 'preresult'}
    <h2>Conteo de votos</h2>
  {:else if title === 'result'}
    <h2>Resultados</h2>
  {/if}
  <div>
    <div>
      <p>{hours}</p>hs
    </div>
    <div>
      <p>{minutes}</p>min
    </div>
    <div>
      <p>{seconds}</p>seg
    </div>
  </div>
{/await}

<style>
  h2 {
    font-weight: 500;
    text-transform: uppercase;
  }

  div {
    font-size: 25px;
    font-weight: 300;
    height: 2em;
    display: flex; 
    align-items: center;
    justify-content: center;
  }

  div > div {
    padding-right: .75em;
		text-align: center;
    gap: .25em;
  }

  div > div:nth-child(1) {
    margin-left: 1.5em;
  }

  p {
    border: solid 1px;
    line-height: 50px;
    width: 50px;
    height: 50px;
  }
</style>