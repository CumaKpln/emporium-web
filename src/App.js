import "./App.css";
import Main from "./components/Main";
// import Hesap from "./components/Account";
import { Routes, Route } from "react-router-dom";
import UploadProduct from "./components/UploadProduct";
// import ProductDetail-Detail from "./components/ProductDetail-Detail";
import LogIn from "./pages/LogIn";
import SignIn from "./pages/SignIn";
import ForgotPassword from "./pages/ForgotPassword";
import Favorites from "./components/favorites";



function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
{/* 
       <Route path="/hesabım" exact element={<Account />} />  */}
        <Route path="/favoriler" element={<Favorites />} />
        <Route path="/ilan-ver" element={<UploadProduct />} /> 
        <Route path="/Giris-yap" element={<LogIn />} />
        <Route path="/kayit-ol" element={<SignIn />} />
        <Route path="/hesabimyok" element={<SignIn />} />
        
        {/* {<Route path="/urun-detay" exact element={<ProductDetail-Detail />} /> }  */}
        {<Route path="/sifremiunuttum" element={<ForgotPassword />} /> }
      </Routes>
    
      <Routes>

      </Routes>

    </>
  );
}

export default App;
