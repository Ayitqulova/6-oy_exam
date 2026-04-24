import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Service from "./pages/Service"
import Company from "./pages/Company"
import Career from "./pages/Career"
import Fullstack from "./pages/Fullstack"
function App() {

  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/service" element={<Service />}/>
        <Route path="/company" element={<Company />}/>
        <Route path="/career" element={<Career />}/>
        <Route path="/career/:slug" element={<Fullstack />}/>  
      </Routes>
   </BrowserRouter>
  )
}

export default App
