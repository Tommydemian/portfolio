import React from 'react'
import timeline from '../data/timeline'
import TimelineItem from './TimelineItem' 

import { Experience } from '../types/index'

const Timeline = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center my-20'>
      <div className='w-full md:w-7/12'>
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