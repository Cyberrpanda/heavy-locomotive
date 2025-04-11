import Navbar from "./components/navbar.tsx";
import Welcome from "../src/components/welcome.tsx";
import Services from "./components/services.tsx";
import About from "./components/about.tsx";
import Career from "./components/career.tsx";
import Compstatus from "./components/compstatus.tsx";
import Compstatus2 from "./components/compstatus2.tsx";
import Footer from "./components/footer.tsx";




function App() {
  return (
   <>
    <Navbar/>
    
    <Welcome/>

    <Compstatus/>

    <About/>

    <Services/>

    <Compstatus2/>

    <Career/>

    <Footer/>

    
    
    

   </>
  
  )

}

export default App
