import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import AllMonuments from './AllMonuments';
import AllTimeSlots from './AllTimeSlots';

function AddTimeSlot() {
    const [ticketSlot, setTicketSlot] = useState({
        startTime: '',
        endTime: '',
        ticketPrice: 0,
        monument_id: 0
    });
    const history=useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:8080/ticketSlot/addSlot`,ticketSlot).then(resp=>{
        console.log(resp.data);
        history.push("/adminOperations");
        }).catch(err=>{console.log(err)});
        console.log('Form submitted:', ticketSlot);
    };

    

    return (
        <>
        <div className='container'>
            <AllMonuments/>
            <AllTimeSlots/>
            
            <h2><center>Enter Ticket Slot Details</center></h2>
            <form onSubmit={handleSubmit}>
                Start Time:
                <input type="time" id="startTime" className="form-control" value={ticketSlot.startTime} onChange={(e)=>{setTicketSlot({...ticketSlot, startTime:e.target.value})}} required /><br />

                End Time:
                <input type="time" id="endTime" className="form-control" value={ticketSlot.endTime} onChange={(e)=>{setTicketSlot({...ticketSlot, endTime:e.target.value})}} required /><br />

                Ticket Price:
                <input type="number" id="ticketPrice" className="form-control" value={ticketSlot.ticketPrice} onChange={(e)=>{setTicketSlot({...ticketSlot, ticketPrice:e.target.value})}} required /><br />

                Monument ID:
                <input type="number" id="monument_id" className="form-control" value={ticketSlot.monument_id} onChange={(e)=>{setTicketSlot({...ticketSlot, monument_id:e.target.value})
            console.log(e.target.value);}} required /><br />

                <button type="submit" className='btn btn-primary'>Submit</button>
            </form>
        </div>
        </>
    );
}

export default AddTimeSlot;
