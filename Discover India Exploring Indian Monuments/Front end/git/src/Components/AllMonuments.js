import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react';
function AllMonuments() {
    const [monuments, setmonuments] = useState([])
    useEffect(() => {

        axios.get(`http://localhost:8080/monument`)
            .then(res => setmonuments(res.data)).catch()
           
    },[]);
    
  return (
    <>
        <div className="container">
                <h1 className='text-center my-3'>All Monuments</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Description</th>
                            <th scope="col">City</th>
                            <th scope="col">State</th>
                            <th scope="col">Historical Period</th>
                        </tr>
                    </thead>
                    <tbody>
                        { monuments.map((monument)=>(
                             <tr key={monument.id}>
                             <th scope="row">{monument.id}</th>
                             <td>{monument.name}</td>
                             <td>{monument.description}</td>
                             <td>{monument.city}</td>
                             <td>{monument.state}</td>
                             <td>{monument.historicalPeriod}</td>
                         </tr>
                        ))
                           
                        }

                    </tbody>
                </table>

            </div>
    </>
  )
}

export default AllMonuments