import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Header from './components/Header'
import Position from './components/Position'
import General from './components/General'
import Education from './components/Education'
import Work from './components/Work'

function makeInvisible (elementID) {
  const element = document.getElementById(elementID);
  if (element) {
    console.log("hi");
    element.style.display="none";
  }
  else {
    console.log("no");
  }
}

function makeVisible (elementID) {
  const element = document.getElementById(elementID);
  if (element) {
    element.style.display="flex";
  }
}

function App() {
  const [thanks, setThanks] = useState("Thanks for applying!");

  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log("Form submitted");
    makeInvisible("form");
    makeVisible("editButton");
    makeVisible("message");
  }

  const edit = (e) => {
    makeVisible("form");
    makeInvisible("editButton");
    makeInvisible("message");
  }
  return (
    <>
        <div className="flex flex-col items-center">
          <Header />
          <div className="flex flex-col items-center w-4/5 pb-10 mb-10 border-l-4 border-r-4">
            <Position />
            <form id="form" className="flex flex-col items-center w-3/5" onSubmit={handleSubmit}>
              <General thanks={thanks} setThanks={setThanks}/>
              <Education />
              <Work />
              <input className="p-4 border-4 rounded cursor-pointer" type="submit" value="Submit" />
            </form>
            <p id="message" className="hidden mb-4">Application submitted.</p>
            <button id="editButton" className="hidden p-3 border-4 rounded" type="button" onClick={edit}>Edit</button>
          </div>
        </div>
    </>
  )
}

export default App
