import React from 'react'

import { Icon } from '@iconify/react';
// Components: 
import Button from './Button'
// Assets: 
import me from '../assets/me.png'

const Intro = () => {
  return (
    <div className='flex outline outline-lime-800'>
      <div className='my-auto mx-auto'>
        <img  src={me} alt="picture of me" className='outline outline-russet rounded-full bg-charcoal' />
      </div>
      <div className='outline outline-lime-200 basis-[70%] ml-16 flex-grow'>
        <h1 className='font-Montserrat text-4xl dark:text-white font-semibold drop-shadow-lg shadow-[#FF6700]'>Hi! I’m Tomás Gil Amoedo</h1>
        <h2 className='font-Montserrat text-3xl text-gray600 dark:text-gray100 font-semibold mb-3 capitalize text-left'>software engineer</h2>
        <p style={{lineHeight: '1.5'}} className='text-base max-w-xl text-gray600 dark:text-gray100 font-Lato'>Hi there! I'm Tomas Gil Amoedo, a front-end developer with a passion for problem solving and a background in psychology. I approach web development as an art form, using my creativity and quick learning ability to create intuitive and user-friendly websites.
        <br /> 
        I've been working in the industry for over a year now, and in that time, I've had the opportunity to work on some exciting projects. One of my proudest achievements was understanding the double processing concept in Cypress and creating functionalities directly in Node.js that could be extrapolated to Cypress, reducing the test execution time by approximately 50%. This required a deep understanding of both technologies and a lot of experimentation, but the results were well worth it. It was a great example of my problem-solving skills and ability to learn quickly.
        <br /> <br />  
        </p>
        <div className='flex gap-x-4'>
        <Button rounded={true} primary>
        <Icon icon="mdi:email-newsletter" color="#713710" className='w-6 h-6 mr-1'/>
          Contact me
          </Button>
        <Button rounded={true} secondary>
        <Icon icon="solar:download-minimalistic-outline" color="#2e4e5b" className='w-6 h-6 mr-1' />
          Resume
          </Button>
        </div>
      </div>
    </div>
  ) 
}

export default Intro

// My skills extend beyond front-end development. I have experience in e2e Cypress testing and Node.js, and I'm skilled in crafting scalable and reusable code using React, which is by far my favorite framework.
//         <br /> <br />
//         I'm currently on a mission to secure a job as a React developer and become a Full-Stack developer. I'm excited to continue growing as a developer and take on new challenges. <span className='text-[#FF6700] font-bold'>Join me on my journey as I pursue my passion for logical problem-solving and exceptional results in web development.</span>