export default {
  notes: (state) => {
    const reversedNotes = [...state.notes];
    reversedNotes.reverse();
    return reversedNotes.filter(
      note => note.title.includes(state.filterText) || note.content.includes(state.filterText),
    );
  },
  activeNote: state => state.notes.find(note => note.id === state.activeNoteId),
};
