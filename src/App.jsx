import React from 'react'
import Navbaar from './sections/Navbaar'
import Hero from './sections/Hero'
import About from './sections/About'
import  ProjectCard  from './sections/ProjectCard'
import Education from './sections/Education'
import ExperienceAndAwards from './sections/Experience'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

const App = () => {
  return (
    <div className='container mx-auto max-w-7xl'>
      <Navbaar />
      <Hero />
      <About />
      <ProjectCard />
      <Education />
      <ExperienceAndAwards/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App

