import React from 'react'
import { FiArrowUpRight, FiMail, FiPhone, FiMapPin } from 'react-icons/fi'

const Contact = () => {
  return (
    <div name='contact' className='w-full min-h-screen bg-[#0B1120] flex justify-center items-center px-4 py-24 md:py-32 relative overflow-hidden'>
    
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

        <div className='flex flex-col lg:flex-row max-w-[1240px] w-full gap-12 lg:gap-20 items-center lg:items-start'>
            {/* Left side */}
            <div className='lg:w-1/2 w-full'>
                <div className='pb-12 space-y-4'>
                     <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500'>
                      Contact
                    </p>
                    <h2 className='text-6xl md:text-7xl lg:text-8xl font-bold text-cyan-500 mb-6 tracking-tight'>Get in <span className='text-gray-500'>touch</span></h2>
                    <p className='text-gray-400 text-lg max-w-[480px] leading-relaxed'>
                        Have questions or inquiries? I'm here to help! Whether you want to discuss a project, collaborate, or just say hello, feel free to reach out.
                    </p>
                </div>
                
                <div className='space-y-5 max-w-[600px]'>
                    <a href="mailto:reyndoming@gmail.com" className='bg-[#11161D]/50 backdrop-blur-sm border border-gray-800 p-5 rounded-2xl flex items-center justify-between group cursor-pointer hover:bg-[#161B22] hover:border-gray-700 transition-all duration-300 shadow-lg shadow-black/20'>
                        <div className='flex items-center gap-4'>
                            <div className='w-12 h-12 bg-[#161B22] border border-gray-700 flex items-center justify-center rounded-xl group-hover:bg-[#1C2128] group-hover:border-gray-600 transition-all'>
                                <FiMail className='text-gray-400 text-xl group-hover:text-cyan-400 transition-colors' />
                            </div>
                            <div>
                                <p className='text-gray-500 text-xs uppercase tracking-wider font-semibold'>Email us</p>
                                <p className='text-white font-medium'>reyndoming@gmail.com</p>
                            </div>
                        </div>
                        <FiArrowUpRight className='text-gray-600 text-xl group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300' />
                    </a>

                    <a href="tel:09104673672" className='bg-[#11161D]/50 backdrop-blur-sm border border-gray-800 p-5 rounded-2xl flex items-center justify-between group cursor-pointer hover:bg-[#161B22] hover:border-gray-700 transition-all duration-300 shadow-lg shadow-black/20'>
                        <div className='flex items-center gap-4'>
                            <div className='w-12 h-12 bg-[#161B22] border border-gray-700 flex items-center justify-center rounded-xl group-hover:bg-[#1C2128] group-hover:border-gray-600 transition-all'>
                                <FiPhone className='text-gray-400 text-xl group-hover:text-cyan-400 transition-colors' />
                            </div>
                            <div>
                                <p className='text-gray-500 text-xs uppercase tracking-wider font-semibold'>Call me</p>
                                <p className='text-white font-medium'>63+ 9104673672</p>
                            </div>
                        </div>
                        <FiArrowUpRight className='text-gray-600 text-xl group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300' />
                    </a>

                    <a href="https://www.google.com/maps/search/Phase+10+Block+2+Lot+34,+Coriander+Street,+Deca+Homes+Rd,+Mintal,+Davao+City,+Davao+del+Sur/@7.1135017,125.5046076,18.75z?entry=ttu&g_ep=EgoyMDI2MDIyMy4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noreferrer" className='bg-[#11161D]/50 backdrop-blur-sm border border-gray-800 p-5 rounded-2xl flex items-center justify-between group cursor-pointer hover:bg-[#161B22] hover:border-gray-700 transition-all duration-300 shadow-lg shadow-black/20'>
                        <div className='flex items-center gap-4'>
                            <div className='w-12 h-12 bg-[#161B22] border border-gray-700 flex items-center justify-center rounded-xl group-hover:bg-[#1C2128] group-hover:border-gray-600 transition-all'>
                                <FiMapPin className='text-gray-400 text-xl group-hover:text-cyan-400 transition-colors' />
                            </div>
                            <div>
                                <p className='text-gray-500 text-xs uppercase tracking-wider font-semibold'>My location</p>
                                <p className='text-white font-medium'>Deca Homes, Davao City</p>
                            </div>
                        </div>
                        <FiArrowUpRight className='text-gray-600 text-xl group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300' />
                    </a>
                </div>
            </div>

            {/* Right side - Form */}
            <div className='lg:w-1/2 w-full p-8 md:p-10 bg-[#11161D]/80 backdrop-blur-md border border-gray-800 rounded-[2.5rem] shadow-2xl shadow-black/40'>
                <form action="https://formsubmit.co/reyndoming@gmail.com" method="POST" className='flex flex-col space-y-6'>
                    {/* FormSubmit options */}
                    <input type="hidden" name="_subject" value="New Contact Form Submission!" />
                    <input type="hidden" name="_template" value="table" />
                    <input type="hidden" name="_captcha" value="false" />

                    <div className='flex flex-col'>
                        <label className='text-gray-400 text-xs font-bold uppercase tracking-[0.2em] mb-3 ml-1'>Name</label>
                        <input className='bg-transparent border border-gray-800/80 p-5 rounded-2xl text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all duration-300 placeholder:text-gray-700' type="text" name='name' placeholder='Your name' required />
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-gray-400 text-xs font-bold uppercase tracking-[0.2em] mb-3 ml-1'>Email</label>
                        <input className='bg-transparent border border-gray-800/80 p-5 rounded-2xl text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all duration-300 placeholder:text-gray-700' type="email" name='email' placeholder='email@example.com' required />
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-gray-400 text-xs font-bold uppercase tracking-[0.2em] mb-3 ml-1'>Message</label>
                        <textarea className='bg-transparent border border-gray-800/80 p-5 rounded-2xl text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all duration-300 resize-none placeholder:text-gray-700' name="message" rows="5" placeholder='What do you have in mind?' required></textarea>
                    </div>
                    <button type="submit" className='w-full bg-white text-black font-extrabold py-5 rounded-2xl hover:bg-cyan-50 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 ease-out active:scale-[0.98] shadow-lg shadow-white/5'>Submit Message</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact
