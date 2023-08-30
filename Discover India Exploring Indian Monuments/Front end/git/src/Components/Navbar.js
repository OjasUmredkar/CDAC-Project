import React from "react";
import { Link, useHistory } from "react-router-dom";

function Navbar() {
    const history = useHistory();
    

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-danger ">
                <div className="container">
                    
                    
                       <h2 className="textcolor"><center>Discover India :  Exploring Indian Monuments</center></h2> 
                   
                   
                       
                     
                    
                </div>
                
                    
                
            </nav>
        </>
    );
}

export default Navbar;
