import React from 'react';
import { data } from "../data/data.js";
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Work = () => {
    const project = data;
  
  return (
    <div name='work' className='w-full text-gray-300 bg-[#0B1120] py-20 relative overflow-hidden'>
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

      <div className='max-w-7xl mx-auto p-4 flex flex-col justify-center w-full h-full relative z-10'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500'>
            Work
          </p>
          <p className='py-6 text-[#8892b0] max-w-3xl'>
            Here are some of the projects I have worked on, showcasing my skills in web development, problem-solving, and system design. Each project reflects my ability to create functional, responsive, and visually appealing applications while applying best practices in coding and user experience.
          </p>
        </div>

        {/* container for projects */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {project.map((item, index) => (
            <div
              key={index}
              className="group rounded-xl overflow-hidden bg-[#112240] shadow-lg shadow-[#040c16] hover:scale-105 hover:shadow-cyan-500/20 hover:shadow-2xl transition-all duration-500 ease-out cursor-pointer"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <div 
                  style={{ backgroundImage: `url(${item.image})` }}
                  className="h-48 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#112240] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center gap-4">
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-cyan-500 p-3 rounded-full text-white hover:bg-cyan-400 transition-all duration-200 transform translate-y-4 group-hover:translate-y-0"
                  >
                    <FaGithub size={22} />
                  </a>
                </div>
              </div>

              {/* Description */}
              <div className="p-4">
                <h3 className="text-base font-semibold text-gray-200 group-hover:text-cyan-400 transition-colors duration-300 mb-2 leading-tight">
                  {item.name}
                </h3>
                <p className="text-sm text-[#8892b0] leading-relaxed">
                  {item.description}
                </p>
                <div className="mt-3 pt-3 border-t border-gray-700/50">
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-white hover:text-cyan-400 transition-colors duration-200"
                  >
                    <FaGithub size={14} />
                    View on GitHub
                    <FaExternalLinkAlt size={10} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );  
};

export default Work;
