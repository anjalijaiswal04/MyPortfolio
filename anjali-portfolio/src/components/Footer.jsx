import React from "react";
import { Linkedin, Github, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-16 py-8 border-t bg-gray-50 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-4">
          <a
            href="mailto:anjalijaiswal82479@gmail.com"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            <Mail size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/anjali-jaiswal-6ab98925a"
            target="_blank"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://github.com/anjalijaiswal04"
            target="_blank"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            <Github size={20} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} <span className="font-semibold">Anjali Jaiswal</span>.  
          All rights reserved.
        </p>

        {/* Subtext */}
        <p className="text-xs mt-2 text-gray-500 dark:text-gray-500">
          Designed & Built with ❤️ using React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
