import React, { useEffect } from "react";
import AOS from "aos";
import { User, GraduationCap, Code, Sparkles } from "lucide-react";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <section
      id="about"
      className="py-20 px-6 bg-gray-50 dark:bg-gray-900"
    >
      <h2
        data-aos="fade-up"
        className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
      >
        About Me
      </h2>

      <div
        data-aos="fade-up"
        className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center"
      >
        {/* Left Side – About Content */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
            <User size={24} className="text-blue-600 dark:text-blue-400" />
            Who I Am
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            I'm <span className="font-semibold text-blue-600 dark:text-blue-400">Anjali Jaiswal</span>, 
            a passionate Full Stack Developer & UI/UX Designer currently pursuing a B.Tech in Computer Science Engineering.
            I love building intuitive, user-friendly applications and designing clean interfaces that deliver great experiences.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4 flex items-center gap-2">
            <GraduationCap size={24} className="text-purple-600 dark:text-purple-400" />
            Education
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Final-year B.Tech CSE student with strong academic background and hands-on project experience in MERN Stack,
            Java development, real-time systems, and frontend UI/UX design.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4 flex items-center gap-2">
            <Code size={24} className="text-green-600 dark:text-green-400" />
            What I Do
          </h3>
          <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 space-y-2">
            <li>Develop scalable MERN Stack applications</li>
            <li>Design intuitive & modern UI/UX prototypes</li>
            <li>Build REST APIs and backend systems</li>
            <li>Work with real-time features and responsive frontend</li>
            <li>Create clean, maintainable code with best practices</li>
          </ul>
        </div>

        {/* Right Side – Card with modern styling */}
        <div
          data-aos="fade-left"
          className="p-8 rounded-3xl bg-white/40 dark:bg-gray-800/40
                     backdrop-blur-xl shadow-xl border border-gray-300/40 dark:border-gray-700/40
                     hover:shadow-2xl transition-all duration-500"
        >
          <div className="flex flex-col items-center">
            {/* Profile Title */}
            <Sparkles
              size={36}
              className="text-yellow-500 dark:text-yellow-400 mb-4"
            />

            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Full Stack Developer
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-center mb-4">
              Crafting seamless digital experiences.
            </p>

            {/* Highlight Stats */}
            <div className="grid grid-cols-3 gap-6 mt-6 text-center">
              <div>
                <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  5+
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Projects</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-green-600 dark:text-green-400">
                  1
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Internships</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                  8
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">CGPA</p>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="#contact"
              className="mt-10 px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700
                         transition shadow-lg"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
