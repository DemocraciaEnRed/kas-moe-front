<script>
  export let prop = '';
  export let label = '';
  export let code = false;
  export let password = '';
  /*
  const inputCode = document.querySelector('.input-code');
  const inputs = inputCode.querySelectorAll('.input');

  function focusNextInput(event) {
    const { nextElementSibling, value } = event.target;
    if(!!value && nextElementSibling) {
      nextElementSibling.focus();
    }
  }

  inputs.forEach((input) => input.addEventListener('input', focusNextInput));
  */
</script>

{#if code}
  <div class="input-code">  
    <input type="text" inputmode="numeric" maxlength="1" />
    <input type="text" inputmode="numeric" maxlength="1" />
    <input type="text" inputmode="numeric" maxlength="1" />
    <input type="text" inputmode="numeric" maxlength="1" />
    <input type="text" inputmode="numeric" maxlength="1" />
  </div>
{:else if password}
  <div class="input-field">
    <label for={label}>{label}</label> 
    <input name={label}
      type="password" bind:value={prop}>
  </div>
{:else}
  <div class="input-field">
    <label for={label}>{label}</label> 
    <input name={label}
      bind:value={prop}>
  </div>
{/if}

<style>
  .input-code input {
    width: 3em;
    height: 3em;
    margin: .5em;
    font-size: 20px;
    text-align: center;
    border-radius: 5px;
    box-sizing: border-box;
    border: 1px solid #D5D5D5;
    filter: drop-shadow(0px 1px 1px rgba(117, 116, 116, 0.12));
  }

  .input-field {
    gap: 1em;
    display: flex;
    flex-direction: column;
    text-align: left;
  }

  .input-field input {
    @apply h-12 w-72 px-3 text-base border border-moe-gray-light rounded appearance-none;
  }
</style>

