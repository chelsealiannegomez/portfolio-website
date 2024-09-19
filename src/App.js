import React from 'react';
import Header from './Header';
import Projects from './Projects';
import Footer from './Footer';
import About from './About';
import ContactMe from './ContactMe';


const App = () => {
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