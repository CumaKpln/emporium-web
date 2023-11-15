import "./App.css";
import Main from "./components/Main";
import Hesap from "./components/hesap";
import { Routes, Route } from "react-router-dom";
import UrunYükle from "./components/ürünYükleme/urunYükle";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/hesabim" element={<Hesap />} />
        <Route path="/urun-yukle" element={<UrunYükle />} />
      </Routes>
    </>
  );
}

export default App;
