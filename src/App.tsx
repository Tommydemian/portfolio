import React, { useState, useEffect } from 'react'
import { Icon } from '@iconify/react';

import { Intro, Portfolio, Contact, Footer, Timeline } from './components'

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
  },[theme])

  const sun = (
    <Icon icon="tabler:sun-filled" color="#06010A" className='w-5 h-5 sm:w-10 sm:h-10' />
  )

  const moon = (
    <Icon icon="ph:moon-fill" color="#fff" className='w-5 h-5 sm:w-10 sm:h-10' />
  )

  return (
    <>
    <button 
    type='button'
    onClick={handleThemeSwitch}
    className='fixed p-2 z-10 right-20 top-4 bg-[#8D5A97] dark:bg-orange-300 text-lg rounded-md'
    >
      {theme === 'dark' ? sun : moon}
    </button>
    <div className='bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-300 min-h-screen font-inter'>
      <div className='max-w-5xl w-11-12 mx-auto'>
      <Intro />
      <Portfolio />
      <Timeline />
      <Contact />
      <Footer />
    </div>
    </div>
    </>
  )
}

export default App
