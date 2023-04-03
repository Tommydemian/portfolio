import React from 'react';
import { Icon } from '@iconify/react';
import icons from '../data/techStackIcons'; 

const TechStack = () => {
  return (
    <div 
     className='my-10 flex items-center justify-center mx-auto gap-x-5 py-4 bg-charcoal px-4'>
        {
          icons.map(icon => ( 
          <Icon key={icon} icon={icon} className="w-10 h-10 lg:w-14 lg:h-14" color="#1b1917" />
          ))
        }  
   </div> 
  );
};

export default TechStack;
// xl:bg-gradient-to-r from-stone-900 via-stone-900-3 via-charcoal via-stone-900-97 to-stone-900