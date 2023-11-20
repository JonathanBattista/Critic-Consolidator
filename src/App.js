import "./App.css";
import { Header } from "./components/Header/Header.js/Header.js";
import { Homepage } from "./pages/Homepage/Homepage.js";
import { Moviepage } from "./pages/Uploadpage/Uploadpage";
import { NotFound } from "./pages/NotFound/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/partials/_global.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/games" element={<Homepage />} />
        <Route path="/movies" element={<Moviepage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
