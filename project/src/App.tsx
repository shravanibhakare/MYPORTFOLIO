import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer className="bg-gray-900 text-white py-6 text-center">
        <p className="text-sm">© {new Date().getFullYear()} Shravani Bhakare. Built with 💛</p>
      </footer>
    </div>
  );
}

export default App;