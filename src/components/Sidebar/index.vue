<template>
  <div>
    <SearchBar/>
    <List/>
  </div>
</template>

<script>
import SearchBar from "./SearchBar";
import List from "./List";

export default {
  components: { SearchBar, List }
};
</script>
