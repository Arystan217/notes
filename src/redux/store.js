import { combineReducers, createStore } from "redux";
import notesReducer from "./notesRedcuer";

const reducers = combineReducers({
  notes: notesReducer
})

const store = createStore(reducers)

window.store = store

export default store