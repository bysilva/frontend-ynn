<template>
  <div class="row">
    <div class="col-s-12 col-6">
      <p class="page-title">Envianos tu pregunta! 👀</p>
      <hr class="page-hr" />
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
            <input type="text" class="form-control" placeholder="Verguenza" />
          </div>
        </div>
        <div class="post-footer">
          <button
            class="btn btn-primary"
            onclick="ShowSnackbar(snacktype.ERROR,snackposition.BOTTOMCENTER,'asdasds')"
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  </div>
  <div id="snackbar"></div>
</template>
