import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Service from "./pages/Service"
import Company from "./pages/Company"
import Career from "./pages/Career"
import Fullstack from "./pages/Fullstack"
import Blog from "./pages/Blog"
import Bloginner from "./pages/Bloginner"
import Team from "./pages/Team"
import Contact from "./pages/Contact"
import Policy from "./pages/Policy"
function App() {

  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/service" element={<Service />}/>
        <Route path="/company" element={<Company />}/>
        <Route path="/career" element={<Career />}/>
        <Route path="/career/:slug" element={<Fullstack />}/>  
        <Route path="/blog/:slug" element={<Bloginner />} />
        <Route path="/company/:slug" element={<Team />} />
        <Route path="main/:slug" element={<Policy />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
   </BrowserRouter>
  )
}

export default App
