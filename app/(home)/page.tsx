import React from 'react'
import Navbar from './components/navbar'
import MainSection from './components/MainSection'
import Skills from './components/skills'
import Projects from './components/Projects'
import Footer from './components/Footer'
export default function page() {
  return (
    <div className='min-h-screen bg-black overflow-hidden'>
      <div className='dark:bg-black bg-white  dark:bg-grid-white/[0.1] relative'>
        <div className='max-w-7xl mx-auto p-5'>
          <Navbar/>
          <MainSection/>
        </div>
      </div>
      <div className=' h-10 xl:h-32 bg-gradient-to-t from-black absolute -botton-5 left-0 xl:bottom-0 w-full'></div>
      <div className='max-w-7xl mx-auto p-5 mt-20'>
        <Skills/>
        <Projects/>
        <Footer/>
      </div>
    </div>
  )
}
