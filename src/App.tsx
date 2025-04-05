import Navbar from "./components/navbar.tsx";
import Welcome from "../src/components/welcome.tsx";
import Services from "./components/services.tsx";
import About from "./components/about.tsx";
import Team from "./components/team.tsx";


function App() {
  return (
   <>
    <Navbar/>
    
    <Welcome/>

    <Services/>

    <Team/>
    

    <About/>

   </>
  
  )

}

export default App
