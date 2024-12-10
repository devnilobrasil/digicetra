import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Solutions from './pages/Solutions';
import Contact from './pages/Contact';
import './i18n/config';
import './index.css';

function App() {
  return (
    <Router basename="/devit/digicetra/digicetra2">
      <div className="min-h-screen bg-black">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1>404 - Page Not Found</h1>} /> {/* Rota Fallback */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
