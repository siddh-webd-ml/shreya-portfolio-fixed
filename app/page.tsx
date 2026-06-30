"use client"

import dynamic from "next/dynamic"
import Navbar from "./sections/Navbar"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Experience from "./sections/Experience"
import Education from "./sections/Education"
import Skills from "./sections/Skills"
import Certificates from "./sections/Certificates"
import Projects from "./sections/Projects"
import Achievements from "./sections/Achievements"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"

// Dynamic imports for performance
const AnimatedBackground = dynamic(() => import("./components/AnimatedBackground"), {
  ssr: false,
})
const CustomCursor = dynamic(() => import("./components/CustomCursor"), {
  ssr: false,
})
const ScrollProgress = dynamic(() => import("./components/ScrollProgress"), {
  ssr: false,
})
const BackToTop = dynamic(() => import("./components/BackToTop"), {
  ssr: false,
})

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <AnimatedBackground />
      <CustomCursor />
      <ScrollProgress />
      <BackToTop />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Certificates />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  )
}
