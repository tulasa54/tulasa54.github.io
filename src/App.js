import './App.css';
import Footer from './components/Footer/Footer';
// import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <>
    {/* <div className="App"> */}
      {/* <Header /> */}
    {/* </div> */}

    <div className="home-container">
      {/* <div> */}
        <NavBar />
  
      <Home />
      {/* </div> */}
    </div>

    <div>
      <Footer />
    </div>
    </>
  );
}

export default App;
