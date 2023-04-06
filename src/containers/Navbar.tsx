import React, { useEffect, useState, useContext } from 'react'
import { NavLink, NavLinkProps, useLocation } from 'react-router-dom'
import { Icon } from '@iconify/react';

// hooks: 
import { useToggle } from '../hooks/useToggle';
// data:
import { navLinks } from '../data/navLinks';
// types:
type CustomLinkProps = NavLinkProps & {
    activeClass: string;
    className: string;
  };
// context: 
import { ThemeContext } from '../App';

const Navbar = () => {

  const {theme, setTheme} = useContext(ThemeContext)
  const {state: isOpen, toggle: toggleMenu} = useToggle()
  const location = useLocation()

  useEffect(() => {
    if (isOpen) {
      toggleMenu();
    }
  }, [location]);

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme])

  useEffect(() => {
    const bodyEl = document.querySelector('body');
    if (isOpen && bodyEl) {
      bodyEl.style.overflowY = 'hidden';
    } else if (!isOpen && bodyEl){
      bodyEl.style.overflowY ='auto';
    }
  }, [isOpen]);

  return (
    <div>
    <div className='hidden sm:flex items-center justify-between py-12'>
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
      {
        theme === 'dark' ? (
          <Icon 
          icon="ph:sun-fill"
          color="#1b1917"
          className='w-10 h-10 p-2 cursor-pointer bg-pumpkin rounded-[5px]'
          onClick={() => handleThemeSwitch()}
          />
        ) : (
          <Icon 
          icon="ph:moon-fill"
          color={ theme === 'dark' ? `#1b1917`: '#fff' }
          className='w-10 h-10 p-2 cursor-pointer bg-pumpkin rounded-[5px]'
          onClick={() => handleThemeSwitch()} />
        )
      }
      
      {/* MOBILE MENU */}
    </div>
    {
      isOpen ? (
        <Icon
         icon="material-symbols:close-rounded"
         className='block sm:hidden w-10 h-10 absolute top-2 left-2 cursor-pointer z-20'
         onClick={toggleMenu}
          />
        ): (
          <Icon
           icon="mi:menu"
           className='block sm:hidden w-10 h-10 absolute top-2 left-2 cursor-pointer z-20'
           onClick={toggleMenu}
            />
      )
    }
    { isOpen ? (
      <div 
    className='bg-[#E3E3E3] dark:bg-[#424242] block fixed top-0 bottom-0 left-0 right-1/2 sm:hidden z-10 shadow-md'
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
{
        theme === 'dark' ? (
          <Icon 
          icon="ph:sun-fill"
          color="#1b1917"
          className='w-10 h-10 p-2 cursor-pointer bg-pumpkin rounded-[5px] absolute right-2 top-2 sm:hidden'
          onClick={() => handleThemeSwitch()}
          />
        ) : (
          <Icon 
          icon="ph:moon-fill"
          color={ theme === 'dark' ? `#1b1917`: '#fff' }
          className='w-10 h-10 p-2 cursor-pointer bg-pumpkin rounded-[5px] absolute right-2 top-2 sm:hidden'
          onClick={() => handleThemeSwitch()} />
        )
      }
    </div>
  )
}

// CUSTOM LINK
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
