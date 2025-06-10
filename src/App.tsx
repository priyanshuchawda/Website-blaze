import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Team from './pages/Team';

function App() {
  return (
    <ThemeProvider>
      <HashRouter>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-black to-slate-900 text-white">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/team" element={<Team />} />
          </Routes>
          <Footer />
        </div>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;