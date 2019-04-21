export default {
  notes: (state) => {
    const reversedNotes = [...state.notes];
    reversedNotes.reverse();
    return reversedNotes.filter(
      note => (note.title.toLowerCase().includes(state.filterText.toLowerCase())
          || note.content.toLowerCase().includes(state.filterText.toLowerCase()))
        && (state.selectedTag === null || note.tags.includes(state.selectedTag)),
    );
  },
  activeNote: state => state.notes.find(note => note.id === state.activeNoteId),
  tags: (state) => {
    const allTags = state.notes.flatMap(note => note.tags);
    return [...new Set(allTags)];
  },
};
