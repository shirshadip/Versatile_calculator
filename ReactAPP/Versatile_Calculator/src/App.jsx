import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'
import About from './components/About'
import Basic from './components/basic'
import Home from './components/Home'
import Placeholder from './components/Placeholder'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/basic' element={<Basic />} />
        <Route path='/scientific' element={<Placeholder title="Scientific Calculator" />} />
        <Route path='/physics' element={<Placeholder title="Physics" />} />
        <Route path='/unit' element={<Placeholder title="Unit Converter" />} />
        <Route path='/permutations' element={<Placeholder title="Permutations & Combinations" />} />
        <Route path='/sequences' element={<Placeholder title="Sequence & Series" />} />
        <Route path='/feedback' element={<Placeholder title="Feedback" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App