import "./App.css";
import Main from "./components/Main";
import Hesap from "./components/hesap";
import { Routes, Route } from "react-router-dom";
import UrunYükle from "./components/urunYükle";
import UrunEkle from "./components/Urunekle";
import UrunDetay from "./components/UrunDetay";
import LogIn from "./pages/LogIn";
import SignIn from "./pages/SignIn";
import Favorites from "./components/favorites";



function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />

        <Route path="/hesabım" exact element={<Hesap />} />
        <Route path="/favoriler" element={<Favorites />} />
        <Route path="/ilan-ver" element={<UrunYükle />} />
        <Route path="/Giris-yap" element={<LogIn />} />
        <Route path="/kayit-ol" element={<SignIn />} />

        <Route path="/urun-detay" exact element={<UrunDetay />} />
        {/* <Route path="/sifremiunuttum" element={<ForgotPassword />} /> */}
      </Routes>
    
    

    </>
  );
}

export default App;
