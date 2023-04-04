import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import icons from '../data/techStackIcons';
import Tooltip from '../components/Tooltip';
import { IconDescription } from '../types/index'

type VisibleState = Record<string, boolean>;

const TechStack = () => {

  const [visibleState, setVisibleState] = useState<VisibleState>(
    icons.reduce((acc, { name }) => ({ ...acc, [name]: false }), {})
  );

  // Función para actualizar el estado de un tooltip
  const toggleTooltip = (name: string) => {
    setVisibleState((prevState) => ({ ...prevState, [name]: !prevState[name] }));
  };

  return (
    <div
      className='my-10 flex items-center justify-center mx-auto gap-x-5 py-4 dark:bg-charcoal bg-lightblue100 px-4'>
      {
        icons.map((icon: IconDescription) => (
          <div key={icon.name}>
            <Icon 
              onMouseEnter={() => toggleTooltip(icon.name)}
              onMouseLeave={() => toggleTooltip(icon.name)}
             icon={icon.icon}
             className="w-10 h-10 lg:w-14 lg:h-14 cursor-pointer"
            color={`#1b1917`} />
            <Tooltip position='bottom' content={icon.name} visible={visibleState[icon.name]} />
          </div>
        ))

      }
    </div>
  );
};

export default TechStack;
// xl:bg-gradient-to-r from-stone-900 via-stone-900-3 via-charcoal via-stone-900-97 to-stone-900