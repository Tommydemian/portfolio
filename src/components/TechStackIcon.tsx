import React, { ReactNode } from 'react'

type TechStackIconProps = {
  title: string 
  children: ReactNode
}

const TechStackIcon = ({children, title}: TechStackIconProps) => {
  return (
    <div className='grid'>
      <h2 className='text-base md:text-2xl font-bold mb-2 lg:mb-4 mx-auto dark:text-white'>{title}</h2>
      <div className='flex gap-4 flex-wrap mx-auto'>
      { children }
      </div>
      </div>
  )
}

export default TechStackIcon