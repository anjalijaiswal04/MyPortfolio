import React, { useEffect } from "react";
import AOS from "aos";
import {
  Code2,
  Braces,
  Hexagon,
  Database,
  Wrench,
  PenTool,
} from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code2 size={22} />,
    skills: [
      { name: "Java", level: 90 },
      { name: "Python", level: 70 },
      { name: "C", level: 80 },
      { name: "JavaScript", level: 75 },
    ],
  },
  {
    title: "Frontend Development",
    icon: <Braces size={22} />,
    skills: [
      { name: "React.js", level: 85 },
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
    ],
  },
  {
    title: "Backend Development",
    icon: <Hexagon size={22} />,
    skills: [
      { name: "Node.js", level: 60 },
      { name: "Express.js", level: 30 },
      { name: "REST APIs", level: 75 },
    ],
  },
  {
    title: "Databases",
    icon: <Database size={22} />,
    skills: [
      { name: "MongoDB", level: 60 },
      { name: "MySQL", level: 80 },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: <Wrench size={22} />,
    skills: [
      { name: "Git", level: 50 },
      { name: "GitHub", level: 70 },
      { name: "Postman", level: 70 },
    ],
  },
  {
    title: "UI/UX & Designing",
    icon: <PenTool size={22} />,
    skills: [
      { name: "Figma", level: 85 },
      { name: "UI/UX Design", level: 80 },
    ],
  },
];

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="skills" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <h2
        data-aos="fade-up"
        className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
      >
        Skills & Expertise
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className="p-6 rounded-2xl bg-white/50 dark:bg-gray-800/40 backdrop-blur-md
            shadow-lg border border-gray-300/40 dark:border-gray-700/40
            hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-blue-600 dark:text-blue-400">
                {category.icon}
              </span>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-200">
                {category.title}
              </h3>
            </div>

            {/* Skills with Circular Meters */}
            <div className="grid grid-cols-2 gap-6">
              {category.skills.map((skill, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center text-center"
                >
                  {/* Circle Meter */}
                  <svg className="w-20 h-20">
                    <circle
                      cx="40"
                      cy="40"
                      r="32"
                      stroke="gray"
                      strokeWidth="6"
                      fill="none"
                      className="opacity-20"
                    />
                    <circle
                      cx="40"
                      cy="40"
                      r="32"
                      stroke="#2563EB"
                      strokeWidth="6"
                      fill="none"
                      strokeDasharray={2 * Math.PI * 32}
                      strokeDashoffset={
                        2 * Math.PI * 32 - (skill.level / 100) * (2 * Math.PI * 32)
                      }
                      strokeLinecap="round"
                      className="transition-all duration-[1200ms]"
                    />
                  </svg>

                  {/* Skill name and % */}
                  <p className="mt-2 text-gray-900 dark:text-gray-200 font-medium">
                    {skill.name}
                  </p>
                  <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold">
                    {skill.level}%
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
