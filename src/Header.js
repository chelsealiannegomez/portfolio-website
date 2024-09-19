import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-900 text-white p-4 fixed w-screen">
      <div className="container mx-auto flex justify-end">
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#about" className="text-white hover:underline">About Me</a></li>
            <li><a href="#projects" className="text-white hover:underline">Projects</a></li>
            <li><a href="#contact" className="text-white hover:underline">Contact Me</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;