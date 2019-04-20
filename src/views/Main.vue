<template>
  <div id="container" class="mt-4">
    <div id="layout">
      <Sidebar id="sidebar" class="pr-2"/>
      <router-view id="note" class="pl-2"/>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

import Sidebar from "@/components/Sidebar";

export default {
  components: {
    Sidebar
  },
  methods: {
    ...mapActions(["selectNote"])
  },
  computed: {
    ...mapState(["notes", "activeNoteId"])
  },
  mounted() {
    if (this.$route.params.note_hash) {
      if (
        this.notes.map(note => note.id).includes(this.$route.params.note_hash)
      ) {
        this.selectNote(this.$route.params.note_hash);
      } else {
        this.$router.push("/not-found");
      }
    }
  }
};
</script>

<style lang="scss">
#container {
  display: flex;
  justify-content: center;
}
#layout {
  display: flex;
  flex-direction: row;
  height: 500px;
}
#sidebar {
  width: 300px;
}
#note {
  width: 500px;
}
</style>
