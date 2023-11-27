import { combineReducers, createStore } from "redux";
import notesReducer from "./notesReducer";

const reducers = combineReducers({
  notes: notesReducer
})

const store = createStore(reducers)

window.store = store
window.notesList = store.getState().notes.notesList

export default store