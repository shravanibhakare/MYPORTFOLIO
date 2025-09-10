import React from 'react';
import { LineChart, Search, Brain, Code, Film, Globe2, Terminal, Book } from 'lucide-react';

const projects = [
  {
    title: "CoinVista (currently working)",
    icon: <LineChart className="h-6 w-6 text-purple-500" />,
    description: "A real-time cryptocurrency tracker that provides market insights, price trends, and exchange details with an interactive UI.",
    tech: ["React", "CoinGecko API", "Chart.js", "Tailwind CSS"],
    github: "https://github.com/shravanibhakare/COIN_Vista"
  },
  {
    title: "Movie Recommendation System",
    icon: <Film className="h-6 w-6 text-red-500" />,
    description: "ML-based system that recommends movies to users based on content similarity and collaborative filtering techniques.",
    tech: ["Python", "Pandas", "Scikit-learn", "Streamlit"],
    github: "https://github.com/shravanibhakare/movie_recommendation_system"
  },
  {
    title: "AI Travel Planner",
    icon: <Globe2 className="h-6 w-6 text-teal-500" />,
    description: "Group project leveraging AI to generate personalized travel itineraries, suggest destinations, and optimize trip planning based on user preferences."
  },
  {
    title: "Command Line Games (Python)",
    icon: <Terminal className="h-6 w-6 text-indigo-500" />,
    description: "A collection of fun Python-based command-line games including Sudoku with puzzle generation & validation, and a Number Guessing Game with difficulty levels and score tracking.",
    tech: ["Python", "CLI", "Random", "Backtracking"],
    github: "https://github.com/shravanibhakare/python-practicals"
  },
  {
    title: "Library Management System",
    icon: <Book className="h-6 w-6 text-green-600" />,
    description: "Command-line based Library Management System built in Java, enabling book records management, issue/return tracking, and user handling.",
    tech: ["Java", "CLI", "OOP"],
    github: "https://github.com/shravanibhakare/javapracticals/blob/main/lib.java"
  }
];

export default function Projects() {
  return (
    <section className="py-20 bg-white" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Projects</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          A showcase of my technical journey through AI/ML, data analysis, and software development
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                {project.icon}
                <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
              </div>
              <p className="text-gray-600 mb-4 h-24">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech?.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-gray-50 rounded-lg text-sm text-gray-600">
                    {tech}
                  </span>
                ))}
              </div>
              {project.github && (
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 transition-colors"
                >
                  View Project →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
