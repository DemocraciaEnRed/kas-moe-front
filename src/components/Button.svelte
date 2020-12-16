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
    color: #F8F8F8;
    background: #000;
    min-height: 42px;
    min-width: 9.5em;
    font-family: Oswald;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    text-transform: uppercase;
    border: none;
    box-shadow: -7px 7px 0px -2px #fff, -7px 7px 0px -1px #000;
  }

  button:focus,
  button:active {
    outline: none;
  }

  .green {
    background: #31A608;
  }

  .white {
    border: solid 1px;
    background: #fff;
    color: #111;
  }

  .large {
    width: 10.5em;
  }
</style>
