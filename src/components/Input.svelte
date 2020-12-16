<script>
  export let prop = '';
  export let label = '';
</script>

<div class="input-field">
  <label for={label}>{label}</label> 
  <input name={label}
    bind:value={prop}>
</div>

<style>
  .input-field {
    gap: 1em;
    display: flex;
    flex-direction: column;
    text-transform: uppercase;
    text-align: left;
  }

  input {
    height: 52px;
    width: 297px;
    font-size: 1em;
    text-indent: 1em;
    border: 1px solid #A29898;
    font-family: 'Quicksand', sans-serif;
  }
</style>

