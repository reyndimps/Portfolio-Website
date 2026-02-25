import React, { useState } from 'react';
import About1  from '../assets/about-profile.jpg';
import About2  from '../assets/about-profile2.jpg';
import About3  from '../assets/about-profile3.jpg';
import useScrollAnimation from '../hooks/useScrollAnimation';

const About = () => {
  const [imagesSeparated, setImagesSeparated] = useState(false);
  const imgAnim = useScrollAnimation({ threshold: 0.15 });
  const textAnim = useScrollAnimation({ threshold: 0.15 });

  const toggleImageView = () => {
    setImagesSeparated(!imagesSeparated);
  };
  
  // CSS animation styles
  const fadeInStyle = {
    animationName: 'fadeIn',
    animationDuration: '0.8s',
    animationTimingFunction: 'ease-out',
    animationFillMode: 'forwards'
  };

  const fadeInKeyframes = `
    @keyframes fadeIn {
      0% {
        opacity: 0;
        transform: translateY(20px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;
  return (
    <div name='about' className='w-full min-h-screen bg-[#0B1120] text-gray-300 relative overflow-hidden py-20'>
      <style>{fadeInKeyframes}</style>
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

        <div className='flex flex-col justify-center items-center w-full h-full'>
          <div className='max-w-7xl w-full mx-auto px-4'>
            <div className='grid md:grid-cols-2 gap-16'>

              {/* Image column (order-1 on mobile) */}
              <div
                ref={imgAnim.ref}
                className={`flex items-center justify-center min-h-[600px] order-2 md:order-1 scroll-hidden scroll-left ${imgAnim.isVisible ? 'scroll-visible' : ''}`}
              >
                <div className="relative w-full max-w-2xl mx-auto">
                    <div 
                      key="collage" 
                      className="relative w-80 h-80 mx-auto opacity-0" 
                      style={fadeInStyle}
                    >
                      <div className='absolute -top-24 -left-24 w-52 h-52 sm:w-60 sm:h-60 bg-[#1a2238] border-2 border-cyan-500/50 rounded-2xl shadow-xl transform -rotate-12 transition-all duration-500 ease-out hover:rotate-0 hover:scale-105 hover:z-20 cursor-pointer group' onClick={toggleImageView}>
                        <img src={About2} alt="Reynaldo Domingo" className="w-full h-full object-cover rounded-2xl"/>
                      </div>
                      <div className='absolute -bottom-24 -right-24 w-52 h-52 sm:w-60 sm:h-60 bg-[#1a2238] border-2 border-cyan-500/50 rounded-2xl shadow-xl transform rotate-12 transition-all duration-500 ease-out hover:rotate-0 hover:scale-105 hover:z-20 cursor-pointer group' onClick={toggleImageView}>
                        <img src={About3} alt="Reynaldo Domingo" className="w-full h-full object-cover rounded-2xl"/>
                      </div>
                      <div className='absolute top-1/2 left-1/2 w-64 h-64 transform -translate-x-1/2 -translate-y-1/2 bg-[#1a2238] border-2 border-cyan-500 rounded-2xl shadow-2xl shadow-cyan-500/20 z-10 transition-all duration-500 ease-out hover:scale-110 cursor-pointer group' onClick={toggleImageView}>
                        <img src={About1} alt="Reynaldo Domingo" className="w-full h-full object-cover rounded-2xl"/>
                        <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-2xl flex items-end justify-center pb-6'>
                        </div>
                      </div>
                    </div>
                </div>
              </div>

              {/* Text column (order-2 on mobile) */}
              <div
                ref={textAnim.ref}
                className={`flex items-center justify-center min-h-[600px] order-1 md:order-2 scroll-hidden scroll-right scroll-delay-2 ${textAnim.isVisible ? 'scroll-visible' : ''}`}
              >
                <div className='flex flex-col justify-center w-full'>

                  <div className='mb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-cyan-500'>
                      About
                    </p>
                  </div>

                  <div className='text-4xl font-bold mb-6'>
                    <p className='text-cyan-500'>Hello there, I'm Rey,</p>
                    <p className='text-white'>It's a Pleasure to meet you.</p>
                    <p className='text-[#8892b0]'>Please take a look around.</p>
                  </div>

                  <div className='text-md'>
                    <p className='text-[#8892b0] leading-relaxed'>I am a dedicated and passionate web developer with a strong interest in building modern, responsive, and user-friendly web applications. As an IT student, I have developed both front-end and back-end skills through academic projects and personal practice. I enjoy turning ideas into real, functional systems that solve problems and improve user experience.</p>  
                    <br />
                    <p className='text-[#8892b0] leading-relaxed'>My goal is to create software that is not only functional but also provides a great user experience. I am always eager to learn new technologies and improve my skills to keep up with the latest industry trends. I am a problem-solver, a team player, and I am excited to contribute to challenging projects.</p>
                  </div>
                  
                </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default About;
