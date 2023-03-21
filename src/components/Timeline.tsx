import React from 'react'
import timeline from '../data/timeline'
import TimelineItem from './TimelineItem' 
import Title from './Title'

const Timeline = () => {
  return (
    <div className='grid sm:flex sm:flex-row justify-center items-center my-20 mx-auto'>
      <div className='w-full md:w-7/12  mx-auto px-2'>
        <Title>Timeline</Title>
      {
        timeline.map(item => (
          <TimelineItem
          year={item.year}
          details={item.details}
          duration={item.duration}
          title={item.title}
          id={item.id}
          key={item.id}    
          />
        ))
      }
      </div>
    </div>
  )
}

export default Timeline