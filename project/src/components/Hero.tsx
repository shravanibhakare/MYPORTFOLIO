import React from 'react';
import { Sparkles, ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 pt-16 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full blur-lg opacity-30 animate-pulse"></div>
            <img 
              src="images/my_img.png"
              alt="Shravani Bhakare" 
              className="relative rounded-full w-40 h-40 object-cover border-4 border-white shadow-xl hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
        <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-md mb-8 hover:shadow-lg transition-all">
          <Sparkles className="h-5 w-5 text-purple-500 animate-pulse" />
          <span className="text-gray-700 font-medium">Transforming ideas into digital reality.</span>
        </div>
        <h1 className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 mb-6 animate-fade-in">
          Hi, I'm Shravani
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-8 animate-fade-in-delay">
          AI/ML and Software Development Enthusiast | Final Year IT Student at SGGSIE&T
        </p>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          Passionate about leveraging AI/ML for real-world applications. Currently focused on financial analytics and intelligent systems.</p>
        <div className="flex justify-center gap-4">
          <a 
            href="#projects" 
            onClick={scrollToProjects}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            View Projects
          </a>
          <a 
            href="#contact" 
            className="px-8 py-4 bg-white text-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
          >
            Get in Touch
          </a>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-gray-400" />
        </div>
      </div>
    </section>
  );
}