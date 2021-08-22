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
            <input
              type="text"
              class="form-control"
              v-model="tagInput"
              placeholder="Verguenza"
            />
          </div>
          <div class="form-group">
            <div class="tag-container">
              <span class="tag" v-for="(tag, index) in tags" :key="index"
                >{{ tag.tagName
                }}<span class="remove-tag" v-on:click="RemoveTag"
                  >&#10006;</span
                ></span
              >
              <!--<span class="tag"
                >oh my God <span class="remove-tag">&#10006;</span></span
              >
              <span class="tag"
                >second tag <span class="remove-tag">&#10006;</span></span
              >
              <span class="tag"
                >tag3 <span class="remove-tag">&#10006;</span></span
              >-->
            </div>
          </div>
        </div>
        <div class="post-footer">
          <button class="btn btn-primary" v-on:click="AddTag">
            Enviar
          </button>
        </div>
      </div>
    </div>
  </div>
  <div id="snackbar"></div>
</template>
<script>
export default {
  name: "Submit",
  data() {
    return {
      tagInput: "",
      tags: [],
    };
  },
  methods: {
    AddTag() {
      if (this.tags.length > 1) {
        return;
      }
      const tag = {
        tagName: this.tagInput,
      };
      this.tags.push(tag);
      this.tagInput = "";
    },
    RemoveTag(index) {
      this.tags.splice(index, 1);
    },
  },
};
</script>
