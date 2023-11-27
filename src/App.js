import "./App.css";
import Main from "./components/Main";
import Hesap from "./components/hesap";
import { Routes, Route } from "react-router-dom";
import UrunYükle from "./components/urunYükle";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import UrunDetay from "./components/UrunDetay";
import Favorits from "./components/Favorits";



function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/ilan-ver" element={<UrunYükle />} />
        <Route path="/hesabım" element={<Hesap />} />
        <Route path="/UrunDetay" element={<UrunDetay />} />
        <Route path="/Favorits" element={<Favorits />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
