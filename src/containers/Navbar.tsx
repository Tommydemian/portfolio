import React from 'react'
import { NavLink, NavLinkProps } from 'react-router-dom'

type CustomLinkProps = NavLinkProps & {
    activeClass: string;
    className: string;
  };

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-12 max-w-5xl'>
      <CustomLink
       to="/" 
       end
       activeClass="text-pumpkin"
       className="uppercase font-Lato text-base"
       >
        About me
       </CustomLink>
      <CustomLink 
      to="/projects"
       activeClass="text-pumpkin"
       className="uppercase font-Lato text-base"
        >
            Projects
        </CustomLink>
      <CustomLink 
      to="/learning-journey"
      activeClass="text-pumpkin"
      className="uppercase font-Lato text-base"
      >
        Learning journey
    </CustomLink>
    <CustomLink 
    to="/contact"
     activeClass="text-pumpkin"
     className="uppercase font-Lato text-base"
     >
        Contact
     </CustomLink>
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
