import Delivery from "./delivery";
import Purchase from "./purchase";
import Repair from "./repair";

export default function Card() {
    return (
    <div className="card">
      <div className="card-container">
        <div className="cards card-1">
           <Purchase className="svg"/>
           <span className="card-header">Purchase</span>
          <p>            
             Lorem, ipsum dolor sit amet
             consectetur adipisicing elit. 
             Aut repellendus quo dolore? 
          </p>
        </div>

        <div className="cards card-2">
          <Repair className="svg"/>
          <span className="card-header">Repair
          </span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, laboriosam saepe 
          </p>
        </div>

        <div className="cards card-3">
          <Delivery className="svg"/>
          <span className="card-header">Delivery </span>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus atque, ut a odit 
          </p>
        </div>
      </div>
    </div>
    )
}