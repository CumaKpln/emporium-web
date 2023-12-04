import "./App.css";
import Main from "./components/Main";
import Hesap from "./components/hesap";
import { Routes, Route } from "react-router-dom";
import UrunYükle from "./components/urunYükle";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import UrunDetay from "./components/UrunDetay";
import LogIn from "./pages/LogIn";
import SignIn from "./pages/SignIn";



function App() {
  

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />

        <Route path="/hesabım" exact element={<LogIn/>} />
        <Route path="/giris" exact element={<Main/>} />
        <Route path="/hesabimyok" exact element={<SignIn/>} />
        {/* <Route path="/sifremiunuttum" element={<ForgotPassword />} /> */}
        <Route path="/urun-detay" exact element={<UrunDetay/>} />

        <Route path="/ilan-ver" element={<UrunYükle />} />
        <Route path="/hesabım" element={<Hesap />} />
        <Route path="/UrunDetay" element={<UrunDetay />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
