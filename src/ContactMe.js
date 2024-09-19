import React from 'react';
import { motion } from 'framer-motion';

const ContactMe = () => {
  return (
    <section id="contact" className="p-4 h-auto flex items-center justify-center bg-gray-800 py-16 font-Roboto">
      <motion.div
        className="max-w-md w-full border p-6 rounded-lg shadow-lg bg-white"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
      >
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <p className="mb-4">Feel free to reach out to me via email or connect with me on LinkedIn!</p>
        <div className="mb-4">
          <h3 className="font-semibold">Email: <a href="mailto:chelseatangomez@gmail.com" className="text-blue-500 hover:underline font-normal">chelseatangomez@gmail.com</a></h3>
        </div>
        <div>
          <h3 className="font-semibold">LinkedIn: <a href="https://www.linkedin.com/in/chelsea-lianne-gomez-0416b9247/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline font-normal">Chelsea Lianne Gomez</a></h3>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactMe;