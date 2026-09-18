// import { motion } from "framer-motion"

import About from "./components/About"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Location from "./components/Location"
import Navbar from "./components/Navbar"
import Spices from "./components/Spices"


const App = () => {
  return (
    <>
    <main className="overflow-x-hidden">
     <Navbar/>
     <Home/>
     <About/>
     <Spices/>
     <Location/>
     <Footer/>
     </main>
    </>
  )
}

export default App
