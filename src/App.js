import "./App.css";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter/>
        <Navbar />
      <div className="container">
        <Main />
      </div>
      <Footer />
    <BrowserRouter/>
  
    </>
  );
}

export default App;
