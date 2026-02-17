import React from "react";
import { Sun, Moon } from "lucide-react";

const Navbar = ({ toggleDark }) => {
  return (
    <nav className="flex justify-between items-center px-10 py-6 shadow-md bg-white dark:bg-gray-800">
      <h1 className="text-2xl font-bold text-blue-600">Anjali Jaiswal</h1>
      <ul className="flex gap-6 font-medium">
        <li><a href="#" className="hover:text-blue-600">Home</a></li>
        <li><a href="#work" className="hover:text-blue-600">Experience</a></li>
        <li><a href="#skills" className="hover:text-blue-600">Skills</a></li>
        <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
        <li><a href="#about" className="hover:text-blue-600">About</a></li>
        <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
      </ul>
      <button onClick={toggleDark} className="ml-4">
        <Moon className="dark:hidden" />
        <Sun className="hidden dark:inline-block" />
      </button>
    </nav>
  );
};

export default Navbar;
