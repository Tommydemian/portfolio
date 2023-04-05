import React from 'react'
import { Icon } from '@iconify/react';
// components
import Button from './Button'
//types
import { ButtonType } from '../types/index'

const Contact = () => {
  return (
    <section className='mt-14 sm:mt-0 flex flex-col mx-auto mb-10 '>
      <div className='flex mx-auto px-2 w-full sm:w-8/12 md:w-7/12'>
        <form 
        action='https://getform.io/f/39317eb4-6faa-423a-88cd-08fdf1f158d1'
        method='POST'
        className='flex flex-col w-full'
        >
          <div className='pb-5'>
          <h2 className='font-Montserrat font-semibold dark:text-white text-[35px]'>Contact Me</h2>
          <h3 className='font-Montserrat font-semibold text-gray600 dark:text-gray100 text-[25px]'>Let's build somnething great togheter</h3>
          </div>
          <label className='font-Lato font-medium text-gray600' htmlFor="name">
            Name:
            <input 
            type="text"
            id='name'
            name='name' 
            placeholder='John Doe' 
            className='p-2 bg-transparent border-2 rounded-md focus:outline-none w-full'
            />
          </label>
          <label className='font-Lato font-medium text-gray600' htmlFor="email">
          Email:
          <input 
            type="email"
            id='email'
            name='email' 
            placeholder='johndoe@gmail.com' 
            className='my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none w-full'
            />
          </label>
          <label className='font-Lato font-medium text-gray600' htmlFor="message">
            What idea do you have in mind?
            <textarea 
            name="message"
            placeholder='Message' 
            id="message"
            rows={10}
            className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none w-full"
            />  
          </label>
          <Button
          halfWidth
          rounded
          primary 
          type={ButtonType.BUTTON}
          >
            <Icon icon="bi:send-plus-fill" color="#713710" className='w-6 h-6 mr-1' />
            Send Form
          </Button>
        </form>
      </div>
    </section>
  )
}

export default Contact