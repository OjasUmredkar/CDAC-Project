import axios from 'axios';
import React from 'react'
import { useEffect,useState } from 'react';
function DisplayTicketSlots(props) {

    const [ticketSlots, setTicketSlots] = useState([]);

    useEffect(() => {

        axios.get(`http://localhost:8080/ticketSlot/ticketSlot?id=${props.id}`)
        .then(res => setTicketSlots(res.data))
        .catch(error => console.error(error));
    
           
    },[]);
    
    
  return (
    <>
        <div className="container">
                <h1 className='text-center textwhite'>All Ticket Slots for Your Visit</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">START TIME</th>
                            <th scope="col">END Name</th>
                            <th scope="col">TICKET PRICE</th>
                                                       
                        </tr>
                    </thead>
                    <tbody>
                        { ticketSlots.map((t)=>(
                             <tr key={t.id}>
                             <th scope="row">{t.id}</th>
                             <td>{t.startTime}</td>
                             <td>{t.endTime}</td>
                             <td>{t.ticketPrice}</td>                            
                         </tr>
                        ))
                           
                        }

                    </tbody>
                </table>

            </div> 
    </>
  )
}

export default DisplayTicketSlots