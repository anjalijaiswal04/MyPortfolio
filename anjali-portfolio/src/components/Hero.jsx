import React from "react";
import { Mail, Linkedin, Github } from "lucide-react";

const Hero = () => {
  return (
    <section className="text-center py-20 px-4" id="hero">
      <h1 className="text-5xl font-bold">
        Anjali <span className="text-blue-600">Jaiswal</span>
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mt-4">
        Full Stack Developer & UI/UX Designer
      </p>
      <p className="max-w-xl mx-auto mt-2 text-gray-500 dark:text-gray-400">
        Passionate about building intuitive, scalable web applications and
        creative interfaces. Final-year B.Tech CSE student with a strong grasp
        of modern development tools and team-based project experience.
      </p>

      <div className="mt-6 flex justify-center gap-4">
        <a href="mailto:anjalijaiswal82479@gmail.com" className="bg-blue-600 text-white px-6 py-2 rounded-md flex items-center gap-2">
          <Mail size={18} /> Get In Touch
        </a>
        <a href="https://www.linkedin.com/in/anjali-jaiswal-6ab98925a" target="_blank" className="border px-3 py-2 rounded-md">
          <Linkedin size={18} />
        </a>
        <a href="https://github.com/anjalijaiswal04" target="_blank" className="border px-3 py-2 rounded-md">
          <Github size={18} />
        </a>
      </div>

      {/* <div className="mt-10 flex justify-center gap-12 text-center">
        <div>
          <p className="text-2xl font-bold text-blue-600">3+</p>
          <p>Major Projects</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-green-500">Hackathons</p>
          <p>5+ Participations</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-orange-500">8</p>
          <p>CGPA</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-purple-600">4+</p>
          <p>Certificates</p>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;

