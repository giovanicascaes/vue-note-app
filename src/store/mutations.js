export default {
  selectNoteIndex: (state, payload) => {
    state.activeNoteId = payload;
  },
  changeNoteTitle: (state, payload) => {
    state.notes.find(note => note.id === state.activeNoteId).title = payload;
  },
  changeNoteContent: (state, payload) => {
    state.notes.find(note => note.id === state.activeNoteId).content = payload;
  },
  newNote: (state) => {
    const newId = (parseInt(state.notes[state.notes.length - 1].id, 10) + 1).toString();
    state.notes.push({ id: newId, title: '', content: '' });
    state.activeNoteId = newId;
  },
  setFilterText: (state, payload) => {
    state.filterText = payload;
  },
  deleteNote: (state, payload) => {
    state.notes = state.notes.filter(note => note.id !== payload);
    state.activeNoteId = null;
  },
};
