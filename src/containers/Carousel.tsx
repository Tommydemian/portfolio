import React, { useState } from 'react'

import { Icon } from '@iconify/react';

import OverlayDescription from '../components/OverlayDescription';

//import slides from '../data/slides'
import { Slide } from '../types/index'

type CarouselProps = {
    slides: Slide[],   
} 

const Carousel = ({slides}: CarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState<number>(1)

    // prev and next slide functions 
    const prevSlide = ()=> {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1)
            console.log(currentIndex)
        } else {
            setCurrentIndex(slides.length - 1)
        }

    }
    const nextSlide = () => {
        if ( currentIndex < slides.length -1){
            setCurrentIndex(currentIndex + 1)
        } else {
            setCurrentIndex(0)
        }
    }

    return (
        <div className='max-w-[1400px] h-[780px] w-full m-auto py-3 relative group'>
            {
                slides.map((slide, slideIndex) => (
                    currentIndex == slideIndex ? (
                        <OverlayDescription description={slide.description} />
                    ): (null)
                ))
            }
            <div style={{ backgroundImage: `url(${slides[currentIndex].url})` }} className='w-full h-full rounded-2xl bg-center bg-cover duration-500  '>
                
                <div>
                    {/* {Left Arrow} */}
                    <Icon
                        icon="ic:round-keyboard-arrow-left"
                        color="#d0d7dc"
                        className='hidden 
                        group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full -p-2 bg-black/20 text-white cursor-pointer w-10 h-10'
                        onClick={prevSlide}
                        />
                </div>

                <div>
                    {/* {Right Arrow} */}
                    <Icon 
                    icon="ic:round-keyboard-arrow-right"
                    color="#d0d7dc"
                    className=' hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full -p-2 bg-black/20 text-white cursor-pointer w-10 h-10'
                    onClick={nextSlide}
                     />
                </div>
            </div>
            <div className='flex top-4 justify-center py-2'>
                {
                    slides.map((slide, slideIndex) => (
                        <Icon 
                        key={slide.id}
                        icon="material-symbols:circle"
                        className='cursor-pointer mx-1 w-3 h-3'
                        onClick={() => setCurrentIndex(slideIndex)}
                        />
                        ))
                    }
            </div>
        </div>
    )
}

export default Carousel