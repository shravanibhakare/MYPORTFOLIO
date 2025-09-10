import React from 'react';
import { Code2, Database, Brain, Terminal, BookOpen, Wrench } from 'lucide-react';

const skills = {
  "Programming Languages": {
    icon: <Code2 className="h-6 w-6 text-purple-500" />,
    items: [ "Python","Java", "C (basics)", "c++ (basics)", "JavaScript"]
  },
  "AI/ML & Data": {
    icon: <Brain className="h-6 w-6 text-indigo-500" />,
    items: ["TensorFlow", "Numpy", "Pandas","Data Visualization", "Big Data Analytics"]
  },
  "Web Development": {
    icon: <Terminal className="h-6 w-6 text-pink-500" />,
    items: ["React", "Django", "HTML/CSS", "MongoDB"]
  },
  "Tools & Platforms": {
    icon: <Wrench className="h-6 w-6 text-green-500" />,
    items: ["Git", "GitHub", "Postman", "Streamlit", "Netlify", "Linux"]
  },
  "Core Subjects": {
    icon: <BookOpen className="h-6 w-6 text-blue-500" />,
    items: ["Data Structures", "DBMS", "OOPs", "OS","Computer Networks", "Deep Learning", "Human Computer INteraction"]
  },
  "Soft Skills": {
    icon: <Database className="h-6 w-6 text-orange-500" />,
    items: ["Team Work", "Resilience", "Problem Solving ", "Creativity", "Curiosity & Continuous Learning"]
  }
};

export default function Skills() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50" id="skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Technical Skills</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          A comprehensive toolkit built through academic excellence, hands-on projects, and continuous learning
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, { icon, items }]) => (
            <div key={category} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                {icon}
                <h3 className="text-xl font-semibold text-gray-900">{category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((skill, index) => (
                  <span key={index} 
                        className="px-4 py-2 bg-gray-50 text-gray-700 rounded-lg text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}