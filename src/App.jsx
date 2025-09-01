import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import News from './components/News';
import Gallery from './components/Gallery';
import About from './components/About';
import Footer from './components/Footer';
import './styles/globals.css';
import './styles/animations.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <News />
      <Gallery />
      <About />
      <Footer />
    </div>
  );
}

export default App;
