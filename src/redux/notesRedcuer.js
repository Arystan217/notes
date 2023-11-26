const ADD_NOTE = "ADD-NOTE"
const OPEN_NOTE = "OPEN-NOTE"
const SAVE_NOTE = "SAVE-NOTE"

const initialState = {
  notesList: [
    {
      id: 1,
      title: "Note 1",
      body: "Hello world!"
    }
  ],
  openedNote: null,
}

const notesReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_NOTE:
      if (action.title.trim() && action.body.trim()) {
        console.log(action.body)
        const newNote = {
          id: state.notesList.length + 1,
          title: action.title,
          body: action.body
        }
        console.log(newNote)
        state.notesList.push(newNote)
      }
      return state
    case OPEN_NOTE:
      state.openedNote = state.notesList.filter(note => note.id == action.id)[0]
      return state
    case SAVE_NOTE:
      state.notesList.forEach(note => {
        console.log(action.id)
        if (note.id === action.id) {
          note.title = action.title
          note.body = action.body
        }
      })
      return state
    default: 
      return state
  }
}

export default notesReducer


export const addNoteActionCreator = (title, body) => ({
  type: ADD_NOTE,
  title: title,
  body: body
})
export const openNoteActionCreator = id => ({
  type: OPEN_NOTE,
  id: id
})
export const saveNoteActionCreator = (id, title, body) => ({
  type: SAVE_NOTE,
  id: id,
  title: title,
  body: body
})