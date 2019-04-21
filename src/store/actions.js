export default {
  selectNote: ({ commit }, payload) => {
    commit('selectNoteIndex', payload);
  },
  changeNoteTitle: ({ commit }, payload) => {
    commit('changeNoteTitle', payload);
  },
  changeNoteContent: ({ commit }, payload) => {
    commit('changeNoteContent', payload);
  },
  addNote: ({ commit }) => {
    commit('newNote');
  },
  filterNotes: ({ commit }, payload) => {
    commit('setFilterText', payload);
  },
  deleteNote: ({ commit }) => {
    commit('deleteNote');
  },
  addTag: ({ commit }, payload) => {
    commit('addTag', payload);
  },
  removeTag: ({ commit }, payload) => {
    commit('removeTag', payload);
  },
  selectTag: ({ commit }, payload) => {
    commit('selectTag', payload);
  },
  deleteTag: ({ commit }, payload) => {
    commit('deleteTag', payload);
  },
};
