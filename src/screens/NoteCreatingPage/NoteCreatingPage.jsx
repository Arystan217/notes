import React, { createRef, useState } from "react"
import styles from "./NoteCreatingPage.module.css"
import { addNoteActionCreator } from "../../redux/notesReducer"
import { useNavigate } from "react-router-dom"
import arrow from "./../../assets/arrow.png"

const NoteCreatingPage = ( {dispatch} ) => {

  const [isEmptyTitle, setIsEmptyTitle] = useState(true)
  const [isEmptyBody, setIsEmptyBody] = useState(true)

  const title = createRef()
  const body = createRef()

  const handleTitleChange = () => {
    if (!title.current.innerText.trim()) setIsEmptyTitle(true)
    else setIsEmptyTitle(false)
  }
  const handleBodyChange = () => {
    if (!body.current.innerText.trim()) setIsEmptyBody(true)
    else setIsEmptyBody(false)
  }


  const navigate = useNavigate()
  const handleSaveNote = () => {
    if (title.current.innerText.trim()) {
      dispatch(addNoteActionCreator(title.current.innerText, body.current.innerText))
      title.current.innerText = ""
      navigate("/home")
      console.log("successfully added")
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className="container">
      <img src={arrow} onClick={() => navigate("/home")} className={styles.backButton} />
        <div className={styles.content}>
          {/* <textarea className={styles.title}></textarea> */}
          <p 
            className={`${styles.title} ${isEmptyTitle && styles.emptyTitle}`} 
            ref={title} 
            onInput={handleTitleChange}
            contentEditable 
          ></p>
          <p 
            className={`${styles.body} ${isEmptyBody && styles.emptyBody}`} 
            ref={body}
            onInput={handleBodyChange}
            contentEditable 
          ></p>
          <button className={styles.button} onClick={handleSaveNote}>Save note</button>
        </div>
      </div>
    </div>
  )
}

export default NoteCreatingPage