import React, { useState } from 'react'
import { navLinks} from '../constants'
import {logo , close, menu } from '../assets/'

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <img src={logo} alt="hook" 
      className='w-32 h-8'/>

      <ul className='list-none sm:flex hidden  justify-end items-center flex-1 '>
        {navLinks.map((nav,index) => (
          <li 
          key={nav.id}
          className={` font-poppins font-normal cursor-pointer text-[16px]
          ${index === navLinks.length -1 ? 'mr-12' : 'mr-12'} text-white
           hover:text-blue-500 hover:animate-spin`}>
           
          <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
          
        ))}

      </ul>
      <div className='sm:hidden flex flex-1 justify-end items-center '>
        <img src={toggle ? close : menu}
        onClick={() => setToggle((prev)=> !prev)}
        
        />
        <div
        className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-3 my-2 min-w-[140px]
        rounded-xl sidebar`}
        >
        <ul className='list-none flex flex-col justify-end items-center flex-1 '>
        {navLinks.map((nav,index) => (
          <li 
          key={nav.id}
          className={` font-poppins font-normal cursor-pointer text-[16px]
          ${index === navLinks.length -1 ? 'mb-0' : 'mb-5'} text-white
           hover:text-blue-500 hover:animate-spin`}>
           
          <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
          
        ))}

      </ul>
        </div>

      </div>
    </nav>
    
  )
}


export default Navbar
