<template>
  <b-list-group-item button :active="activeNoteId === id" @click="handleSelectNote" class="item">
    <div v-if="title === ''">
      <h5 class="mb-1 no-text-wrap">&nbsp</h5>
    </div>
    <div v-else class="d-flex">
      <h5 class="mb-1 no-text-wrap">{{title}}</h5>
    </div>
    <div v-if="preview === ''">
      <p class="mb-1 no-text-wrap">&nbsp</p>
    </div>
    <div v-else>
      <p class="mb-1 no-text-wrap">{{preview}}</p>
    </div>
  </b-list-group-item>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  props: ["title", "preview", "id"],
  methods: {
    ...mapActions(["selectNote"]),
    handleSelectNote() {
      this.selectNote(this.id);
    }
  },
  computed: {
    ...mapState(["activeNoteId"])
  }
};
</script>

<style lang="scss">
.item {
  overflow-x: hidden;
}
.no-text-wrap {
  white-space: nowrap;
}
</style>

