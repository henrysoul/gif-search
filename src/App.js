import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchGif from "./components/pages/SearchGif";
import ViewGif from "./components/pages/ViewGif";
function App() {
  return (
    <Routes>
      <Route path="/" element={<SearchGif />} />
      <Route path="register" element={<ViewGif />} />
    </Routes>
  );
}

export default App;
