import React from "react";

const Experience = () => {
  const experiences = [
    {
      company: "Softpro India Computer Technologies",
      role: "MERN Stack Intern",
      duration: "3 Months",
      project: "Hospital Information System (HealthNexus)",
      description:
        "Developed a full-fledged web-based Hospital Information System using the MERN stack. Built modules like patient registration, doctor dashboard, appointment management, login authentication, and responsive UI screens.",
      contributions: [
        "Developed REST APIs using Node.js and Express",
        "Designed MongoDB schemas for patients, doctors, and appointments",
        "Created dynamic React pages for dashboards and forms",
        "Implemented secure user authentication using JWT",
        "Integrated full CRUD operations across all modules",
        "Collaborated in an agile environment under senior developers",
      ],
      tech: ["MongoDB", "Express", "React", "Node.js", "Tailwind", "JWT"],
    },
  ];

  return (
    <section id="experience" className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center">
          Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-2xl"
            >
              <h3 className="text-2xl font-semibold text-blue-600">
                {exp.company}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 font-medium mt-1">
                {exp.role} • {exp.duration}
              </p>

              <p className="mt-4 text-gray-600 dark:text-gray-400">
                <strong>Project:</strong> {exp.project}
              </p>

              <p className="mt-2 text-gray-600 dark:text-gray-400">
                {exp.description}
              </p>

              <div className="mt-4">
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Key Contributions:
                </h4>
                <ul className="list-disc ml-6 text-gray-600 dark:text-gray-300 mt-2">
                  {exp.contributions.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {exp.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm bg-gray-200 dark:bg-gray-700 rounded-full text-gray-800 dark:text-gray-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
