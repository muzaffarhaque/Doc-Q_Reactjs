import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosClose } from "react-icons/io";
import { useState } from 'react';
import './navbar.css'




const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    document.querySelector('nav').classList.add('active')
    if (menuOpen == true) {
      document.querySelector('nav').classList.remove('active')
    }
    setMenuOpen(!menuOpen)
  }

  return (
    <>
      <header className='w-full flex items-center justify-between px-6 py-2 relative text-[#BBBBBB]'>
        <div className="logo w-32 h-12 max-[991px]:w-24">
          <img src="src\assets\images\doctor_imgs\logo.png" alt="logo" className='w-full h-full object-contain object-center'/>
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
          <input type="text"  className='px-4 py-1 w-96 text-lg outline-none border border-gray-700 rounded-full' placeholder='Search..'/>
        <div className={`hidden text-2xl border border-zinc-600 p-2 max-[991px]:block max-[991px]:text-lg`} onClick={handleMenu}>{menuOpen ? <IoIosClose /> : <RxHamburgerMenu />}</div>
        </div>
      </header>
    </>
  )
}

export default Navbar
