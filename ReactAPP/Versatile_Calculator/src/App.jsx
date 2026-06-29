import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from './components/About'
import Basic from './components/basic'
import Feedback from "./components/feedback"
import Footer from "./components/footer"
import Home from './components/Home'
import Permutationscombinations from './components/permcomb'
import Force from "./components/physicscomponents/Force"
import Physics from "./components/Physicsnav"
import Placeholder from './components/Placeholder'
import Scientific from './components/scientific'
import Sequenceseries from './components/sequenceseries'
// import Fma from "./components/physicscomponents/force/fma"
import Workdone from "./components/physicscomponents/Workdone"
import UnitConverter from "./components/Unit"
import Vector from "./components/Vector"


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/basic' element={<Basic />} />
          <Route path='/scientific' element={<Scientific />} />
          <Route path='/physics' element={<Physics />} />
          <Route path='/unit' element={<UnitConverter />} />
          <Route path='/permutationscombinations' element={<Permutationscombinations />} />
          <Route path='/sequenceseries' element={<Sequenceseries />} />
          <Route path='/feedback' element={<Feedback />} />
          <Route path="/physics/force" element={<Force />} />
          <Route path="/physics/work-done" element={<Workdone />}></Route>
          <Route path="/Vectorproduct" element={<Vector />}></Route>
          <Route path="*" element={<Placeholder title="Page Not Found" />} />
          {/* <Route path="/physics/force/fma">{<Fma/>}</Route> */}
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App