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
        <div className="flex flex-col items-center">
          <Header />
          <div className="flex flex-col items-center w-4/5 pb-10 mb-10 border-l-4 border-r-4">
            <Position />
            <form className="flex flex-col items-center w-3/5" onSubmit={handleSubmit}>
              <General />
              <Education />
              <Work />
              <input className="p-4 border-4 rounded" type="submit" value="Submit" />
            </form>
          </div>
        </div>
    </>
  )
}

export default App
