import './App.css'
import About from './components/About-Section/About'
import ContactMe from './components/Contact-Section/ContactMe'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Hero from './components/Hero-Section/Hero'
import Projects from './components/Project-Section/Projects'
import Skills from './components/Skills-section/Skills'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      offset: 50,
    });
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <ContactMe />
      <Footer />
    </>
  )
}

export default App
