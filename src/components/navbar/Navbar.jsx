import React, { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosClose } from "react-icons/io";
import './navbar.css';
import FindADoctor from '../find_a_doctor/FindADoctor';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const handleMenu = () => {
    document.querySelector('nav').classList.add('active')
    if (menuOpen) {
      document.querySelector('nav').classList.remove('active')
    }
    setMenuOpen(!menuOpen);
  }
  return (
    <>
      <header id='header' className='w-full flex items-center justify-between px-6 py-2 relative text-[#BBBBBB]'>
        <div id='logo' className="logo w-40 h-20">
          <img src="src/assets/images/doctor_imgs/logo.png" alt="logo" className='w-full h-full object-contain object-center'/>
        </div>
        <nav>
          <ul className='wii flex gap-6 text-lg max-[991px]:flex-col max-[640px]:gap-3 max-[991px]:items-center '>
            <li><a href="#">Home</a></li>
            <li><a href="#">Our Services</a></li>
            <li className='clr-blue'><a href="#">Find Doctors</a></li>
            <li><a href="#">Login/Register</a></li>
          </ul>
        </nav>
        <div className="search flex gap-4">
          <input id='search' value={searchTerm} onChange={(e)=>{setSearchTerm(e.target.value)}} type="text" className='px-4 py-1 w-96 text-lg outline-none border border-gray-700 rounded-full' placeholder='Search..'/>
          <div className={`hidden text-2xl border border-zinc-600 p-2 max-[991px]:block max-[991px]:text-lg`} onClick={handleMenu}>{menuOpen ? <IoIosClose /> : <RxHamburgerMenu />}</div>
        </div>
      </header>
      <FindADoctor searchTerm={searchTerm} />
    </>
  );
}

export default Navbar;
