import React from "react"
import styles from "./Home.module.css"
import CreateNote from "./CreateNote/CreateNote"
import Notes from "./Notes/Notes"

const Home = ( {store} ) => {
  return (
    <div className="container">
      <CreateNote createNote={store.dispatch} />  
      <Notes notesList={store.getState().notes.notesList} dispatch={store.dispatch} />
    </div>
  )
}

export default Home