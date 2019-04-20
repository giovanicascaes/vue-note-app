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
  deleteNote: ({ commit }, payload) => {
    commit('deleteNote', payload);
  },
};
