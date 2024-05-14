import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Header from './components/Header'
import Position from './components/Position'
import General from './components/General'
import Education from './components/Education'
import Work from './components/Work'

function App() {
  const handleSubmit = (e) => {
    
    console.log("Form submitted");
  }
  return (
    <>
        <Header />
        <div className="flex flex-col items-center">
          <Position />
          <form className="flex flex-col items-center border-4 border-solid" onSubmit={handleSubmit}>
            <General />
            <Education />
            <Work />
            <input type="submit" value="Submit" />
          </form>
        </div>
    </>
  )
}

export default App
