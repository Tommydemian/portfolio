import React, { useState } from 'react'
import jsHardParts from '../assets/jshardOne.png'
import jsHardParts2 from '../assets/hardPartsnew.png'
import reactOne from '../assets/reactOne.png'

const Carousel = () => {
    const slides = [
        {
            url: jsHardParts
        },
        {
            url: jsHardParts2
        },
        {
            url: reactOne
        }
    ]
  return (
    <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 relative'>
        <div style={{backgroundImage: `url(${slides[1].url})`}} className='w-full h-full rounded-2xl bg-center bg-cover duration-500  '>

        </div>
        Carousel
    </div>
  )
}

export default Carousel