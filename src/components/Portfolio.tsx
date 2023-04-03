import React from 'react'
import portfolio from '../data/portfolio'
import PortfolioItem from '../containers/PortfolioItem'

const Portfolio = () => {
  return (
    <div>
    <div className='flex flex-col justify-center items-center gap-y-10'>
        {
            portfolio.map(project => (
                <PortfolioItem 
                key={project.id}
                id={project.id}
                imgUrl={project.imgUrl}
                title={project.title}
                subtitle={project.subtitle}
                briefDescription={project.briefDescription}
                link={project.link}
                stackIcons={project.stackIcons}
                />
            ))
        }
    </div>
    
    </div>
  )
}

export default Portfolio