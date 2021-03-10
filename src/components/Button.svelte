<script>
  let classes = '';
  export {classes as class};
  export let text = 'Button';  
  export let onclick = null;
</script>

<button class="{classes}"
  on:click={onclick}>
  <slot>
    {text}
  </slot>
</button>

<style>
  button {
    @apply rounded-lg;
  }

  button:focus,
  button:active {
    outline: none;
  }

  .sm {

  }

  .blue {
    @apply text-sm font-medium text-white bg-moe-blue uppercase;
  }

  .red {
    @apply h-11 w-64 text-sm text-white bg-moe-red flex gap-2 place-items-center place-content-center uppercase;
  }

  .disabled {
    @apply h-11 text-xl font-medium uppercase;
    background: #D5D5D5;
    color: #5E5E5E;
  }

  .green {
    @apply h-11 w-64 text-sm text-white bg-moe-green flex gap-2 place-items-center place-content-center uppercase;
  }

  .sm-orange {
    @apply h-8 w-64 text-xl font-medium text-white bg-moe-orange;
  }
      
  .sm-green-light {
    @apply h-8 w-64 text-xl font-medium text-white bg-moe-green-light;
  }

  .green-light {
    @apply h-11 w-64 text-xl font-medium text-white bg-moe-green-light;
  }

  .transparent {
    @apply h-11 text-sm text-moe-blue border border-moe-blue uppercase;
  }

  .white {
    border: solid 1px;
    background: #fff;
    color: #111;
  }
</style>
