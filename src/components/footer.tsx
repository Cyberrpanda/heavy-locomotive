import Facebook from "./facebook";
import Instagram from "./instagram";
import Youtube from "./youtube";
import Tiktok from "./tiktok";
export default function Footer() {
    return (
        <section id="footer-section" className="footer-section">
           <div className="footer-section__content">
             <div className="footer-section__content-1">
                 <div className="head__logo-box">
                  <img src="/img/webdesignprojectlogo-removebg-preview.png" alt="" className="head__logo"/>
                 </div>
             </div>
              
             <div className="footer-section__content-2">
                 <form className="footer__form" action="" method="GET">
                     <input type="text" name="query" placeholder="Search..."/>
                     <button type="submit" className="btn--success">Submit</button>
                 </form>

                 <p> Copyright &copy; 2025 Heavy Locomotive. All rights reserved.</p>
             </div>

             <div className="footer-section__content-3">
               <p>
                  Contact Information:
                  Mobile:
                  09168728729;
                  Whatsapp:
                  +2348185817626
               </p>
                <div className="svg-group">
                  <Facebook/>
                  <Instagram/>
                  <Youtube/>
                  <Tiktok/>
                </div>
             </div>
             </div>
             
        </section>


        

    )
}