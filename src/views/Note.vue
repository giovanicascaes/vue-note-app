<template>
  <div>
    <b-form @submit.prevent>
      <b-card no-body class="card" header-tag="header">
        <b-link slot="header" class="card-link" @click="handleDeleteNote">Delete</b-link>
        <b-card-body>
          <div>
            <b-badge v-for="tag in tags" :key="tag" class="mr-1">
              {{tag}}
              <a class="badge-remove" @click="removeTag(tag)">
                <font-awesome-icon icon="times-circle"/>
              </a>
            </b-badge>
          </div>
          <b-input
            v-model="tag"
            @keyup.enter="handleAddTag"
            placeholder="Add tag..."
            class="no-border ml-1 mt-2"
            size="sm"
          />
          <hr>
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
            rows="11"
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
      content: "",
      tag: ""
    };
  },
  computed: {
    ...mapGetters(["activeNote"]),
    tags() {
      if (this.activeNote) {
        return this.activeNote.tags;
      }
      return [];
    }
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
    ...mapActions([
      "changeNoteTitle",
      "changeNoteContent",
      "deleteNote",
      "addTag",
      "removeTag"
    ]),
    handleTitleChanged() {
      this.changeNoteTitle(this.title);
    },
    handleContentChanged() {
      this.changeNoteContent(this.content);
    },
    handleDeleteNote() {
      this.deleteNote();
      this.$router.push("/");
    },
    handleAddTag() {
      if (this.tag !== "") {
        this.addTag(this.tag);
        this.tag = null;
      }
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
