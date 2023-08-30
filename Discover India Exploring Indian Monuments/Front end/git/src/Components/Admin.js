import React from 'react'
import { Link } from 'react-router-dom'

function Admin() {
    return (
        <>
            <div className="container text-center my-5">
            <h1><center>Admin</center></h1><br />
                <Link to="/addmonument" className="btn btn-info">Add Monument</Link>&nbsp;&nbsp;&nbsp;
                <Link to="/getallmonuments" className="btn btn-info">Get All Monuments</Link>&nbsp;&nbsp;&nbsp;
                <Link to="/addtimeslot" className="btn btn-info">Add Time Slot</Link>&nbsp;&nbsp;&nbsp;
                <Link to="" className="btn btn-info">Get Time Slots</Link>&nbsp;&nbsp;&nbsp;
                <Link to="" className="btn btn-info">Get all Bookings</Link>&nbsp;&nbsp;&nbsp;
                <Link to="/allusers" className="btn btn-info">Get All users </Link>&nbsp;&nbsp;&nbsp;<br/>
                

            </div><br/><br/><br/>
            <div className="container text-center my-5">
                <Link to="/" className="btn btn-info">Logout</Link>
            </div>
        </>
    )
}

export default Admin