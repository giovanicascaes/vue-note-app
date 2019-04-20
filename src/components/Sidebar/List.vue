<template>
  <div id="list-container" class="border">
    <b-list-group class="list-group-flush">
      <Item
        v-for="note in notes"
        :key="note.id"
        :id="note.id"
        :title="note.title"
        :preview="note.content"
      />
    </b-list-group>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

import Item from "./Item";

export default {
  components: { Item },
  computed: {
    ...mapState(["activeNoteId"]),
    ...mapGetters(["notes"])
  },
  watch: {
    activeNoteId: {
      handler() {
        if (this.activeNoteId === null) {
          this.$router.push("/");
        } else {
          this.$router.push("/note/" + this.activeNoteId);
        }
      }
    }
  }
};
</script>

<style lang="scss">
#list-container {
  height: 451px;
  overflow-y: scroll;
}
</style>