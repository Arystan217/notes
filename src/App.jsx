import { Route, Routes } from "react-router-dom";
import "./assets/styles/global.css";
import Home from "./screens/HomePage/Home";
import NotePage from "./screens/NotePage/NotePage";
import NoteCreatingPage from "./screens/NoteCreatingPage/NoteCreatingPage";

const App = ({ store }) => {

  return (
    <Routes>
      <Route path="*" element={<Home store={store} />} />
      <Route path="/creatingNote" element={<NoteCreatingPage dispatch={store.dispatch} />} />
      <Route path="/note" element={<NotePage dispatch={store.dispatch} note={store.getState().notes.openedNote} />} />
    </Routes>
  );
};

export default App;
