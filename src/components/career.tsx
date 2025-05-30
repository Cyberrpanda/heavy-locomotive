import team1 from "../assets/man-working-as-truck-driver.jpg";
import team1Webp480 from "../assets/480 (7).webp";
import team1Webp768 from "../assets/768 (7).webp";
import team1Webp1200 from "../assets/1200 (7).webp";
import team2 from "../assets/medium-shot-female-economist-working-office.jpg";
import team2Webp480 from "../assets/480.webp";
import team2Webp768 from "../assets/768.webp";
import team2Webp1200 from "../assets/1200.webp";
import team3 from "../assets/medium-shot-man-wearing-helmet.jpg";
import team3Webp480 from "../assets/480 (8).webp";
import team3Webp768 from "../assets/768 (8).webp";
import team3Webp1200 from "../assets/1200 (8).webp";
import team4 from "../assets/young-worker-checks-wheel-truck-malfunction-service-work.jpg";
import team4Webp480 from "../assets/480 (4).webp";
import team4Webp768 from "../assets/768 (4).webp";
import team4Webp1200 from "../assets/1200 (4).webp";



export default function Career() {
    return (
        <section id="career-section" className="career-section">
            <div className="career-section__content">
                <h1 className="career-section__text"> Career Opportunities</h1>
                <div className="career-section__personel">
                    <div className="career-section__group1">
                        <div className="career-section__p1">
                            <figure className="biopic">
                                <picture>
                                    <source media="(max-width: 480px)" srcSet={team1Webp480} type="image/webp" />
                                    <source media="(max-width: 768px)" srcSet={team1Webp768} type="image/webp" />
                                    <source srcSet={team1Webp1200} type="image/webp" />
                                  <img className="cmembers" src={team1} loading="lazy" alt="t1" />
                                </picture>
                            
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
                            <picture>
                                    <source media="(max-width: 480px)" srcSet={team2Webp480} type="image/webp" />
                                    <source media="(max-width: 768px)" srcSet={team2Webp768} type="image/webp" />
                                    <source srcSet={team2Webp1200} type="image/webp" />
                                  <img className="cmembers" src={team2} loading="lazy" alt="t1" />
                                </picture>
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
                                    <picture>
                                    <source media="(max-width: 480px)" srcSet={team3Webp480} type="image/webp" />
                                    <source media="(max-width: 768px)" srcSet={team3Webp768} type="image/webp" />
                                    <source srcSet={team3Webp1200} type="image/webp" />
                                  <img className="cmembers" src={team3} loading="lazy" alt="t1" />
                                </picture>
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
                                <picture>
                                    <source media="(max-width: 480px)" srcSet={team4Webp480} type="image/webp" />
                                    <source media="(max-width: 768px)" srcSet={team4Webp768} type="image/webp" />
                                    <source srcSet={team4Webp1200} type="image/webp" />
                                  <img className="cmembers" src={team4} loading="lazy" alt="t1" />
                                </picture>
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