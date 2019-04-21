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
  deleteNote: (state) => {
    state.notes = state.notes.filter(note => note.id !== state.activeNoteId);
    state.activeNoteId = null;
  },
  addTag: (state, payload) => {
    const { tags } = state.notes.find(note => note.id === state.activeNoteId);
    if (!tags.includes(payload)) {
      tags.push(payload);
    }
  },
  removeTag: (state, payload) => {
    const currentNote = state.notes.find(note => note.id === state.activeNoteId);
    currentNote.tags = currentNote.tags.filter(tag => tag !== payload);
  },
  selectTag: (state, payload) => {
    state.selectedTag = payload;
  },
  deleteTag: (state, payload) => {
    state.notes.forEach((note) => {
      const index = note.tags.indexOf(payload);
      if (index > -1) {
        note.tags.splice(index, 1);
        if (state.selectedTag === payload) {
          state.selectedTag = null;
        }
      }
    });
  },
};
