import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Header from './components/Header'
import General from './components/General'
import Education from './components/Education'
import Work from './components/Work'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Header />
        <div className="flex flex-col items-center">
          <General />
          <Education />
          <Work />
        </div>
    </>
  )
}

export default App
