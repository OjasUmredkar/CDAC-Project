import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import DisplayTicketSlots from './DisplayTicketSlots';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function BookTickets() {
  let { id } = useParams();

  const [user, setUser] = useState({
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    address: ''
  });

  const [booking, setBooking] = useState({
    user_id: JSON.parse(sessionStorage.getItem('user-token')).id,
    bookForDate: '',
    ticketSlot_id: '',
    numTickets: ''
  });

  const history = useHistory();

  useEffect(() => {
    const userData = JSON.parse(sessionStorage.getItem('user-token'));
    setUser(userData);
  }, []);

  const validateForm = () => {
    const currentDate = new Date().toISOString().split('T')[0];

    if (!booking.bookForDate) {
      alert('Booking Date is required');
      return false;
    }

    if (booking.bookForDate < currentDate) {
      alert('Booking Date must be after the current date');
      return false;
    }

    if (!booking.ticketSlot_id) {
      alert('Slot ID is required');
      return false;
    }

    if (!booking.numTickets) {
      alert('Number of People is required');
      return false;
    } else if (booking.numTickets <= 0) {
      alert('Number of People must be greater than 0');
      return false;
    }

    return true;
  };

  const handlePayAndBook = (e) => {
    e.preventDefault();

    if (validateForm()) {
      sessionStorage.setItem('booking-details', JSON.stringify(booking));
      history.push('/billdisplay');
    }
  };

  return (
    <>
      <div className="image"
        style={{
          backgroundImage:
            'url("https://cdn.iconscout.com/wordpress/2020/08/Illu-create-1.png?f=webp&w=1600")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}>
        <DisplayTicketSlots id={id} /><br /><br />
        <h1 className='textwhite'><center>Booking Ticket...</center></h1>
        <div className="container">

          <form onSubmit={handlePayAndBook}>
            <div className="form-row ">
              <div className="form-group col-md-8 ">
                <b className='textwhite'>User Id:</b>
                <input type="number" className="form-control" value={user.id} disabled />
              </div><br />
              <div className="form-group col-md-8 ">
                <b className='textwhite'>Booking Date:</b>
                <input
                  type="date"
                  className="form-control"
                  value={booking.bookForDate}
                  onChange={(e) => { setBooking({ ...booking, bookForDate: e.target.value }) }}
                />
              </div><br />
              <div className="form-group col-md-8 ">
                <b className='textwhite'>Slot ID:</b>
                <input
                  type="number"
                  className="form-control"
                  value={booking.ticketSlot_id}
                  onChange={(e) => { setBooking({ ...booking, ticketSlot_id: e.target.value }) }}
                />
              </div><br />
              <div className="form-group col-md-8">
                <b className='textwhite'>Number of People:</b>
                <input
                  type="number"
                  className="form-control"
                  value={booking.numTickets}
                  onChange={(e) => setBooking({ ...booking, numTickets: e.target.value })}
                />
              </div>
            </div><br />
            <div className="form-group col-md-8">
              <button type="submit" className="btn btn-info my-3 " > Pay & Book </button><br /><br />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default BookTickets;
