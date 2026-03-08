import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact';
import ChatBot from './components/ChatBot';
import Footer from './components/Footer';
import Loading from './components/Loading';
import Expertise from './components/Expertise/Expertise';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="bg-gray-900 min-h-screen text-white selection:bg-blue-500/30">
      <Navbar />
      <Hero />
      <Expertise />
      <Skills />
      <Education />
      <Projects />
      <Resume />
      <Contact />
      <ChatBot />
      <Footer />
    </div >
  );
}

export default App;
