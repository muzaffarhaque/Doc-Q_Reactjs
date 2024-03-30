import React, { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosClose } from "react-icons/io";
import './navbar.css';
import FindADoctor from '../find_a_doctor/FindADoctor';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const handleMenu = () => {
    document.querySelector('nav').classList.add('active')
    if (menuOpen) {
      document.querySelector('nav').classList.remove('active')
    }
    setMenuOpen(!menuOpen);
  }
  function serchChangeHandler(e){
    setSearchTerm(e.target.value)
    if(e.target.value){
      navigate({search:`search=${e.target.value}`});
    }else{
      navigate({search:``});

    }
  }
  return (
    <>
      <header id='header' className='w-full flex items-center justify-between px-6 py-2 relative text-[#BBBBBB]'>
        <div id='logo' className="logo w-40 h-20">
          <img src="src/assets/images/doctor_imgs/logo.png" alt="logo" className='w-full h-full object-contain object-center'/>
        </div>
        <nav>
          <ul className='wii flex gap-6 text-lg max-[991px]:flex-col max-[640px]:gap-3 max-[991px]:items-center '>
            <li><Link to="./home">Home</Link></li>
            <li><Link to="/over-services">Our Services</Link></li>
            <li className='clr-blue'><Link to="/find-doctor">Find Doctors</Link></li>
            <li><Link to="/login">Login/Register</Link></li>
          </ul>
        </nav>
        <div className="search flex gap-4">
          <input id='search' value={searchTerm} onChange={serchChangeHandler} type="text" className='px-4 py-1 w-96 text-lg outline-none border border-gray-700 rounded-full' placeholder='Search..'/>
          <div className={`hidden text-2xl border border-zinc-600 p-2 max-[991px]:block max-[991px]:text-lg`} onClick={handleMenu}>{menuOpen ? <IoIosClose /> : <RxHamburgerMenu />}</div>
        </div>
      </header>
    
    </>
  );
}

export default Navbar;
