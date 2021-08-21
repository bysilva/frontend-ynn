<template>
  <div id="app">
    <!--<div class="navegacion">
      <a href="/" class="nav-brand"> <img src="img/logo.png" alt="logo"/></a>
      <ul class="nav-right">
        <li><a href="/random" class="btn btn-outline">Random</a></li>
        <li><a href="/submit" class="btn btn-primary">Enviar pregunta</a></li>
      </ul>
      <a
        href="javascript:void(0);"
        style="font-size:15px;"
        class="icon"
        onclick="myFunction()"
        >&#9776;</a
      >
    </div> -->

    <div class="topnav" id="myTopnav">
      <a href="/" class="logo">&nbsp;</a>
      <a href="/about">Acerca de</a>
      <a href="/privacy">Privacidad</a>
      <a href="/contact">Contacto</a>
      <a
        href="javascript:void(0);"
        style="font-size:15px;"
        class="icon"
        onclick="myFunction()"
        >&#9776;</a
      >

      <ul class="nav-right">
        <li><a href="/random" class="btn btn-outline">Random</a></li>
        <li><a href="/submit" class="btn btn-primary">Enviar pregunta</a></li>
      </ul>
    </div>

    <div class="contenido row">
      <aside class="sidebar col-s-12 col-3">
        <p class="title">TAGS</p>
        <ul>
          <li><a href="#">#gaming</a></li>
          <li><a href="#">#gaming</a></li>
          <li><a href="#">#gaming</a></li>
          <li><a href="#">#gaming</a></li>
        </ul>
      </aside>
      <main class="col-s-12 col-9">
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>
