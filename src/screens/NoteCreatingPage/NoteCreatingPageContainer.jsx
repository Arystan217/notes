import React, { createRef, useState } from "react";
import { addNoteActionCreator } from "../../redux/notesReducer";
import { useNavigate } from "react-router-dom";
import NoteCreatingPage from "./NoteCreatingPage";
import StoreContext from "../../StoreContext";

const NoteCreatingPageContainer = ( {} ) => {
  
  const [isEmptyTitle, setIsEmptyTitle] = useState(true)
  const [isEmptyBody, setIsEmptyBody] = useState(true)

  const titleRef = createRef()
  const bodyRef = createRef()
  
  const navigate = useNavigate()

  return (
    <StoreContext.Consumer>
      {(store) => {

        const handleTitleChange = () => {
          const trimmedTitle = titleRef.current.innerText
          setIsEmptyTitle(!trimmedTitle)
        }

        const handleBodyChange = () => {
          const trimmedBody = bodyRef.current.innerText
          setIsEmptyBody(!trimmedBody)
        }


        const handleSaveNote = () => {
          const title = titleRef.current.innerText;
          if (titleRef.current.innerText.trim()) {
            const body = bodyRef.current.innerText
            store.dispatch(addNoteActionCreator(title, body))
            navigate("/home")
            console.log("successfully added")
          }
        }


        return (
          <NoteCreatingPage
            titleRef={titleRef}
            bodyRef={bodyRef}
            handleTitleChange={handleTitleChange}
            handleBodyChange={handleBodyChange}
            isEmptyTitle={isEmptyTitle}
            isEmptyBody={isEmptyBody}
            handleSaveNote={handleSaveNote}
          />
        )

      }}
    </StoreContext.Consumer>
  );
};

export default NoteCreatingPageContainer;
