import "./App.css";
import Main from "./components/Main";
import Account from "./components/Account/Account";
import { Routes, Route } from "react-router-dom";
import UploadProduct from "./components/UploadProduct";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import LogIn from "./pages/LogIn";
import SignIn from "./pages/SignIn";
import ChangePassword from "./pages/ChangePassword";
import ForgotPassword from "./pages/ForgotPassword";
import { useSelector } from "react-redux";



function App() {
  const id = useSelector(
    (state) => state.products.selectedProduct.id - 1
  );


  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />

        <Route path="/account" exact element={<Account />} />
        <Route path="/upload-product" element={<UploadProduct />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<SignIn />} /> 

        <Route path={`/urun-detayi/${id}`} element={<ProductDetail />} />
        <Route path="/sifremiunuttum" element={<ForgotPassword />} />
        <Route path="/sifremiunuttum/sifre-degistirme" element={<ChangePassword />} />

      </Routes>



    </>
  );
}

export default App;
