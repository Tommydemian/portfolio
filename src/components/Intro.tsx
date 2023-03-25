import React from 'react'

const Intro = () => {
  return (
    <div className='flex items-center justify-center flex-col text-center pt-20 pb-6'>
        <h1 className='text-4-xl dark:text-white md:text-7xl mb-1 md:mb-3 font-bold drop-shadow-lg shadow-[#FF6700]'>Tomas Gil Amoedo</h1>
        <p className='text-base md:text-xl mb-3 font-medium'>software Engineer . FrontEnd Developer</p>
        <p style={{lineHeight: '1.5'}} className='text-sm max-w-xl mb-6'>Hi there! I'm Tomas Gil Amoedo, a front-end developer with a passion for problem solving and a background in psychology. I approach web development as an art form, using my creativity and quick learning ability to create intuitive and user-friendly websites.
        <br /> <br />
        I've been working in the industry for over a year now, and in that time, I've had the opportunity to work on some exciting projects. One of my proudest achievements was understanding the double processing concept in Cypress and creating functionalities directly in Node.js that could be extrapolated to Cypress, reducing the test execution time by approximately 50%. This required a deep understanding of both technologies and a lot of experimentation, but the results were well worth it. It was a great example of my problem-solving skills and ability to learn quickly.
        <br /> <br />
        My skills extend beyond front-end development. I have experience in e2e Cypress testing and Node.js, and I'm skilled in crafting scalable and reusable code using React, which is by far my favorite framework.
        <br /> <br />
        I'm currently on a mission to secure a job as a React developer and become a Full-Stack developer. I'm excited to continue growing as a developer and take on new challenges. <span className='text-[#FF6700] font-bold'>Join me on my journey as I pursue my passion for logical problem-solving and exceptional results in web development.</span>  
        </p>
    </div>
  ) 
}

export default Intro