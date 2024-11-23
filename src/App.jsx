import Footer from "./components/Footer"
import Hero from "./components/Hero"
import HowToBuy from "./components/HowToBuy"
import Navbar from "./components/Navbar"

function App() {


  return (
    <>
     <div className="bg-main blur-md"> </div>
      <div className=" twoblur">  </div>

      
    <div className=" structure">
    <Navbar/>
      <Hero/>
      <HowToBuy/>
      <Footer/>
     
    </div>
   
    </>
  )
}

export default App
