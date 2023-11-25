import React, { useState } from "react";
import styles from "./NotePage.module.css";
import { useNavigate } from "react-router-dom";
import arrow from "../../assets/arrow.png";
import { addNoteActionCreator } from "../../redux/notesRedcuer";

const NotePage = ({ note, dispatch }) => {
  const navigate = useNavigate();

  const [title, setTitle] = useState(note?.title || "");
  const [body, setBody] = useState(note?.body || "");

  const handleSave = () => {
    console.log(addNoteActionCreator(note.id, title, body));
    console.log(title)
    console.log(body)
  };

  return (
    <div className={styles.wrapper}>
      <div className="container">
        <img src={arrow} onClick={() => navigate("/home")} className={styles.backButton} />
        {note ? (
          <>
            <p
              value={title}
              onChange={e => setTitle(e.target.value)}
              contentEditable
              className={styles.title}
            >
              {title}
            </p>
            <p
              onInput={(e) => setBody(e.target.value)}
              contentEditable
              className={styles.body}
            >
              {body}
            </p>
            <button onClick={handleSave}>save</button>
          </>
        ) : (
          <p className={styles.error}>Problem has happened!</p>
        )}
      </div>
    </div>
  );
};

export default NotePage;
