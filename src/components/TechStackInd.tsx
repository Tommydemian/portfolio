import React from 'react';
import { Icon } from '@iconify/react';

import projects from '../data/portfolio';

const TechStackInd = () => {
  return (
    <div className='flex gap-2 items-center flex-wrap'>
      {projects.map(project => project.stackIcons?.map(icon => (
        <div key={icon.name} className='bg-gray100 rounded-xl flex px-[.3em]'>
          <Icon key={icon.icon} icon={icon.icon} className="w-6 h-7" color="#1b1917" />  
          <p key={icon.name} className='text-[#1b1917] font-Lato uppercase my-auto pl-2'>{icon.name}</p>
          </div>
      )))}
    </div>
  );
};

export default TechStackInd;