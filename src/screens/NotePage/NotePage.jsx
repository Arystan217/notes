import styles from "./NotePage.module.css";
import arrow from "../../assets/arrow.png";
import { useNavigate } from "react-router-dom"

const NotePage = ( {titleRef, bodyRef, note, handleTitleChange, handleBodyChange, handleSaveNote, isEmptyTitle, isEmptyBody } ) => {

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
        {note ? (
          <div className={styles.content}>
            <p 
              className={`${styles.title} ${isEmptyTitle && styles.emptyTitle}`} 
              ref={titleRef} 
              onInput={handleTitleChange}
              onPaste={handlePaste}
              contentEditable 
            >{note.title}</p>
            <p 
              className={`${styles.body} ${isEmptyBody && styles.emptyBody}`} 
              ref={bodyRef}
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
  )
}

export default NotePage;
