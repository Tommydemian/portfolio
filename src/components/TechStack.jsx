import React from 'react';
import { Icon } from '@iconify/react';
import {frontEndIcons, backendIcons, databaseIcons, testingIcons, versioncontrolIcons} from '../data/techStackIcons'; 
import TechStackIcon from './TechStackIcon';

const TechStack = () => {
  return (
    <div className='my-20 flex flex-col gap-10 px-4 mx-auto'>
      <TechStackIcon title='Frontend:'>
        {
        frontEndIcons.map(icon => (
          <Icon key={icon} icon={icon} className="w-10 h-10 md:w-20 md:h-20" />
        ))
        }    
        </TechStackIcon>
        
      <div className='grid grid-cols-2 md:grid-cols-4 gap-6'> 
        <TechStackIcon title='Backend:'>
        {
        backendIcons.map(icon => (
          <Icon key={icon} icon={icon} className="w-10 h-10 md:w-20 md:h-20" />
        ))
        }    
        </TechStackIcon>
        <TechStackIcon title='Databases:'>
        {
        databaseIcons.map(icon => (
          <Icon key={icon} icon={icon} className="w-10 h-10 md:w-20 md:h-20" />
        ))
        }    
        </TechStackIcon>
        <TechStackIcon title='Testing:'>
        {
        testingIcons.map(icon => (
          <Icon key={icon} icon={icon} className="w-10 h-10 md:w-20 md:h-20" />
        ))
        }    
        </TechStackIcon>
        <TechStackIcon title='Version Control:'>
        {
        backendIcons.map(icon => (
          <Icon key={icon} icon={icon} className="w-10 h-10 md:w-20 md:h-20" />
        ))
        }    
        </TechStackIcon>
   </div>  
   </div>  
  );
};

export default TechStack;
