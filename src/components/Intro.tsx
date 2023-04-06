import React, { useState, useEffect } from 'react'

import { Icon } from '@iconify/react';
// Components: 
import Button from './Button'
import TechStack from '../containers/TechStack';
// hooks:
import { useToggle } from '../hooks/useToggle';
// Assets: 
import me from '../assets/me.png'

import { introDesc, introDescSliced } from '../data/introDesc'

const Intro = () => {

  const {state: readMore, toggle } = useToggle(true)

  const [isMobile, setIsMobile] = useState(false)
  // const [readMore, setReadMore] = useState(true)

  const trackDesktop = () => {
    const innerWith = window.innerWidth
    if (innerWith < 650) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }

  useEffect(() => {
    trackDesktop();
    window.addEventListener("resize", trackDesktop);
    return () => window.removeEventListener("resize", trackDesktop);
  }, []);

  return (
    <section className='overflow-y-hidden'>
      <div className='mt-20 sm:mt-0 flex flex-col justify-center items-center sm:flex-row max-w-5xl mx-auto'>
        <div className='my-auto mx-auto w-[173.9px] h-[185px] sm:w-auto sm:h-auto'>
          <img src={me} alt="picture of me" className='rounded-full dark:bg-charcoal bg-lightblue100' />
        </div>
        <div className='mt-4 sm:basis-[70%] sm:ml-16 sm:flex-grow'>
          <h1 className='font-Montserrat text-4xl dark:text-white font-semibold drop-shadow-lg shadow-[#FF6700]'>Hi! I’m Tomás Gil Amoedo</h1>
          <h2 className='font-Montserrat text-3xl text-gray600 dark:text-gray100 font-semibold mb-3 capitalize text-left'>software engineer</h2>
            {
              readMore ? (
                <p
                  style={{ lineHeight: '1.5' }}
                  className='text-base max-w-xl text-gray600 dark:text-gray100 font-Lato'

                >
                  {introDescSliced}
                </p>
              ) : (
                <p
                  style={{ lineHeight: '1.5' }}
                  className='text-base max-w-xl text-gray600 dark:text-gray100 font-Lato'

                >
                  {introDesc}
                </p>
              )

            }
          <span className='my-2 block text-[#98C3EC] cursor-pointer' onClick={toggle}>{readMore ? 'Read More...' : 'back to short v.'}</span>

          <div className='flex gap-x-4'>
            <Button rounded={true} primary>
              <Icon icon="mdi:email-newsletter" color="#713710" className='w-6 h-6 mr-1' />
              Contact me
            </Button>
            <Button rounded={true} secondary>
              <Icon icon="solar:download-minimalistic-outline" color="#2e4e5b" className='w-6 h-6 mr-1' />
              Resume
            </Button>
          </div>
        </div>
      </div>
      {
        !isMobile &&
        <TechStack />
      }
    </section>
  )
}

// const Intro = () => {
//   return (
//     <section>
//       <h1>Hi! I’m Tomás Gil Amoedo</h1>
//       <p>While my current role is as a front-end developer, I have also been writing Node.js for the past few months, which has given me full-stack experience. With a passion for problem solving and a background in psychology. I approach web development as an art form, using my my ability to think abstractly and quick learning ability to create intuitive and user-friendly websites.
//          <br /> <br />
//          As i said before my experience extends beyond front-end development and includes expertise in e2e Cypress testing and Node.js. One of my proudest achievements was drastically reducing test execution time by understanding the double processing concept in Cypress and migrating functionalities directly in Node.js. I'm eager to apply my problem-solving and quick learning skills to web development and am actively seeking opportunities to do so.
//         <br /> <br />  
//          </p>
//     </section>
//   )
// }

export default Intro
