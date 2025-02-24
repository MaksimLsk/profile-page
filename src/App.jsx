// import React from 'react'
import './App.css'
import Home from './components/Home/Home'
import Services from './components/Services/Services'
import Skills from './components/Skills/Skills'
import Portfolio from './components/Portfolio/Portfolio';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {

  return (
    <>
      <main className="main">
        <Header />
        <Home />
        <Services />
        <Skills />
        <Portfolio />
        <Resume />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

export default App
