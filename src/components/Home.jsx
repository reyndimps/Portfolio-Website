import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import profile from '../assets/nawngnako.png';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='w-full min-h-screen bg-[#0B1120] relative overflow-hidden flex items-center py-16 md:py-0'>
      
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
      <div className='max-w-7xl mx-auto grid md:grid-cols-2 items-center w-full px-8 pt-24 md:pt-0'>
        {/* Text Content */}
        <div className='flex flex-col justify-center order-2 md:order-1'>
          <p className='text-cyan-500 text-lg'>Hi, my name is</p>
          <h1 className='text-3xl sm:text-5xl font-bold text-white whitespace-nowrap'>
            Reynaldo Jr. Domingo
          </h1>
          <h2 className='text-3xl sm:text-5xl font-bold text-[#8892b0] flex items-center'>
            <span className='whitespace-pre'>I'm a </span>
            <span className='typing'>Web Developer.</span>
          </h2>
          <p className='text-[#8892b0] py-4 text-lg max-w-[600px]'>
                                  I’m a passionate web developer who enjoys turning ideas into functional and visually appealing digital experiences.
          Skilled in both front-end and back-end development, I focus on creating clean, efficient, and user-friendly systems.
          </p>
          <div>
            <Link to='work' smooth={true} duration={500} className='rounded-sm w-[30%] text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-cyan-500 hover:border-cyan-500'>
                View Work
                <span className='group-hover:rotate-90 duration-300'>
                  <HiArrowNarrowRight className='ml-7 ' />
                </span>
              </Link>
          </div>
        </div>

        {/* Image Content */}
        <div className='flex justify-center items-center order-1 md:order-2 mb-8 md:mb-0'>
          <div className='relative w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] '>
            <div className='w-full h-full bg-[#0B1120] rounded-full p-2'>
                <img
                src={profile}
                alt='Profile'
                className='w-full h-full object-cover rounded-full'
                />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
