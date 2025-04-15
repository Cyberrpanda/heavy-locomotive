import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.tsx";
import Welcome from "../src/components/welcome.tsx";
import Services from "./components/services.tsx";
import About from "./components/about.tsx";
import Career from "./components/career.tsx";
import Compstatus from "./components/compstatus.tsx";
import Compstatus2 from "./components/compstatus2.tsx";
import Signup from "./components/signup.tsx";
import Footer from "./components/footer.tsx";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={
          <>
            <Welcome />
            <Compstatus />
            <About />
            <Services />
            <Compstatus2 />
            <Career />
          </>
        } />

        <Route path="/signup" element={<Signup />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
