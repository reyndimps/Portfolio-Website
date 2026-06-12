import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/logoa.png';
import { Link } from 'react-scroll';
import Resume from '../assets/certificates/resume.pdf';

const navLinks = [
  { label: 'Home',         to: 'home' },
  { label: 'About',        to: 'about' },
  { label: 'Experience',   to: 'experience' },
  { label: 'Skills',       to: 'skills' },
  { label: 'Works',        to: 'work' },
  { label: 'Certificates', to: 'certificates' },
];

const socialLinks = [
  {
    label: 'LinkedIn',
    icon: <FaLinkedin size={28} />,
    href: 'https://www.linkedin.com/in/reynaldo-jr-domingo-20049334a/',
  },
  {
    label: 'GitHub',
    icon: <FaGithub size={28} />,
    href: 'https://github.com/reyndimps',
  },
  {
    label: 'Email',
    icon: <HiOutlineMail size={28} />,
    href: 'mailto:reyndoming@gmail.com',
  },
  {
    label: 'Resume',
    icon: <BsFillPersonLinesFill size={28} />,
    href: Resume,
    download: 'Resume.pdf',
  },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav className={`fixed w-full h-[84px] z-50 flex items-center justify-between px-8 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0B1120]/90 backdrop-blur-md border-b border-white/[0.06]'
          : 'bg-transparent'
      }`}>

        {/* Logo */}
        <a href='/' className='shrink-0 opacity-90 hover:opacity-100 transition-opacity'>
          <img src={Logo} alt='Logo' style={{ width: '96px' }} />
        </a>

        {/* Center nav links */}
        <ul className='hidden md:flex items-center gap-0.5 absolute left-1/2 -translate-x-1/2'>
          {navLinks.map(({ label, to }) => (
            <li key={to}>
              <Link
                to={to}
                smooth={true}
                duration={500}
                className='relative px-2 py-2.5 text-[17px] font-medium text-gray-400 hover:text-white cursor-pointer transition-colors duration-200 group block'
              >
                {label}
                <span className='absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-0 bg-cyan-500 group-hover:w-3/4 transition-all duration-300 rounded-full' />
              </Link>
            </li>
          ))}
        </ul>

        {/* Right — Contact CTA */}
        <div className='hidden md:flex items-center gap-3'>
          <Link
            to='contact'
            smooth={true}
            duration={500}
            className='px-6 py-2.5 text-[17px] font-semibold text-cyan-400 border border-cyan-500/40 rounded-lg hover:bg-cyan-500/10 hover:border-cyan-500/70 transition-all duration-200 cursor-pointer'
          >
            Contact
          </Link>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setNav(!nav)}
          className='md:hidden text-gray-300 hover:text-white transition-colors'
          aria-label='Toggle menu'
        >
          {nav ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>
      </nav>

      {/* Mobile overlay */}
      <div className={`fixed inset-0 z-40 bg-[#0B1120]/97 backdrop-blur-lg flex flex-col justify-center items-center gap-8 transition-all duration-300 ${
        nav ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        {[...navLinks, { label: 'Contact', to: 'contact' }].map(({ label, to }) => (
          <Link
            key={to}
            to={to}
            smooth={true}
            duration={500}
            onClick={() => setNav(false)}
            className='text-2xl font-semibold text-gray-300 hover:text-cyan-400 transition-colors duration-200 cursor-pointer'
          >
            {label}
          </Link>
        ))}

        {/* Mobile social icons row */}
        <div className='flex items-center gap-5 mt-4 pt-6 border-t border-white/10'>
          {socialLinks.map(({ label, icon, href, download }) => (
            <a
              key={label}
              href={href}
              download={download}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel='noreferrer'
              aria-label={label}
              className='w-10 h-10 rounded-lg border border-cyan-500/30 bg-cyan-500/5 flex items-center justify-center text-cyan-400 hover:bg-cyan-500/15 hover:border-cyan-500/60 transition-all duration-200'
            >
              {icon}
            </a>
          ))}
        </div>
      </div>

      {/* Side social panel */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0 z-50 gap-1'>
        {socialLinks.map(({ label, icon, href, download }) => (
          <a
            key={label}
            href={href}
            download={download}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel='noreferrer'
            className='group flex items-center w-[70px] hover:w-[175px] h-[70px] overflow-hidden
                       ml-0 rounded-r-xl
                       bg-[#0d1b2e] border border-cyan-500/20
                       hover:bg-[#0d1b2e] hover:border-cyan-500/50
                       transition-all duration-300 ease-in-out gap-3'
            style={{ transitionProperty: 'width, border-color, background-color', paddingLeft: '0' }}
          >
            <span className='text-cyan-400 shrink-0 flex items-center justify-center w-[70px] h-[70px]' style={{ fontSize: '28px' }}>{icon}</span>
            <span className='text-[15px] font-medium text-gray-300 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-100'>
              {label}
            </span>
          </a>
        ))}
      </div>
    </>
  );
};

export default Navbar;