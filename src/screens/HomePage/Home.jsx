import React from "react"
import { Link } from "react-router-dom"
import CreateNote from "./CreateNote/CreateNote"
import Notes from "./Notes/Notes"
import NoteCreatingPage from "../NoteCreatingPage/NoteCreatingPage"
import styles from "./Home.module.css"

const Home = ( {store} ) => {
  return (
    <div className={`container ${styles.wrapper}`}>
      <Link to="/creatingNote" className={styles.button}>create note</Link>
      <Notes notesList={store.getState().notes.notesList} dispatch={store.dispatch} />
    </div>
  )
}

export default Home