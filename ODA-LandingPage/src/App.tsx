import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VideoSection from './components/VideoSection';
import Agents from './components/Agents';
import Calculator from './components/Calculator';
import BetaForm from './components/BetaForm';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <VideoSection />
        <Agents />
        <Calculator />
        <BetaForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;