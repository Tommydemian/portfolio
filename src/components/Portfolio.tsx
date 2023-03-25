import React from 'react'
import portfolio from '../data/portfolio'
import PortfolioItem from './PortfolioItem'
import PortfolioItemDesc from './PortfolioItemDesc'

import projects from '../data/projects'

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
        {
          projects.map(project => (
            <PortfolioItemDesc project={project} />
          ))
        }
      </div>
    </div>
  )
}

export default Portfolio