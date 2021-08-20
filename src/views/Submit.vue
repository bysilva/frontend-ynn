<template>
  <p class="page-title">Envianos tu pregunta! 👀</p>
  <hr class="page-hr" />
  <div class="post-container">
    <div class="post-content">
      <div class="post-body text-left">
        <div class="form-group">
          <label for="question">Yo nunca nunca (max. 80)</label>
          <input
            type="text"
            class="form-control"
            placeholder="Me he caido en público"
          />
        </div>
        <div class="form-group">
          <label for="question">Tags (max. 6)</label>
          <input
            type="text"
            class="form-control"
            placeholder="Verguenza"
          />
        </div>
      </div>
      <div class="post-footer">
        <button class="btn btn-primary">Enviar</button>
      </div>
    </div>
  </div>
</template>