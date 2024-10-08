import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import axios from 'axios'
import './assets/css/App.css'

import Multiple from './components/Form'
import HomePage from './Home'

function App() {
  // const [count, setCount] = useState(0)

  useEffect(()=> {
    console.log(import.meta.env.VITE_API_URL)
  }, [])

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
              <Route index element={<HomePage />} />
              <Route path="home" element={<HomePage />} />
              <Route path="form" element={<Multiple />} />
          </Routes>
        </BrowserRouter>
      </div>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
