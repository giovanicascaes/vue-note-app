<template>
  <div class="pb-2 d-flex flex-row align-items-center">
    <b-form-input
      v-model="searchText"
      @input="handleFilterNotes"
      placeholder="Search notes..."
      class="mr-2"
    />
    <b-button id="add-note" variant="outline-primary" @click="addNote">
      <font-awesome-icon icon="plus"/>
    </b-button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      searchText: ""
    };
  },
  methods: {
    ...mapActions(["addNote", "filterNotes"]),
    handleFilterNotes() {
      this.filterNotes(this.searchText);
    }
  }
};
</script>

<style lang="scss">
#add-note {
  border-radius: 25px;
  width: 40px;
  height: 40px;
}
</style>
