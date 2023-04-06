import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Icon } from '@iconify/react';

import TechStackInd from '../components/TechStackInd'
import Button from '../components/Button'

import { Project } from '../types'

type PortfolioItemProps = Project 


const PortfolioItem = ({title, subtitle, briefDescription, imgUrl, link, id}: PortfolioItemProps) => {
  
  const navigate = useNavigate() 
  return (
    <div className='flex flex-col sm:flex-row mt-14 sm:mt-0 outline outline-lime-200'>
      <div className='basis-1/2'>
           <h3 className='font-Montserrat text-lg md:text-xl mb-2 md:mb-3 font-semibold dark:text-gray100'>{title}</h3>
           <h4 className='font-Montserrat text-xs md:text-md font-semibold dark:text-gray100'>{subtitle}</h4>
           <p className='font-Lato dark:text-gray100 py-4 max-w-[55ch] '>{briefDescription}</p>
           <TechStackInd />
           <span className='w-[10px] my-2 block'></span>
           <Button onClick={() => navigate(`/projects/${id}`)} secondary rounded>
           <Icon icon="ic:round-read-more" color="#2e4e5b"className='w-6 h-6 mr-1' />
            Learn More
            </Button>
    
      </div>
      <div className='basis-1/2'>
      <img
       src={imgUrl}
       alt={title}
       className="w-full h-full object-cover cursor-pointer"
       />
       </div>
     {/* <a 
         href={link}
         target="_blank"
         rel="noopener noreferrer"
         className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden"
      >
    </a> */}
    </div>
  )
}

export default PortfolioItem