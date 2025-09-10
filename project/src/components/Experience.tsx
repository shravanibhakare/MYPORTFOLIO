import React from 'react';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

const experiences = [
  
  {
    type: "education",
    icon: <GraduationCap className="h-6 w-6 text-indigo-500" />,
    title: "B.Tech in Information Technology",
    organization: "SGGSIE&T",
    period: "2022 - 2026",
    description: [
      "Key coursework: DSA, OOPs, DBMS, BDA, OS, Ethical Hacking, DL",
      "Active member of clubs and communities",
      "Specializing in AI/ML and Data Analytics"
    ]
  },
  {
    type: "certification",
icon: <Award className="h-6 w-6 text-green-500" />,
title: "Professional Certifications",

period: "2022 - Present",
description: [
  <a 
    href="https://www.hackerrank.com/certificates/4728434b411a" 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-blue-600 hover:underline"
  >
    Basics of Problem Solving (HackerRank)
  </a>,
  <a 
    href="https://drive.google.com/file/d/1luP-iLMIS69FtwCUbwoF5Kicozn4IPKs/view?usp=drive_link"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 hover:underline"
  >
    Gen AI Study Jam Workshop - Google developers group
  </a>,
  <a 
    href="https://moonshot.scaler.com/s/sl/qgm5eq8g_0"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 hover:underline"
  >
   Java Course - Mastering the Fundamentals (Scaler)
  </a>,
  
]

  },
  {
    type: "work",
    icon: <Briefcase className="h-6 w-6 text-purple-500" />,
    title: "Member DC of IT Department",
    organization: "Training & Placement Cell, SGGSIE&T",
    period: "Jan 2024 - Jul 2024",
    description: [
      "Contacted HRs and alumni and assisted in organizing workshops and placement-related activities",
      "Explored tools and extensions such as LeadLeaper for professional outreach",      
      "Strengthened teamwork, communication, and coordination skills",

    ]
  },
  {
    type: "work",
    icon: <Briefcase className="h-6 w-6 text-blue-500" />,
    title: "Art and Design",
    organization: "Team Drishti, SGGSIE&T",
    period: "Jan 2023-- Dec 2023",
    description: [
      "Student Joint Cordinator at Art and Design Committee at 'Drishti' college magazine",
      "Enhanced creativity, visual design, and branding skills",
      "Gained hands-on experience with Canva, digital illustration, and layout design"
    ]
  },
  
  
];

export default function Experience() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white" id="experience">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Experience & Education</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          My academic journey, leadership roles, and professional development
        </p>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                {exp.icon}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                  <p className="text-purple-600">{exp.organization}</p>
                </div>
                <span className="ml-auto text-gray-500">{exp.period}</span>
              </div>
              <ul className="space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-500"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}