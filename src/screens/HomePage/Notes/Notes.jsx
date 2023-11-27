import React from "react"
import styles from "./Notes.module.css"
import Note from "./Note/Note"

const Notes = ( {notesList, dispatch} ) => {
  return (
    <div className={styles.notes}>
      {notesList.length ? (
        notesList.map(note => <Note index={note.id} key={note.id} title={note.title} dispatch={dispatch} />)
      ) : (
        <p className={styles.noNotes}>You don't have notes yet...</p>
      )}
    </div>
  )
}

export default Notes