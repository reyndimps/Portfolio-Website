import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/logoa.png';
import { Link } from 'react-scroll';
import Resume from '../assets/certificates/resume.pdf';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0B1120] text-gray-300 z-50'>
      
      <a href='/' className='cursor-pointer'>
        <img src={Logo} alt='Logo' style={{ width: '110px' }}/>
      </a>

      {/* menu */}
      <ul className='hidden md:flex text-lg font-semibold'>
        <li>
          <Link className='inline-block py-1 transition-all duration-300 hover:text-cyan-400 hover:-translate-y-0.5' to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link className='inline-block py-1 transition-all duration-300 hover:text-cyan-400 hover:-translate-y-0.5' to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link className='inline-block py-1 transition-all duration-300 hover:text-cyan-400 hover:-translate-y-0.5' to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link className='inline-block py-1 transition-all duration-300 hover:text-cyan-400 hover:-translate-y-0.5' to='work' smooth={true} duration={500}>
            Works
          </Link>
        </li>
        <li>
          <Link className='inline-block py-1 transition-all duration-300 hover:text-cyan-400 hover:-translate-y-0.5' to='certificates' smooth={true} duration={500}>
            Certificates
          </Link>
        </li>
             <li>
          <Link className='inline-block py-1 transition-all duration-300 hover:text-cyan-400 hover:-translate-y-0.5' to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden px-4 z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-2xl font-serif'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-2xl font-serif'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-2xl font-serif'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-2xl font-serif'>
          {' '}
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Works
          </Link>
        </li>
        <li className='py-6 text-2xl font-serif'>
          {' '}
          <Link onClick={handleClick} to='certificates' smooth={true} duration={500}>
            Certificates
          </Link>
        </li>
           <li className='py-6 text-2xl font-serif'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a target="_blank"
              rel='noreferrer'
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/reynaldo-jr-domingo-20049334a/'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a target="_blank"
              rel='noreferrer'
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/reyndimps'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a 
              className='flex justify-between items-center w-full text-gray-300'
              href='mailto:reyndoming@gmail.com'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a 
              className='flex justify-between items-center w-full text-gray-300'
              href={Resume} 
              download='resume.pdf'
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
