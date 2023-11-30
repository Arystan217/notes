import { Route, Routes } from "react-router-dom";
import "./assets/styles/global.css";
import Home from "./screens/HomePage/Home";
import NotePageContainer from "./screens/NotePage/NotePageContainer";
import NoteCreatingPageContainer from "./screens/NoteCreatingPage/NoteCreatingPageContainer";

const App = ({store}) => {

  return (
    <Routes>
      <Route path="*" element={<Home />} /> {/* DONE */}
      <Route path="/creatingNote" element={<NoteCreatingPageContainer />} /> {/* DONE */}
      <Route path="/note" element={<NotePageContainer />} />
    </Routes>
  );
};

export default App;
