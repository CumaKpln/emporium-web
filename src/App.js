import "./App.css";
import Main from "./components/Main";
import Account from "./components/Account";
import { Routes, Route } from "react-router-dom";
import UploadProduct from "./components/UploadProduct";
import ProductDetail from "./components/ProductDetail-Detail";
import LogIn from "./pages/LogIn";
import SignIn from "./pages/SignIn";
import ForgotPassword from "./pages/ForgotPassword";
import Favorites from "./components/favorites";



function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />

        <Route path="/account" exact element={<Account />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/upload-product" element={<UploadProduct />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<SignIn />} />

        <Route path="/product-detail/" exact element={<ProductDetail />} />

        {<Route path="/sifremiunuttum" element={<ForgotPassword />} /> }
      </Routes>
    
    

    </>
  );
}

export default App;
