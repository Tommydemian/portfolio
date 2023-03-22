import React from 'react'
import portfolio from '../data/portfolio'
import PortfolioItem from './PortfolioItem'

const Portfolio = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center items-center'>
      <div className='grid grid-cols-1 gap-4'>
        {
            portfolio.map(project => (
                <PortfolioItem 
                key={project.id}
                id={project.id}
                imgUrl={project.imgUrl}
                title={project.title}
                link={project.link}
                stack={project.stack}
                />
            ))
        }
      </div>
    </div>
  )
}

export default Portfolio