import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
function AllUsers() {
    const [users, setUsers] = useState([]);
    useEffect(() => {

        axios.get(`http://localhost:8080/user`)
            .then(res => setUsers(res.data)).catch()
           
    },[]);




    return (
        <>
            <div className="container">
                <h1 className='text-center my-3'>All Users</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email</th>
                            
                            <th scope="col">Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        { users.map((user)=>(
                             <tr key={user.id}>
                             <th scope="row">{user.id}</th>
                             <td>{user.firstName}</td>
                             <td>{user.lastName}</td>
                             <td>{user.email}</td>
                             
                             <td>{user.address}</td>
                         </tr>
                        ))
                           
                        }

                    </tbody>
                </table>

            </div>
        </>
    )
}

export default AllUsers

