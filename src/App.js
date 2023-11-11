import "./App.css";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
        <Navbar />
      <div className="container">
        <Main />
      </div>
        <Footer />
    </>
  );
}

export default App;
