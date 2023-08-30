import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserBookings() {
    const [bookings, setBookings] = useState([]);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = JSON.parse(sessionStorage.getItem('user-token'));
        setUser(storedUser);

        if (storedUser) {
            const fetchBookings = async () => {
               
                     await axios.get(`http://localhost:8080/booking/userid?id=${storedUser.id}`)
                    .then(response=>{setBookings(response.data)
                    console.log(response.data);})
                    .catch( error=>console.log(error));
                  
               
            };

            fetchBookings();
        }
    }, []);

    const cancelBooking = async(id)=>{
        await axios.delete(`http://localhost:8080/booking/id?id=${id}`)
        .then(resp=>{alert(resp.data)
            const updatedBookings = bookings.filter(booking => booking.id !== id);
            setBookings(updatedBookings);
        })
        .catch(err=>console.log(err));
    }


    return (
        <>
            <div className="container">
                <h1 className='text-center my-3'>All User Bookings</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Booking Date</th>
                            <th scope="col">Ticket Slot Start Time</th>
                            <th scope="col">Ticket Slot End Time</th>
                            <th scope="col">Monument Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map((booking) => (
                            <tr key={booking.id}>
                                <th scope="row">{booking.id}</th>
                                <td>{booking.bookForDate}</td>
                                <td>{booking.ticketSlot.startTime}</td>
                                <td>{booking.ticketSlot.endTime}</td>
                                <td>{booking.ticketSlot.monument.name}</td>
                                <td><button className='btn btn-danger' onClick={()=>cancelBooking(booking.id)}> Cancel  </button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default UserBookings;
