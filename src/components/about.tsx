import Cement from "./cement"
import Dumptruck from "./dumptruck"
import Firetruck from "./firetruck"
import Fueltank from "./fueltanker"
import Towtruck from "./towtruck"

export default function About(){
    return(
        <section className="about-section">
           <div className="about-section_content">
            <div className="truck-types">
                <Towtruck className="about-svg"/>
                <Cement className="about-svg"/>
                <Firetruck className="about-svg"/>
                <Fueltank className="about-svg"/>
                <Dumptruck className="about-svg"/>
            </div>
           </div>
        </section>
    )
}