import React from 'react'
import { Project } from '../types'

type PortfolioItemProps = Project 

const PortfolioItem = ({title, imgUrl, stack, link}: PortfolioItemProps) => {
  return (
     <a 
         href={link}
         target="_blank"
         rel="noopener noreferrer"
         className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden"
      >
        <img
         src={imgUrl}
         alt={title}
         className="w-full h-36 md:h-48 object-cover cursor-pointer"
         />
         <div className='w-full p-4'>
           <h3 className='text-lg md:text-xl mb-2 md:mb-3 font-semibold dark:text-white '>{title}</h3>
           <p className='flex flex-wrap  gap-2 flex-row items-center justify-start dark:text-white text-xs md:text-sm'>
            {
                stack.map(item => (
                    <span className='inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md'>
                        {item}
                    </span>
                ))
            }
           </p>
         </div>
    </a>
  )
}

export default PortfolioItem