<script context="module">
  // Functions, definitions
  //export const getStatus = getData(`${base}/status`, false);
  export const getStatus = '';
</script>

<script>
  // Components
  import Button from './Button.svelte';
  // Objects
  import { scroll, time, status } from 'util/store';
  // Library
  import { fade, fly } from 'svelte/transition';
  import { onMount } from 'svelte';

  // Lifecycle
  $: active = $scroll;
  onMount(async () => {
    setInterval(async () => {
      //getData(`${base}/status`, false);
      //setCounter($time);
    }, 1000);
  });

  // Functions, definitions
  let active, items = [
    { value: '7', name: 'Días' },
    { value: '12', name: 'Horas' },
    { value: '33', name: 'Minutos' }
  ];
  async function setCounter(time) {
    var end = new Date(time), timer,
      second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

    timer = setInterval(() => {
      var now = new Date(), distance = end - now;
      items = [
        { value: Math.floor((distance % day) / hour), name: 'Días' },
        { value: Math.floor((distance % hour) / minute), name: 'Horas' },
        { value: Math.floor((distance % minute) / second), name: 'Minutos' }
      ];
    }, 5000);
  }
</script>

<div class="wrapper" class:active in:fly="{{ y: -200, duration: 500 }}">
{#await $status then title}
  {#if title === 'prevote'}
    <Button class="bg-moe-orange text-white h-8 w-56 font-medium text-xl">
      Proceso de inscripción
    </Button>
  {:else if title === 'vote'}
    <Button class="bg-moe-green-light text-white h-8 w-56 font-medium text-xl">
      Votación activa
    </Button>
  {:else if title === 'preresult'}
    <Button class="bg-moe-blue-dark text-white h-8 w-56 font-medium text-xl">
      Conteo de votos
    </Button>
  {:else if title === 'result'}
    <Button class="bg-moe-blue-light text-white h-8 w-56 font-medium text-xl">
      Resultados
    </Button>
  {/if}
  <p class="font-normal text-base">
    Disponible por
  </p>
  <div class="timer">
  {#each items as item}
    <div class="square">
      <h1>{item.value}</h1>
      <h2>{item.name}</h2>
    </div>
  {/each}
  </div>
{/await}
</div>

<style>
  .wrapper {
    @apply h-32 grid gap-2 justify-items-center content-start bg-transparent
    bg-moe-cyan transition ease-in duration-300 transform -translate-y-0;
  }

  .active {
    @apply flex-shrink-0 transition ease-in-out duration-300 transform -translate-y-72;
  }

  .timer {
    @apply flex h-24 md:h-28 bg-white text-black
      border border-moe-gray-medium rounded-xl;
  }

  .square:nth-child(2) {
    @apply h-full flex flex-col justify-center
      border-l border-r border-moe-gray-medium;
  }

  .square {
    @apply w-24 md:w-40 self-center text-center;
  }

  h1 {
    @apply text-4xl font-semibold;
  }

  h2 {
    @apply text-lg font-medium;
  }
</style>