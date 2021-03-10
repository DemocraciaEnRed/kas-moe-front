<script>
  export let hidden = true;
  export let options = [{ label: "Example", link: "/" }];
  export let keys = ["label", "link"];
  export let value = "";
  export let inputEl = undefined;

  import { tick, onMount, createEventDispatcher } from "svelte";
  import fuzzysort from "fuzzysort";

  const dispatch = createEventDispatcher();

  let listEl;
  
  let icons = options.icon;

  onMount(() => {
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  });
  
  $: filteredOptions = getFilteredOptions(value, options, keys);
  $: availiableOptions = renderOptions(value, filteredOptions, options);
  $: !hidden && focusText();
  
  function onAction(option) {
    dispatch("pick", option);
    hidden = true;
  }
  
  async function focusText(hidden) {
    value = "";
    await tick();
    inputEl.focus();
  }
  
  function getFilteredOptions(value, options, keys) {
    const res = fuzzysort.go(value, options, { keys });
    return res;
  }
  
  function renderOptions(value, filteredOptions, options) {
    const visibleOptions = value ? filteredOptions.map(r => r.obj) : options;
    return visibleOptions.map((obj, i) => {
      let html = {};
      for (let y = 0; y < keys.length; y++) {
        if (filteredOptions[i] && filteredOptions[i][y]) {
          html[keys[y]] = fuzzysort.highlight(
            filteredOptions[i][y],
            "<b>",
            "</b>"
          );
        } else {
          html[keys[y]] = obj[keys[y]];
        }
      }
      let item = {
        obj,
        html
      };
      return item;
    });
  }
  
  function onKeyDown(e) {
    // CTRL + K
    if (e.ctrlKey && e.keyCode == 75) {
      value = "";
      hidden = false;
      inputEl.focus();
      e.preventDefault();
    }
    if (hidden) return;
    switch (e.keyCode.toString()) {
      // ESC
      case "27":
        hidden = true;
        break;
      // ArrowUp
      case "38":
        if (document.activeElement === inputEl) {
          listEl.lastChild.focus();
        } else if (document.activeElement.previousSibling) {
          document.activeElement.previousSibling.focus();
        } else {
          listEl.lastChild.focus();
        }
        e.preventDefault();
        break;
      // ArrowDown
      case "40":
        if (document.activeElement === inputEl) {
          listEl.firstChild.focus();
        } else if (document.activeElement.nextSibling) {
          document.activeElement.nextSibling.focus();
        } else {
          listEl.firstChild.focus();
        }
        e.preventDefault();
        break;
      // Enter
      case "13":
        const index = Array.prototype.slice
          .call(listEl.children)
          .indexOf(document.activeElement);
        let option;
        option = availiableOptions[index === -1 ? 0 : index];
        if (option) {
          onAction(option.obj);
        }
        break;
      // Allow nativation with more keys
      // case "16": // SHIFT
      // case "17": // CTRL
      // case "18": // ALT
      // case "9": // TAB
      // console.log(e.keyCode);
      // break;
      // Any other key
      default:
        if (
          (e.key.length === 1 &&
            e.ctrlKey === false &&
            e.altKey === false &&
            e.metaKey === false) ||
          e.key === "Backspace"
        ) {
          inputEl.focus();
        }
        break;
    }
  }
</script>

<div id="background" class:hidden on:click={() => (hidden = true)}>
  <div id="foreground" class:hidden>
    <slot name="input">
      <input type="text" bind:value bind:this={inputEl} />
    </slot>
    <div class="search-body">
      <ul class="list" bind:this={listEl}>
        <!-- 
        {#each options as option, i}
          {JSON.stringify(option.icon)}
          {@html option.icon}
        {/each}
        {@html options.icon[i]}
        {#if option.html[key]!=='undefined'}
        {/if}
        -->
        {#each availiableOptions as option, i}
          <li tabindex="0" on:click={()=>onAction(option.obj)}>
            <slot name="item" {option}>
              {#each keys as key}
                {@html option.html[key]}
              {/each}
            </slot>
          </li>
        {:else}
          <p class="font-semibold text-l mb-2 ml-2 text-gray-900 dark:text-white">No hay resultados para <i>{value}</i></p>
        {/each}
      </ul>
    </div>
  </div>
</div>

<style>
  :global(b) {
    color: #dc3545 !important;
  }
  .hidden {
    display: none !important;
  }
  #background {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    margin: 0 auto;
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.3);
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }
  #foreground {
    @apply rounded-2xl;
    z-index: 1111;
    position: fixed;
    width: 80%;
    background-color: white;
    max-width: 47.375rem;
  }
  input {
    width: 100%;
    height: 30px;
  }

	.search-body {
    flex: auto;
    overflow: auto;
    padding: 0 1.5rem 1.5rem;
    margin-top: 1.5rem;
  }
  
  .list {
    max-height: 500px;
    padding: 0 1.5rem 1.5rem;
  }
  .list,
  .list li {
    margin: 0;
    padding: 0;
    text-indent: 0;
    list-style-type: none;
  }
  .list li {
    @apply bg-gray-100 font-semibold leading-6;
    height: 4em;
    display: flex;
    align-items: center;
    border-radius: .5rem;
    padding: 0 1.25rem 0 1rem;
    outline: none;
    margin-top: .5rem;
  }
  .list li:focus,
  .list:not(:focus-within) > :first-child {
    @apply bg-gray-800 text-white;
  }
  p {
    background-color: inherit !important;
  }
  .list:first-child {
    margin-top: 0;
  }
  li :global(span) {
    gap: .75em;
    display: flex;
    align-items: center;
  }
  li:focus :global(svg),
  .list:not(:focus-within) > :first-child :global(svg) {
    stroke: white;
  }
</style>