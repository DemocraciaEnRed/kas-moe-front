<script>
  let classes = '';
  export {classes as class};
</script>

<div class="box {classes}">
  <slot/>
</div>

<style>
  .box {
    height: 37.5em;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
    border-radius: 5px;
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
