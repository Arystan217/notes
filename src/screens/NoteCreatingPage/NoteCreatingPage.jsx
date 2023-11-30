import React from "react"
import { useNavigate } from "react-router-dom"
import styles from "./NoteCreatingPage.module.css"
import arrow from "./../../assets/arrow.png"

const NoteCreatingPage = ( {titleRef, bodyRef, handleTitleChange, handleBodyChange, isEmptyTitle, isEmptyBody, handleSaveNote} ) => {
  const navigate = useNavigate()

  const handlePaste = (event) => {
    event.preventDefault();
    const text = event.clipboardData.getData("text/plain");
    document.execCommand("insertText", false, text);
  };

  return (
    <div className={styles.wrapper}>
      <div className="container">
      <img src={arrow} onClick={() => navigate("/home")} className={styles.backButton} />
        <div className={styles.content}>
          <p 
            className={`${styles.title} ${isEmptyTitle && styles.emptyTitle}`} 
            ref={titleRef} 
            onInput={handleTitleChange}
            onPaste={handlePaste}
            contentEditable 
          ></p>
          <p 
            className={`${styles.body} ${isEmptyBody && styles.emptyBody}`} 
            ref={bodyRef}
            onInput={handleBodyChange}
            onPaste={handlePaste}
            contentEditable 
          ></p>
          <button className={styles.button} onClick={handleSaveNote}>Save note</button>
        </div>
      </div>
    </div>
  )
}

export default NoteCreatingPage