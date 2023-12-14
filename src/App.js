import "./App.css";
import Main from "./components/Main";
import Account from "./components/Account";
import { Routes, Route } from "react-router-dom";
import UploadProduct from "./components/UploadProduct";
import ProductDetail from "./components/ProductDetail";
import LogIn from "./pages/LogIn";
import SignIn from "./pages/SignIn";
import Favorites from "./components/favorites";



function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />

        <Route path="/hesabım" exact element={<Account />} />
        <Route path="/favoriler" element={<Favorites />} />
        <Route path="/ilan-ver" element={<UploadProduct />} />
        <Route path="/Giris-yap" element={<LogIn />} />
        <Route path="/kayit-ol" element={<SignIn />} />

        <Route path="/urun-detay" exact element={<ProductDetail />} />
        {/* <Route path="/sifremiunuttum" element={<ForgotPassword />} /> */}
      </Routes>



    </>
  );
}

export default App;
