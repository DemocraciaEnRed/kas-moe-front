<script>
  let classes = '';
  export {classes as class};
</script>

<div class="box {classes}">
  <slot/>
</div>

<style>
  .box {
    width: 50em;
    height: 37.5em;
    margin-top: 3rem;
    gap: 1em;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
    border: solid 1px #000;
    background: #fff;
  }  

  .justify-center {
    justify-content: center;
  }

  .sm-height {
    height: 24em;
  }
</style>
