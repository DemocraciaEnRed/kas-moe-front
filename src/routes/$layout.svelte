<script>
  import './_global.css';
  import { title } from './store';
</script>

<div class="layout">
  <div class="header">
    <div class="logo">
      <svg width="96" height="31" viewBox="0 0 96 31" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="1.5" width="94.2632" height="29" stroke="black"/>
        <line x1="0.146109" y1="1.04819" x2="94.8829" y2="29.9956" stroke="black"/>
        <line x1="0.379512" y1="29.9957" x2="94.59" y2="1.04831" stroke="black"/>
      </svg>
    </div>
    <div class="title">
      <h2>
        {$title}
      </h2>      
    </div>
    <div class="action">
      <p>
        <a href="/auth/identify">
          Volver a la votación
        </a>
      </p>
    </div>
  </div>
  <div class="content">
    <slot />
  </div>
  <div class="footer">
    <div>    
     <div class="license">
       <p>
         Todos los derechos reservados 2020
       </p>
     </div>
     <div class="author">
       <p>
         Desarrollado con ♥<br>por <b>Democracia en Red</b>
       </p>
      </div>
    </div>
  </div>
</div>

<style>
  .layout {
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 5.25em 1fr 9em;
    gap: 0px 0px;
    grid-template-areas:
      "header"
      "content"
      "footer";
  }
  
  .header {
    display: grid;
    grid-template-columns: 1fr 1.5fr 1fr;
    grid-template-rows: 1fr;
    gap: 0px 0px;
    grid-template-areas:
      "logo title action";
    grid-area: header;
  }

  .title {
    grid-area: title;
    text-transform: uppercase;
  }
  
  .logo {
    grid-area: logo;
  }
  
  .action {
    grid-area: action;
    font-family: 'Quicksand', sans-serif;
  }

  .title, .logo, .action {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .content {
    display: grid;
    grid-area: content;
    justify-content: center;
    background: #E5E5E5;
  }

  .footer {
    display: flex;
    flex-direction: column-reverse;
    background: #DBDADA;
  }

  .footer > div {
    background: #F3F3F3;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    padding: .5em 4em .5em 4em;
  }

  .license {
    font-family: 'Montserrat', sans-serif;
  }

  .author {
    font-family: 'Helvetica', sans-serif;
    justify-content: flex-end;
    display: flex;
  }
</style>
