import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "QuizWiz – Real-Time Multiplayer Quiz Platform",
      description:
        "Built using React, Node.js, Socket.io. Enables live quizzes with room joining, real-time updates, and score tracking.",
      timeline: "Jan 2025 - Mar 2025",
    },
    {
      title: "SoilSense – Smart Fertilizer Recommendation System",
      description:
        "Java-based desktop app that provides crop/fertilizer suggestions based on soil pH, nitrogen, etc. with exportable reports.",
      timeline: "Mar 2024 - May 2024",
    },
    {
      title: "RideMate – Ride Sharing Mobile App (UI/UX Design)",
      description:
        "Designed with Figma for rider/driver flow. Light/dark theme support, peer-tested onboarding & navigation screens.",
      timeline: "Nov 2024",
    },
  ];

  return (
    <section className="px-8 py-16" id="projects">
      <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-800 shadow-md p-6 rounded-xl border border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{proj.description}</p>
            <p className="text-sm text-blue-500 mt-2">{proj.timeline}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

