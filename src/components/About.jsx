const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0B1120] text-gray-300 relative overflow-hidden'>
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
          <div className='max-w-[1200px] w-full grid grid-cols-2 gap-8'>
            <div className='sm:text-right pb-8'>
              <p className='text-4xl font-bold inline border-b-4 border-cyan-500'>
                About
              </p>
            </div>
          <div>
        </div>
      </div>
          
          <div className='max-w-[1200px] w-full grid sm:grid-cols-2 gap-8'>

            <div className='sm:text-right text-4xl font-bold'>
              <p className='text-cyan-500'>Hello there, I'm Rey,</p>
              <p className='text-white'>It's a Pleasure to meet you.</p>
              <p className='text-[#8892b0]'>Please take a look around.</p>
            </div>

            <div className='text-lg'>
              <p className='text-[#8892b0]'>I am a dedicated and passionate web developer with a strong interest in building modern, responsive, and user-friendly web applications. As an IT student, I have developed both front-end and back-end skills through academic projects and personal practice. I enjoy turning ideas into real, functional systems that solve problems and improve user experience.</p>  
            </div>

          </div>

      </div>
    </div>
  );
};

export default About;
