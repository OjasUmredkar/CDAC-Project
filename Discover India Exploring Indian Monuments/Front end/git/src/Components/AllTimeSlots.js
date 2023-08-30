import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AllTimeSlots() {
    const [timeSlots, setTimeSlots] = useState([]);

    useEffect(() => {
        // Fetch timeslots from the server
        axios.get('http://localhost:8080/ticketSlot')
            .then(response => {
                setTimeSlots(response.data);
            })
            .catch(error => {
                console.error('Error fetching timeslots:', error);
            });
    }, []);

    return (
        <div className="container">
            <h2>All Time Slots</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Start Time</th>
                        <th>End Time</th>
                        <th>Ticket Price</th>
                        <th>Monument ID</th>
                    </tr>
                </thead>
                <tbody>
                    {timeSlots.map(timeSlot => (
                        <tr key={timeSlot.id}>
                            <td>{timeSlot.startTime}</td>
                            <td>{timeSlot.endTime}</td>
                            <td>{timeSlot.ticketPrice}</td>
                            <td>{timeSlot.monument.id}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AllTimeSlots;
