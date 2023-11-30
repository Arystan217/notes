import React, { createRef, useState } from "react"
import { editNoteActionCreator } from "../../redux/notesReducer";
import NotePage from "./NotePage"
import StoreContext from "../../StoreContext";

const NotePageContainer = () => {

  const [isEmptyTitle, setIsEmptyTitle] = useState(false)
  const [isEmptyBody, setIsEmptyBody] = useState(false)

  const titleRef = createRef()
  const bodyRef = createRef()
  

  return (
    <StoreContext.Consumer>
      {store => {

        const handleTitleChange = () => {
          const trimmedTitle = titleRef.current.innerText;
          setIsEmptyTitle(!trimmedTitle)
        }

        const handleBodyChange = () => {
          const trimmedBody = bodyRef.current.innerText;
          setIsEmptyBody(!trimmedBody)
        }

        const handleSaveNote = () => {
          const title = titleRef.current.innerText;
          if (title.trim()) {
            const body = bodyRef.current.innerText;
            store.dispatch(editNoteActionCreator(title, body));
            console.log("successfully added");
          }
        }

        return (
          <NotePage
            titleRef={titleRef}
            bodyRef={bodyRef}
            note={store.getState().notes.openedNote}
            handleTitleChange={handleTitleChange}
            handleBodyChange={handleBodyChange}
            handleSaveNote={handleSaveNote}
            isEmptyTitle={isEmptyTitle}
            isEmptyBody={isEmptyBody}
          />
        );
      }}
    </StoreContext.Consumer>
  )
};

export default NotePageContainer;
