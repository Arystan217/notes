const ADD_NOTE = "ADD-NOTE"
const OPEN_NOTE = "OPEN-NOTE"
const EDIT_NOTE = "EDIT-NOTE"
const DELETE_NOTE = "DELETE-NOTE"
import { nanoid } from "nanoid"

const initialState = {
  notesList: [{id: 'PpW9igOUDkt1eMxlBfko0', title: 'saved note', body: 'hello, i am here'}],
  openedNote: {id: 'PpW9igOUDkt1eMxlBfko0', title: 'opened note', body: ''},
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
        if (note.id === action.id) {
          note.title = action.title
          note.body = action.body
        }
      })
      /* state.openedNote = {
        id: action.id,
        title: action.title,
        body: action.body
      } */
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
export const editNoteActionCreator = (id, title, body) => ({
  type: EDIT_NOTE,
  id: id,
  title: title,
  body: body  //todo: minimize code
})
export const deleteNoteActionCreator = id => ({
  type: DELETE_NOTE,
  id: id
})