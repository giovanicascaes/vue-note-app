<template>
  <div class="border">
    <div class="ml-2 my-1 d-flex flex-row align-items-center">
      <b-link id="show-tags" class="mr-2" :disabled="tags.length === 0">
        Tags
        <font-awesome-icon icon="caret-down" class="ml-1"/>
      </b-link>
      <b-popover target="show-tags" triggers="click" placement="bottom" v-if="tags.length > 0">
        <div id="all-tags-list" class="d-flex flex-column">
          <div v-for="tag in tags" :key="tag" class="d-flex flex-row mx-1 tag-line">
            <b-link class="mr-1" @click="selectTag(tag)">{{tag}}</b-link>
            <b-link class="delete-tag pl-1" @click="deleteTag(tag)">
              <font-awesome-icon icon="times-circle"/>
            </b-link>
          </div>
        </div>
      </b-popover>
      <b-badge id="selected-tag" class="mr-1 d-flex flex-row" v-if="selectedTag !== null">
        <div id="selected-tag-text">Selected tag: {{selectedTag}}</div>
        <a class="badge-remove ml-1" @click="selectTag(null)">
          <font-awesome-icon icon="times-circle"/>
        </a>
      </b-badge>
    </div>
    <div id="list-container" class="border-top">
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
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

import Item from "./Item";

export default {
  components: { Item },
  computed: {
    ...mapState(["activeNoteId", "selectedTag"]),
    ...mapGetters(["notes", "tags"])
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
  },
  methods: {
    ...mapActions(["selectTag", "deleteTag"])
  }
};
</script>

<style lang="scss">
#list-container {
  height: 418px;
  overflow-y: scroll;
}
#all-tags-list {
  width: 150px;
  max-height: 200px;
  overflow-y: auto;
  overflow-x: hidden;
}
.delete-tag {
  display: none;
  position: absolute;
  right: 12px;
  background-color: white;
}
.tag-line:hover .delete-tag {
  display: block;
}
#selected-tag {
  max-width: 200px;
}
#selected-tag-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>