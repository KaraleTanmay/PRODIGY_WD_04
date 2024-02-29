import React from 'react'
import AboutMe from './components/AboutMe'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Technologies from './components/Technologies'
import Divider from './global components/Divider'
import Section from './global components/Section'

export default function App() {
  return (
    <div className="bg-bg">
      <Navbar></Navbar>
      <Section>
        <Hero></Hero>
        <Divider></Divider>
        <Projects></Projects>
        <Divider></Divider>
        <Technologies></Technologies>
        <Divider></Divider>
        <AboutMe></AboutMe>
      </Section>
      <Footer></Footer>
    </div>
  )
}
