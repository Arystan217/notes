import React from "react"
import styles from "./Note.module.css"
import { deleteNoteActionCreator, openNoteActionCreator } from "../../../../redux/notesReducer"
import { useNavigate } from "react-router-dom"
import deleteIcon from "./../../../../assets/delete.png"

const Note = ( {index, title, dispatch} ) => {

  const navigate = useNavigate()
 
  const noteClickHandler = e => {
    if (e.target.tagName !== "IMG") {
      dispatch(openNoteActionCreator(e.target.getAttribute("id")))
      navigate("/note")
    }
  }

  const deleteHandler = e => {
    dispatch(deleteNoteActionCreator(e.target.parentNode.id))
  }

  return (
    <div 
      id={index}
      className={styles.note}
      onClick={noteClickHandler}
    >
      <p className={styles.noteBody} id={index}>{title}</p>
      <img 
        src={deleteIcon} 
        className={styles.deleteIcon}
        onClick={deleteHandler}
        alt="" 
      />
    </div>
  )
}

export default Note