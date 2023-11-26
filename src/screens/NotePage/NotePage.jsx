import React, { useState } from "react";
import styles from "./NotePage.module.css";
import { useNavigate } from "react-router-dom";
import arrow from "../../assets/arrow.png";
import { addNoteActionCreator } from "../../redux/notesRedcuer";

const NotePage = ({ note, dispatch }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <div className="container">
        <img src={arrow} onClick={() => navigate("/home")} className={styles.backButton} />
        {note ? (
          <>
            <p className={styles.title}>
              {note.title}
            </p>
            <p className={styles.body}>
              {note.body}
            </p>
          </>
        ) : (
          <p className={styles.error}>Problem has happened!</p>
        )}
      </div>
    </div>
  );
};

export default NotePage;
