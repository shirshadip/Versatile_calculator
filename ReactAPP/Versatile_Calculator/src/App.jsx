import { useEffect } from "react"
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
import './App.css'
import About from './components/About'
import Basic from './components/basic'
import Home from './components/Home'
import Scientific from './components/scientific'
import Permutationscombinations from './components/permcomb'
import Sequenceseries from './components/sequenceseries'
import Placeholder from './components/Placeholder'
import Feedback from "./components/feedback"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/basic' element={<Basic />} />
        <Route path='/scientific' element={<Scientific />} />
        <Route path='/physics' element={<Placeholder title="Physics" />} />
        <Route path='/unit' element={<Placeholder title="Unit Converter" />} />
        <Route path='/permutationscombinations' element={<Permutationscombinations />} />
        <Route path='/sequenceseries' element={<Sequenceseries />} />
        <Route path='/feedback' element={<Feedback/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App