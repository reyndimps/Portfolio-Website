import React from 'react';
import Marquee from "react-fast-marquee";

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import laravel from '../assets/laravel-logo.png';
import Flutter from '../assets/flutter-logo.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mysql from '../assets/mysql-logo.png';
import ASPNET from '../assets/asp.net-logo.png';
import SSQL from '../assets/ssql.png';
import NODEJS from '../assets/nodejs.png';
import Python from '../assets/Python.png';
import Java from '../assets/Java.png';

const skills = [
    { name: 'HTML', icon: HTML },
    { name: 'CSS', icon: CSS },
    { name: 'JAVASCRIPT', icon: JavaScript },
    { name: 'REACT', icon: ReactImg },
    { name: 'TAILWIND', icon: Tailwind },
    { name: 'MYSQL', icon: Mysql },
    { name: 'LARAVEL', icon: laravel },
    { name: 'ASP.NET', icon: ASPNET },
    { name: 'FLUTTER', icon: Flutter },
    { name: 'GITHUB', icon: GitHub },
    { name: 'SQL SERVER', icon: SSQL },
    { name: 'NODE.JS', icon: NODEJS },
    { name: 'PYTHON', icon: Python },
    { name: 'JAVA', icon: Java },
];  

const SkillCard = ({ icon, name }) => (
    <div className='flex flex-col items-center justify-center w-40 h-40 m-4 bg-[#1a2238] rounded-2xl border border-cyan-500/20 shadow-lg shadow-black/50 transform transition-all duration-300 hover:scale-110 hover:border-cyan-400 hover:shadow-cyan-500/20'>
        <img className='w-20 h-20 object-contain' src={icon} alt={`${name} icon`} />
        <p className='mt-4 text-lg font-semibold text-gray-300'>{name}</p>
    </div>
);

const Skills = () => {
  const firstRow = [...skills.slice(0, skills.length / 2), ...skills.slice(0, skills.length / 2)];
  const secondRow = [...skills.slice(skills.length / 2), ...skills.slice(skills.length / 2)];

  return (
    <div name='skills' className='w-full min-h-screen bg-[#0B1120] text-gray-300 relative overflow-hidden py-20'>
    {/* Stars background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(80)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              width: `${Math.random() * 2.5 + 1}px`,
              height: `${Math.random() * 2.5 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.3,
              animationDuration: `${Math.random() * 3 + 2}s`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Container */}
      <div className='max-w-7xl mx-auto p-4 flex flex-col justify-center w-full h-full mt-7'>
          <div className='text-center'>
              <p className='text-4xl font-bold inline border-b-4 border-cyan-500 '>Skills</p>
              <p className='py-4 text-[#8892b0] max-w-3xl mx-auto'>
                My skill set covers both front-end and back-end development, allowing me to build complete, 
                responsive, and user-friendly applications. 
              </p>
          </div>

          <div className='w-full flex flex-col items-center justify-center mt-8'>
              <Marquee direction="left" speed={50} gradient={false} pauseOnHover={true}>
                  {firstRow.map(skill => <SkillCard key={skill.name} {...skill} />)}
              </Marquee>
              <Marquee direction="right" speed={50} gradient={false} pauseOnHover={true}>
                  {secondRow.map(skill => <SkillCard key={skill.name} {...skill} />)}
              </Marquee>
          </div>
      </div>
    </div>
  );
};

export default Skills;
