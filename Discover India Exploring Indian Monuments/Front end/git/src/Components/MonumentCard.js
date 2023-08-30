// import PropTypes from "prop-types";
// import React, { Component } from "react";
// import { Link, Route, Router } from "react-router-dom";
// import DisplayMonument from "./DisplayMonument";
// export class MonumentCard extends Component {
//   render() {
//     let {  mon } = this.props;
//     console.warn(this.props)
//     return (

        
//       <>
//         <div className="container">
      
//           <div className="my-7">
//             <div className="card" style={{ width: "18rem" }}>
//               <img className="card-img-top" src={mon.image} alt="Card image cap" />
//               <div className="card-body">
//                 <h5 className="card-title">{mon.name}</h5>
//                 <p className="card-text">{mon.description.substring(0,200)}...</p>
//                 <a href={"/monument/"+ mon.id} className="btn btn-primary">
//                   Read More
//                 </a>
//                 &nbsp;&nbsp;&nbsp;
//                 <a href="" className="btn btn-primary">
//                   Book Ticket
//                 </a>
                

                
//               </div>
//             </div>
//           </div>
          
                
//         </div>
//       </>
//     );
//   }
// }

// export default MonumentCard;



import React, { Component } from "react";
import { Link } from "react-router-dom";
import DisplayMonument from "./DisplayMonument";

class MonumentCard extends Component {
  render() {
    let { mon } = this.props;
    console.warn(this.props);
    return (
      <div className="my-7">
       
        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src={mon.image} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{mon.name}</h5>
            <p className="card-text">{mon.description.substring(0,200)}...</p>
            <Link
             to={"/monument/"+mon.id} className="btn btn-primary">
              Read More
            </Link>
            &nbsp;&nbsp;&nbsp;
            <Link to={"/bookticket/"+mon.id} className="btn btn-primary">
              Book Ticket
            </Link>
          </div>
          
        </div>
       
      </div>
    );
  }
}

export default MonumentCard;

