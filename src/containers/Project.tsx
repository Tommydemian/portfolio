import React from 'react'
import { useParams } from 'react-router-dom'
import Carousel from './Carousel'

import { redPadelSlides } from '../data/slides'

import { redpadelapp } from '../data/codeHighlights'

const Project = () => {

    const { id } = useParams()
    
    
  return (
    <div>
      <Carousel slides={redPadelSlides} />
    <div>Project</div>
    <p>{redpadelapp.description}</p>
    <div>
    <img src={redpadelapp.image} alt="code image" className='w-3/5 mx-auto' />
    </div>
    </div>
  )
}

export default Project