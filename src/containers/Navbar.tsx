import React, { useEffect, useState } from 'react'
import { NavLink, NavLinkProps } from 'react-router-dom'
import { Icon } from '@iconify/react';

import { navLinks } from '../data/navLinks';

type CustomLinkProps = NavLinkProps & {
    activeClass: string;
    className: string;
  };

const Navbar = () => {

  const [isMobile, setIsMobile] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const trackDesktop = () => {
    const innerWith = window.innerWidth
    if (innerWith < 638){
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }

  useEffect(() => {
    trackDesktop();
    window.addEventListener("resize", trackDesktop);
    return () => window.removeEventListener("resize", trackDesktop);
  }, []);

  useEffect(() => {
    const bodyEl = document.querySelector('body');
    if (isOpen && bodyEl) {
      bodyEl.style.overflowY = 'hidden';
    } else if (!isOpen && bodyEl){
      bodyEl.style.overflowY ='auto';
    }
  }, [isOpen]);

  console.log(isMobile)

  return (
    <div>
    <div className='hidden sm:flex items-center justify-between py-12 max-w-5xl'>
      {
        navLinks.map(navLink => (
          <CustomLink
          key={navLink.name}
           to={navLink.to}
           end={navLink.to === '/' ? true : false}
           activeClass="text-pumpkin"
           className="uppercase font-Lato text-base"
           >
            {navLink.name}
       </CustomLink>
        ))
      }
    </div>
    {
      isOpen ? (
        <Icon icon="material-symbols:close-rounded" className='block sm:hidden w-10 h-10 absolute top-0 left-0 cursor-pointer z-20' onClick={toggleMenu} />
        
        ): (
          <Icon icon="mi:menu" className='block sm:hidden w-10 h-10 absolute top-0 left-0 cursor-pointer z-20' onClick={toggleMenu} />
      )
    }
    { isOpen ? (
      <div 
    className='bg-[#F3F5F6] dark:bg-[#1a2023] block fixed top-0 bottom-0 left-0 right-1/2 sm:hidden z-10'
    >
    {

        navLinks.map(navLink => (
          <CustomLink
          key={navLink.name}
           to={navLink.to}
           end={navLink.to === '/' ? true : false}
           activeClass="text-pumpkin"
           className="uppercase font-Lato text-base block mt-10 font-bold px-2"
           >
            {navLink.name}
       </CustomLink>
        )) 
      }
    </div>) : <></>
}
    </div>
  )
}

const CustomLink = ({ to, activeClass, className, children }: CustomLinkProps) => {
    return (
      <NavLink
      to={to}
        className={({ isActive }) =>
          isActive ? `${activeClass} ${className}` : className
        }
      >
      {children}
      </NavLink>
    );
  };

export default Navbar;
