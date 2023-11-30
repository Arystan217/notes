import React from "react"
import { Link } from "react-router-dom"
import Notes from "./Notes/Notes"
import styles from "./Home.module.css"
import StoreContext from "../../StoreContext"

const Home = () => {
  return (
    <div className={`container ${styles.wrapper}`}>
      <Link to="/creatingNote" className={styles.button}>create note</Link>
      <StoreContext.Consumer>
        {store => <Notes notesList={store.getState().notes.notesList} dispatch={store.dispatch} />}
      </StoreContext.Consumer>
    </div>
  )
}

export default Home