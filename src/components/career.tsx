import team1 from "../assets/man-working-as-truck-driver.webp";
import team2 from "../assets/medium-shot-female-economist-working-office.webp";
import team3 from "../assets/young-worker-checks-wheel-truck-malfunction-service-work.webp";
import team4 from "../assets/medium-shot-man-wearing-helmet.webp";

export default function Career() {
    return (
        <section id="career-section" className="career-section">
            <div className="career-section__content">
                <h1 className="career-section__text"> Career Opportunities</h1>
                <div className="career-section__personel">
                    <div className="career-section__group1">
                        <div className="career-section__p1">
                            <figure className="biopic">
                            <img className="cmembers" src={team1} alt="t1" />
                            </figure>

                            <div>
                             <h3>Driver Careers</h3>  

                             <p>
                             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem hic eligendi, facilis ipsam incidunt ut doloremque similique, neque nesciunt modi rep
                             </p> 
                             
                            </div>
                            
                        </div>

                        <div className="career-section__p2">
                            <figure className="biopic">
                            <img className="cmembers" src={team2} alt="t2" />
                            </figure>

                            <div>
                             <h3>Office Careers</h3>  

                             <p>
                             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem hic eligendi, facilis ipsam incidunt ut doloremque similique, neque nesciunt modi rep
                             </p> 
                             
                            </div>
                            
                        </div>
                    </div>

                    <div className="career-section__group2">
                            <div className="career-section__p3">
                                    <figure className="biopic">
                                    <img className="cmembers" src={team3} alt="t3" />
                                    </figure>

                                    <div>
                                    <h3>Shop Careers</h3>  

                                    <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem hic eligendi, facilis ipsam incidunt ut doloremque similique, neque nesciunt modi rep
                                    </p> 
                                
                                    </div>
                                    
                            </div>

                            <div className="career-section__p4">
                                <figure className="biopic">
                                <img className="cmembers" src={team4} alt="t4" />
                                </figure>

                                <div>
                                  <h3>Driver Training</h3>  

                                  <p>
                                   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem hic eligendi, facilis ipsam incidunt ut doloremque similique, neque nesciunt modi rep
                                  </p> 
                             
                                </div>
                                
                            </div>
                    </div>
                </div>
            </div>
        </section>
    )
}