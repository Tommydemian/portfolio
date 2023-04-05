import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Icon } from '@iconify/react';

import Navbar from './containers/Navbar';
import PortfolioItemDesc from './containers/PortfolioItem';

import {
  Intro,
  Portfolio,
  Contact,
  Footer,
  Timeline,
  TechStack,
  Articles
} from './components'
import Project from './containers/Project';

function App() {

  const [theme, setTheme] = useState<string | null>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme])

  const sun = (
    <Icon icon="tabler:sun-filled" color="#06010A" className='w-5 h-5 sm:w-10 sm:h-10' />
  )

  const moon = (
    <Icon icon="ph:moon-fill" color="#fff" className='w-5 h-5 sm:w-10 sm:h-10' />
  )

  return (
    <BrowserRouter>
      <button
        type='button'
        onClick={handleThemeSwitch}
        className='absolute p-2 z-10 right-1 top-2 bg-[#8D5A97] dark:bg-orange-300 text-lg rounded-md'
      >
        {theme === 'dark' ? sun : moon}
      </button>
      <div className='bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-300 min-h-screen flex flex-col justify-between'>
        <div className='max-w-7xl mx-auto px-4 min-h-screen flex flex-col justify-between w-full'>
          <Navbar />
          <Routes>
            <Route path='/' element={<Intro />} />
            <Route path='/projects*' element={<Portfolio />}/>
              <Route path='/projects/:id' element={<Project />} />
            
            {/* <Route />
            <Route /> */}

            {/* <TechStack /> */}
            {/* <Articles /> */}
            {/* <Courses /> */}
            {/* <Timeline /> */}
            {/* <Contact /> */}
          </Routes>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
