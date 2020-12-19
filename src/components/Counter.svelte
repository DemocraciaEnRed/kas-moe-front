<script>
  import { onMount } from 'svelte';

  let seconds, minutes, hours;  

  onMount(() => {
  });
</script>

<div>
  <div>
    <p>20</p>hs
  </div>
  <div>
    <p>50</p>min
  </div>
  <div>
    <p>10</p>seg
  </div>
</div>

<style>
  div {
    display: flex; 
    align-items: center;
    font-size: 35px;
    font-weight: 300;
    justify-content: center;
  }

  div div {
    padding-right: .75em;
    gap: .25em;
  }

  p {
    border: solid 1px;
    line-height: 70px;
    width: 70px;
    height: 70px;
  }
</style>
