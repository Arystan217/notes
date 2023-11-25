import React from "react"
import styles from "./Note.module.css"
import { openNoteActionCreator } from "../../../../redux/notesRedcuer"
import { useNavigate } from "react-router-dom"

const Note = ( {index, title, dispatch} ) => {

  const navigate = useNavigate()
 
  const noteClickHandler = e => {
    dispatch(openNoteActionCreator(e.target.getAttribute("id")))
    navigate("/note")
  }

  return (
    <div 
      id={index}
      className={styles.note}
      onClick={noteClickHandler}
    >
      <p id={index}>{title}</p>
    </div>
  )
}

export default Note