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

  .sm-padding-top {
    padding-top: 2em;
  }

  .xsm-margin-top {
    margin-top: 1.5em;
  }

  .justify-initial {
    justify-content: initial;
  }

  .justify-center {
    justify-content: center;
  }

  .justify-between {
    justify-content: space-between;
  }
  
  .l-width {
    width: 60em;
  }

  .sm-height {
    height: 24em;
  }

  .xsm-height {
    height: 5.25em;
  }

  .row {
    flex-direction: row;
  }
</style>
