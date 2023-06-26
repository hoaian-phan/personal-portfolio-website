import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Skills from './components/skills/Skills'
import Projects from './components/portfolio/Projects'
import Testimonials from './components/testimonials/Testimonials'
import Blog from './components/blog/Blog'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Chatbot from './components/chatbot/Chatbot'
import { runFireworks } from './lib/util'


const App = () => {
  runFireworks();
  return (
    <>
      <Header />
      <Nav />
      <Chatbot />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Testimonials />
      {/* <Blog /> */}
      <Contact />
      <Footer />

    </>
  )
}

export default App