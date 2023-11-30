const ADD_NOTE = "ADD-NOTE"
const OPEN_NOTE = "OPEN-NOTE"
const EDIT_NOTE = "EDIT-NOTE"
const DELETE_NOTE = "DELETE-NOTE"
import { nanoid } from "nanoid"

const initialState = {
  notesList: [{id: '_IAHarj4EUoTSXf8LXWLv', title: 'i', body: '\\'}],
  openedNote: {id: '_IAHarj4EUoTSXf8LXWLv', title: 'i', body: '\\'},
}

const notesReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_NOTE:
      if (action.title.trim()) {
        let body = action.body
        if (!action.body.trim()) body = ""
        const newNote = {
          id: nanoid(),
          title: action.title,
          body: body
        }
        state.notesList.unshift(newNote)
      }
      return state
    case OPEN_NOTE:
      state.openedNote = state.notesList.filter(note => note.id == action.id)[0]
      return state
    case EDIT_NOTE:
      state.notesList.forEach(note => {
        if (note.id === state.openedNote.id) {
          note.title = action.title
          note.body = action.body
        }
      })
      state.openedNote = {
        id: state.openedNote.id,
        title: action.title,
        body: action.body
      }
      return state
    case DELETE_NOTE:
      state.notesList = (state.notesList.filter(note => note.id !== action.id)) // filter returns all that satisfies this condition (it's my comment, not chatGPT)
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
export const editNoteActionCreator = (title, body) => ({
  type: EDIT_NOTE,
  title,
  body
})
export const deleteNoteActionCreator = id => ({
  type: DELETE_NOTE,
  id: id
})