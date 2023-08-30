import React from 'react'
import { Link } from 'react-router-dom'
function SuccessfullPayment() {
  return (
    <>
    <div className="image"
        style={{
          backgroundImage:
            'url("https://media.istockphoto.com/id/607997854/vector/india-vector-illustration.jpg?s=612x612&w=0&k=20&c=UK9tYgvSINaYnazo3ty_eWv5w-G4mctoBBayf64bUX8=")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}>
    <br/><br/>
        <div className="container">
            <div className="my-3">
                <h1 className='textgreen'><center>Payment is Successfull...!!!</center></h1>
            </div>            
        </div>
        <br/><br/><br/><br/><br/>
        <div className="container text-center">
            <Link to="/monuments" className="btn btn-primary ">Home</Link>
        </div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        
        </div>
    </>
  )
}

export default SuccessfullPayment