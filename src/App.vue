<template>
  <div id="app">
    <div class="navegacion">
      <nav>
        <div class="nav-brand">
          <a href="#"> <img src="img/logo.png" alt="logo blog de viajes" /></a>
        </div>
        <ul class="nav-right">
          <li><a href="/random" class="btn btn-outline">Random</a></li>
          <li><a href="/submit" class="btn btn-primary">Enviar pregunta</a></li>
        </ul>
      </nav>
    </div>

    <div class="contenido contenedor">
      <main>
        <router-view></router-view>
      </main>
      <aside class="sidebar">
        <p class="title">TAGS</p>
        <ul>
          <li><a href="#">#gaming</a></li>
          <li><a href="#">#gaming</a></li>
          <li><a href="#">#gaming</a></li>
          <li><a href="#">#gaming</a></li>
        </ul>
        <hr />
        <p class="title">LINKS</p>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">Acerca de</a></li>
          <li><a href="/privacy">Privacidad</a></li>
          <li><a href="/contact">Contacto</a></li>
        </ul>
      </aside>
    </div>
  </div>
</template>