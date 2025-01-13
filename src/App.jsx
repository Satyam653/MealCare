import { useState } from 'react'


import  Hero from './Home/Hero.jsx';
import AssignWork from './Home/AssignWork.jsx';
import Footer from './Home/Footer.jsx';
import Navbar from './Home/Navbar.jsx';

function App() {
 
  return (
    <>
     <div>

      <Navbar/>
      <Hero/>
      <AssignWork/>
      <Footer/>
      </div>
    </>
  )
}

export default App
