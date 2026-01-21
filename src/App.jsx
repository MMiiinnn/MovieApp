import "./App.css";
import BackToTop from "./components/Atoms/BackToTop";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navigation/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
