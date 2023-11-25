import { Route, Routes } from "react-router-dom";
import "./assets/styles/global.css";
import Home from "./screens/HomePage/Home";
import NotePage from "./screens/NotePage/NotePage";

const App = ({ store }) => {

  return (
    <Routes>
      <Route path="*" element={<Home store={store} />} />
      <Route path="/note" element={<NotePage note={store.getState().notes.openedNote} dispatch={store.dispatch} />} />
    </Routes>
  );
};

export default App;
