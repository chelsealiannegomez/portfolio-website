import React, { useState, useEffect } from 'react';
import Header from './Header';
import Projects from './Projects';
import Footer from './Footer';
import About from './About';
import ContactMe from './ContactMe';
import LoadingScreen from './LoadingScreen';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div>
      <Header />
      <main>
        <About />
        <Projects />
        <ContactMe />
      </main>
      <Footer />
    </div>
  );
};

export default App;
