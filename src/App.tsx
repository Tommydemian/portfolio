import React, { useState, useEffect, createContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Icon } from '@iconify/react';

import Navbar from './containers/Navbar';
import PortfolioItemDesc from './containers/PortfolioItem';
import LearningJourney from './components/LearningJourney';

import {
  Intro,
  Portfolio,
  Contact,
  Footer,
  TechStack,
  Articles
} from './components'
import Project from './containers/Project';

export const ThemeContext = createContext<{theme: string | null, setTheme: React.Dispatch<React.SetStateAction<string | null>>}>({
  theme: null,
  setTheme: () => {}
});

function App() {
  const [theme, setTheme] = useState<string | null>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  return (
    <BrowserRouter>
    <ThemeContext.Provider value={{theme, setTheme}}>
      <div className='bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-300 min-h-screen flex flex-col justify-between'>
        <div className='max-w-7xl mx-auto px-4 min-h-screen flex flex-col justify-between w-full'>
          <Navbar />
          <Routes>
            <Route path='/' element={<Intro />} />
            <Route path='/projects*' element={<Portfolio />}/>
            <Route path='/projects/:id' element={<Project />} />
            <Route path='/learning-journey' element={<LearningJourney />} />
            <Route path='/contact' element={<Contact />} />
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
      </ThemeContext.Provider>
    </BrowserRouter>
  )
}

export default App
