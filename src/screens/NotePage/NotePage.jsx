import React, { createRef, useState } from "react"
import styles from "./NotePage.module.css";
import { useNavigate } from "react-router-dom";
import arrow from "../../assets/arrow.png";
import { editNoteActionCreator } from "../../redux/notesReducer";

const NotePage = ({ note, dispatch }) => {

  const [isEmptyTitle, setIsEmptyTitle] = useState(false)
  const [isEmptyBody, setIsEmptyBody] = useState(!note.body ? true : false)

  const title = createRef()
  const body = createRef()

  const handleTitleChange = () => {
    if (!title.current.innerText) {setIsEmptyTitle(true)}
    else {setIsEmptyTitle(false)}
  }
  const handleBodyChange = () => {
    if (!body.current.innerText) {setIsEmptyBody(true)}
    else {setIsEmptyBody(false)}
  }


  const handlePaste = (event) => {
    event.preventDefault();
    const text = event.clipboardData.getData("text/plain");
    document.execCommand("insertText", false, text);
  };


  const navigate = useNavigate()
  const handleSaveNote = () => {
    if (title.current.innerText.trim()) {
      dispatch(editNoteActionCreator(note.id, title.current.innerText, body.current.innerText))
      console.log("successfully added")
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className="container">
        <img src={arrow} onClick={() => navigate("/home")} className={styles.backButton} />
        {note ? (
          <div className={styles.content}>
            <p 
              className={`${styles.title} ${isEmptyTitle && styles.emptyTitle}`} 
              ref={title} 
              onInput={handleTitleChange}
              onPaste={handlePaste}
              contentEditable 
            >{note.title}</p>
            <p 
              className={`${styles.body} ${isEmptyBody && styles.emptyBody}`} 
              ref={body}
              onInput={handleBodyChange}
              onPaste={handlePaste}
              contentEditable 
            >{note.body}</p>
            <button className={styles.button} onClick={handleSaveNote}>Save note</button>
          </div>
        ) : (
          <p className={styles.error}>Problem has happened!</p>
        )}
      </div>
    </div>
  );
};

export default NotePage;
