
import './App.css';
import Home from './components/Home/Home';
import Features from './components/Features/Features';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/features" element={<Features />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
