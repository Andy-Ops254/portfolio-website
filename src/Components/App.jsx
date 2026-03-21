import React from "react"
import About from "./About"
import Navbar from "./Navbar"
import Hero from "./Hero"
import TechStack from "./TechStack"
import Projects from "./Projects"
import Contact from "./Contact"

function App() {

  return (
    <main>
      {/* gradient background */}
      <img className="fixed inset-0 h-full w-full object-cover opacity-50 -z-10"
      src="./gradient.png" alt="gradient"/>

      {/*Blur  */}
      <div className="w-190 h-0 absolute top-0 left-1/2 -translate-x-1/2
  shadow-[0_0_900px_180px_#03302d] -z-10 rounded-full blur-3xl" />

      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Contact />
    </main>
  )
}

export default App
