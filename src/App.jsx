import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Features from './pages/Features';
import Solutions from './pages/Solutions';
import Demo from './pages/Demo';
import Compliance from './pages/Compliance';
import About from './pages/About';
import Contact from './pages/Contact';
import ScrollToTop from './components/common/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-surface-gray">
        <Navbar />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/compliance" element={<Compliance />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
