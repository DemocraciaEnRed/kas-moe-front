<script>
  export let prop = '';
  export let label = '';
  export let code = false;
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
    font-family: 'Quicksand', sans-serif;
    text-align: center;
  }

  .input-field {
    gap: 1em;
    display: flex;
    flex-direction: column;
    text-transform: uppercase;
    text-align: left;
  }

  .input-field input {
    height: 52px;
    width: 297px;
    font-size: 1em;
    text-indent: 1em;
    border: 1px solid #A29898;
    font-family: 'Quicksand', sans-serif;
  }
</style>

