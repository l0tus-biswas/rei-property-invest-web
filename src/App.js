
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
import Pricing from './components/Pricing/Pricing';
import Services from './components/Services/Services';
import VideoDemos from './components/VideoDemos/VideoDemos';
import Integration from './components/Integration/Integration';
import TermsPrivacy from './components/TermsPrivacy/TermsPrivacy';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />

          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/video-demos" element={<VideoDemos />} />
          <Route path="/our-integration-services" element={<Integration />} />
          <Route path="/terms-and-privacy" element={<TermsPrivacy />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
