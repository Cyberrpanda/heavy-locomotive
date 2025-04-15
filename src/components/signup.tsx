import signup from "../assets/transport-logistics-concept.jpg"
import Footer from "./footer";
import Navbar from "./navbar";
export default function Signup(){
    return (
      <>
      <Navbar></Navbar>
        <section className="signup-section">
            <div className="signup-section__content">
              <figure className="signbio">
              <img src={signup} alt="regdis" className="regdis" />
              </figure>  

              

            

            <form action="" className="form">
                  <label htmlFor="" >Fullname</label>
                  <br />
                  <input type="text"  className="form-control"  placeholder="Fullname"/>
                  <br />
                  <label htmlFor="" >Email Address</label>
                  <br />
                  <input type="email" className="form-control"  placeholder="patient@gmail.com"/>
                  <br />
                  <label htmlFor="" >Confirm Email Address</label>
                  <br />
                  <input type="email" className="form-control"  placeholder="patient@gmail.com"/>
                  <br />
                  <label htmlFor="" >Password</label>
                  <br />
                  <input type="password"  className="form-control" placeholder="*******" />
                  <br />
                  <label htmlFor="" >Confirm Password</label>
                  <br />
                  <input type="password" className="form-control" placeholder="*******" />
                  <br />
                  <label htmlFor="" >Date of Birth</label>
                  <br />
                  <input type="date" className="form-control" />
                  <br />
                  <label htmlFor="" >Gender</label>
                  <br />
                  <select className="form-control">
                  <option value="0"></option>
                  <option value="1">Male</option>
                  <option value="2">Female</option>
                  <option value="3">Other</option>
                  </select>
                  <br />
                  
                  <button type="submit" className="btn btn-success">Submit</button>
            </form>
                


            </div>
        </section>

        <Footer></Footer>
        </>
    )
}