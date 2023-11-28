import "./App.css";
import { Header } from "./components/Header/Header.js";
import { Homepage } from "./pages/Home/Homepage/Homepage.js";
import { Moviepage } from "./pages/Movies/Moviepage/Moviepage.js";
import { NotFound } from "./pages/Home/NotFoundpage/NotFound.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/_global.scss";
import { Movieresultpage } from "./pages/Movies/Movieresultpage/Movieresultpage.js";
import { Moviesearchresultpage } from "./pages/Movies/Moviesearchresultpage/Moviesearchresultpage.js";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/games" element={<Homepage />} />
        <Route path="/movies" element={<Moviepage />} />
        <Route path="/movies/search" element={<Moviesearchresultpage />} />
        <Route path="/movies/:id" element={<Movieresultpage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
