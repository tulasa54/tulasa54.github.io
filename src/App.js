import './App.css';
import Footer from './components/Footer/Footer';
// import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import { Routes, Route } from "react-router-dom";
import About from "./components/About/About"
import Portfolio from "./components/Portfolio/Portfolio"
import Contact from "./components/Contact/Contact"

function App() {
  return (
    <>
    {/* <div className="App"> */}
      {/* <Header /> */}
    {/* </div> */}

    <div className="home-container">
      {/* <div> */}
        <NavBar />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {/* <Home /> */}
      {/* </div> */}
    </div>

    <div>
      <Footer />
    </div>
    </>
  );
}

export default App;
