import './App.css';
import Header from './pages/Header';
import Footer from './pages/Footer';
import Home from './pages/Home';
import About from './pages/About'; // make sure this exists
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Certificates from './pages/Certificates';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <main style={{ textAlign: 'center', padding: '40px 0' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/certificates" element={<Certificates/>} />

          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
