import { useRef, useState } from "react";
import { HashLink as Link } from 'react-router-hash-link';
import { FaBars, FaTimes } from "react-icons/fa";



export default function Navbar() {
    const navRef = useRef<HTMLElement | null>(null);
    const [navIsOpen, setNavIsOpen] = useState(false);
  
    const showNavbar = () => {
      setNavIsOpen(!navIsOpen);
    };
  
    const closeNavbar = () => {
      setNavIsOpen(false);
    };
  
    return (
      <>
        <header className="head">
          <nav ref={navRef} className={`navbar ${navIsOpen ? "open" : ""}`}>
            <div className="head__logo-box">
              <img src="/img/webdesignlogo2-removebg-preview.png" alt="" className="head__logo"/>
            </div>

            <ul>
              <li>
                <Link smooth to="/#home" onClick={closeNavbar}>Home</Link>
              </li>
              <li>
                <Link smooth to="/#mylore" onClick={closeNavbar}>About Us</Link>
              </li>
              <li>
                <Link smooth to="/#stack" onClick={closeNavbar}>Services</Link>
              </li>
              <li>
                <Link smooth to="/#reason" onClick={closeNavbar}>Previous Purchases</Link>
              </li>
              <li>
                <Link smooth to="/#contactinfo" onClick={closeNavbar}>Contact Us</Link>
              </li>
            </ul>
          </nav>
         
          <button className="nav-btn" onClick={showNavbar}>
            {navIsOpen ? <FaTimes /> : <FaBars />}
          </button>
        </header>
      </>
    );
  }
  
