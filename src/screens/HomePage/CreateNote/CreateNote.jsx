import React, { useState } from "react"
import styles from "./CreateNote.module.css"
import { addNoteActionCreator } from "../../../redux/notesRedcuer"

const CreateNote = ( {createNote} ) => {

  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")

  const sendNote = e => {
    createNote(addNoteActionCreator(title, body))
  }

  const keyPressHandler = e => {
    if (e.key === "Enter") {
      sendNote(e)
    }
  }
  return (
    <div className={styles.wrapper}>
      <input 
        type="text"
        placeholder="Enter the title:"
        value={title} 
        onChange={e => setTitle(e.target.value)}
        onKeyDown={keyPressHandler}
        className={styles.input}
      />
      <textarea
        placeholder="Enter the body:"
        value={body}
        onChange={e => setBody(e.target.value)}
        onKeyDown={keyPressHandler}
        className={styles.textarea}
      ></textarea>
      <button
        onClick={sendNote}
        className={styles.button}
        >Create note</button>
    </div>
  )
}

export default CreateNote