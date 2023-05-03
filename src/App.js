import "./App.css";
import "./style/index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

// функциональный компонент
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favs" element={<Favorites />} />
        <Route path="*" element={<h1>Страница не найдена</h1>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
