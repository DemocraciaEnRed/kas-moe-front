<script>
  // Components
  import Button from "./Button.svelte";
  // Objects
  import { scroll, title } from "util/store";
  // Library
  import { afterUpdate } from "svelte";
  import { fade } from "svelte/transition";
  import { stores } from "@sapper/app";

  const { page } = stores();

  let styles, path, action;

  // Lifecycle
  afterUpdate(() => {
    console.log($page.path);
    switch ($page.path) {
      case "/":
        path = "/auth/identify";
        styles = "bg-moe-blue text-white w-36 h-11 font-medium";
        action = "Identificate";
        break;
      case "/vote":
        path = "/";
        styles = "red";
        action = "Salir de la votación";
        break;
    };
    if ($page.path.includes("auth")) {
      path = "/";
      styles = "transparent";
      action = "Volver al inicio";
    }
  });
</script>

<div class="logos">
  <img src="product.svg" alt="Logotipo de la plataforma" />
  <img src="event.svg" alt="Logotipo del evento" />
</div>
<div class="title">
  <h1>
    {$title}
  </h1>
</div>
<div class="action">
  {#if $scroll && $page.path === "/"}
    <div class="timer" transition:fade={{ duration: 250 }}>
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 0.21875C6.97266 0.21875 0.46875 6.72266 0.46875 14.75C0.46875 22.7773 6.97266 29.2812 15 29.2812C23.0273 29.2812 29.5312 22.7773 29.5312 14.75C29.5312 6.72266 23.0273 0.21875 15 0.21875ZM15 26.4688C8.49609 26.4688 3.28125 21.2539 3.28125 14.75C3.28125 8.30469 8.49609 3.03125 15 3.03125C21.4453 3.03125 26.7188 8.30469 26.7188 14.75C26.7188 21.2539 21.4453 26.4688 15 26.4688ZM18.5742 20.375C18.9258 20.6094 19.3359 20.5508 19.5703 20.1992L20.6836 18.7344C20.918 18.3828 20.8594 17.9727 20.5078 17.7383L16.6406 14.8672V6.54688C16.6406 6.19531 16.2891 5.84375 15.9375 5.84375H14.0625C13.6523 5.84375 13.3594 6.19531 13.3594 6.54688V16.2148C13.3594 16.3906 13.418 16.625 13.5938 16.7422L18.5742 20.375Z"
          fill="#181C8B"
        />
      </svg>
      <p>
        <b>Inscripción</b> disponible por<br />
        <b>7D :12H :33M</b>
      </p>
    </div>
  {/if}
  <Button class={styles}>
    <a class="uppercase" href={path}>
      {action}
    </a>
  </Button>
</div>

<style>
  .title {
    @apply invisible flex items-center justify-center;
    grid-area: title;
  }

  .logos {
    @apply px-10 flex items-center justify-around gap-x-3;
    grid-area: logos;
  }

  .action {
    @apply pr-4 flex gap-8 items-center justify-center justify-self-end;
    grid-area: action;
  }

  .timer {
    @apply flex gap-4 items-center;
  }

  .timer b {
    @apply text-moe-blue;
  }
</style>
