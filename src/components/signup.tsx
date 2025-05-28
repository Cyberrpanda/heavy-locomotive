import signup from "../assets/1200 (5).webp";

export default function Signup(){
    return (
      <>
        <section className="signup-section">
            <div className="signup-section__content">
              <figure className="signbio">
              <img src={signup} alt="regdis" className="regdis" />
              </figure>  

              

            

            <form action="" className="form">
                  <div className="form-fields">
                  <label htmlFor="" >Fullname</label>
                  <input type="text"  className="form-control"  placeholder="Fullname"/>
                  </div>
                  
                  <div className="form-fields">
                  <label htmlFor="" >Email Address</label>
                  <input type="email" className="form-control"  placeholder="Client@gmail.com"/>
                  </div>
                  
                  <div className="form-fields">
                  <label htmlFor="" >Confirm Email Address</label>
                  <input type="email" className="form-control"  placeholder="Client@gmail.com"/>
                  </div>
                  
                  <div className="form-fields">
                  <label htmlFor="" >Password</label>
                  <input type="password"  className="form-control" placeholder="*******" />
                  </div>
                  
                  <div className="form-fields">
                  <label htmlFor="" >Confirm Password</label>
                  <input type="password" className="form-control" placeholder="*******" />
                  </div>
                  
                  <div className="form-fields">
                  <label htmlFor="" >Date of Birth</label>
                  <input type="date" className="form-control" />
                  </div>
                  
                  <div className="form-fields">
                  <label htmlFor="" >Gender</label>
                  <select className="form-control">
                    
                  <option value="0"></option>
                  <option value="1">Male</option>
                  <option value="2">Female</option>
                  <option value="3">Other</option>
                  </select>
                  </div>
                  
                  
                  <button type="submit" className=" btn--success">Submit</button>
            </form>
                


            </div>
        </section>
        </>
    )
}