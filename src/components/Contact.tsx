import React from 'react'

const Contact = () => {
  return (
    <div className='flex flex-col mx-auto mb-10 '>
      <div className='flex justify-center pl-4 sm:pl-0 items-center'>
        <form 
        action='https://getform.io/f/39317eb4-6faa-423a-88cd-08fdf1f158d1'
        method='POST'
        className='flex flex-col w-full md:w-7/12'
        >
          <label htmlFor="name">
            <input 
            type="text"
            id='name'
            name='John Doe' 
            placeholder='Name...' 
            className='p-2 bg-transparent border-2 rounded-md focus:outline-none w-3/5'
            />
          </label>
          <label htmlFor="email">
          <input 
            type="email"
            id='email'
            name='email' 
            placeholder='johndoe@gmail.com' 
            className='my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none w-3/5'
            />
          </label>
          <label htmlFor="message">
            <textarea 
            name="message"
            placeholder='Message' 
            id="message"
            rows="10"
            className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none w-3/5"
            />  
          </label>
          <button 
          type='button'
          className='text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-yellow-500 to-pink-500 drop-shadow-md hover:stroke-white'
          >
            Work With Me
          </button>

        </form>
      </div>
    </div>
  )
}

export default Contact