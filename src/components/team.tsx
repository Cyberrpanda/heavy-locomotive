import team1 from "../assets/team-1.jpg";
import team2 from "../assets/team-2.jpg";
import team3 from "../assets/team-3.jpg";
import team4 from "../assets/team-4.jpg";

export default function Team() {
    return (
        <section className="team-section">
            <div className="team-section__content">
                <h1 className="team-section__text"> Meet The Team</h1>
                <div className="team-section__personel">
                    <div className="team-section__group1">
                        <div className="team-section__p1">
                            <figure className="biopic">
                            <img className="tmembers" src={team1} alt="t1" />
                            </figure>

                            <div>
                             <h3>Dean Horn</h3>  

                             <p>
                             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem hic eligendi, facilis ipsam incidunt ut doloremque similique, neque nesciunt modi rep
                             </p> 
                             
                            </div>
                            
                        </div>

                        <div className="team-section__p2">
                            <figure className="biopic">
                            <img className="tmembers" src={team2} alt="t2" />
                            </figure>

                            <div>
                             <h3>Shay Comb</h3>  

                             <p>
                             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem hic eligendi, facilis ipsam incidunt ut doloremque similique, neque nesciunt modi rep
                             </p> 
                             
                            </div>
                            
                        </div>
                    </div>

                    <div className="team-section__group2">
                        <div className="team-section__p3">
                                <figure className="biopic">
                                <img className="tmembers" src={team3} alt="t3" />
                                </figure>

                                <div>
                                  <h3>Lucy Hail</h3>  

                                  <p>
                                   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem hic eligendi, facilis ipsam incidunt ut doloremque similique, neque nesciunt modi rep
                                  </p> 
                             
                                </div>
                                
                            </div>

                            <div className="team-section__p4">
                                <figure className="biopic">
                                <img className="tmembers" src={team4} alt="t4" />
                                </figure>

                                <div>
                                  <h3>Cain Bron</h3>  

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