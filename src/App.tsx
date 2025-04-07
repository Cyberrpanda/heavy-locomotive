import Navbar from "./components/navbar.tsx";
import Welcome from "../src/components/welcome.tsx";
import Services from "./components/services.tsx";
import About from "./components/about.tsx";
import Team from "./components/team.tsx";
import Compstatus from "./components/compstatus.tsx";


function App() {
  return (
   <>
    <Navbar/>
    
    <Welcome/>

    <Services/>

    <Compstatus/>

    <Team/>
    
    <About/>

   </>
  
  )

}

export default App
