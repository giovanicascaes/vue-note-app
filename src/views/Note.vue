<template>
  <div>
    <b-form @submit.prevent>
      <b-card no-body class="card" header-tag="header">
        <b-link slot="header" class="card-link" @click="handleDeleteNote">Delete</b-link>
        <b-card-body>
          <b-form-input
            v-model="title"
            @input="handleTitleChanged"
            placeholder="Note title..."
            class="no-border mb-3"
          />
          <b-form-textarea
            v-model="content"
            @input="handleContentChanged"
            placeholder="Note content..."
            rows="14"
            class="no-border"
          />
        </b-card-body>
      </b-card>
    </b-form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      title: "",
      content: ""
    };
  },
  computed: {
    ...mapGetters(["activeNote"])
  },
  watch: {
    activeNote: {
      immediate: true,
      handler() {
        if (this.activeNote) {
          this.title = this.activeNote.title;
          this.content = this.activeNote.content;
        }
      }
    }
  },
  methods: {
    ...mapActions(["changeNoteTitle", "changeNoteContent", "deleteNote"]),
    handleTitleChanged() {
      this.changeNoteTitle(this.title);
    },
    handleContentChanged() {
      this.changeNoteContent(this.content);
    },
    handleDeleteNote() {
      this.deleteNote(this.activeNote.id);
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss">
.card {
  height: 500px;
}
.no-border {
  border: 0;
  box-shadow: none;
}
</style>
