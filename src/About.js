import React, { useEffect } from 'react';
import Typed from 'typed.js';
import { motion } from 'framer-motion';

const About = () => {
  useEffect(() => {
    const options = {
      strings: [
        "Student",
        "Software Developer",
        "Web Developer",
        "Programmer",
        "Learner",
      ],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    };

    const typed = new Typed("#text", options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="about" className="p-4 h-screen flex items-center pl-16 bg-cover bg-center bg-fixed font-Roboto" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1510906594845-bc082582c8cc?q=80&w=2044&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA==')` }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }} 
        viewport={{ once: false }} 
      >
        <div className="max-w-3xl">
        <h2 className="text-6xl font-bold mb-4 text-white">Chelsea Lianne Gomez</h2>
        <h3 className="font-semibold text-3xl text-blue-800 my-3"><span id="text"></span></h3>
        <p className="text-white">
          Hello! I’m Chelsea, majoring in Computer Science with a minor in Business. I am a passionate developer with experience in building web applications.
          I enjoy creating intuitive and dynamic user experiences in frontend development using HTML, CSS, Tailwind, JavaScript, and React. I also enjoy writing scripts and backend using Python.
        </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;