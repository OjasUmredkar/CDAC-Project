import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

function BillDisplay() {
    const [booking, setBooking] = useState({
        user_id: "",
        bookForDate: "",
        ticketSlot_id: "",
        numTickets: ""
    });

    const [ticketSlot, setTicketSlot] = useState(null);

    const history = useHistory();

    useEffect(() => {
        const bookingDetails = JSON.parse(sessionStorage.getItem("booking-details"));

        if (bookingDetails) {
            setBooking(bookingDetails);
        }
    }, []);

    useEffect(() => {
        const fetchTicketSlot = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/ticketSlot/ticketSlotbyid?id=${booking.ticketSlot_id}`);
                setTicketSlot(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        if (booking.ticketSlot_id) {
            fetchTicketSlot();
        }
    }, [booking.ticketSlot_id]);

    const displayRazorPay = async (amount) => {
        const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');
        if (!res) {
            alert("You are offline...Failed to load");
            return;
        }

        const options = {
            key: "rzp_test_B8YvLhOZZ6Q1a8",
            currency: "INR",
            amount: amount * 100,
            name: "Discover India: Exploring Indian Monuments",
            description: "Thanks for Booking Tickets",
            handler: async function (response) {
                try {
                    // Step 1: Make the booking request
                    const bookingResponse = await axios.post("http://localhost:8080/booking/booking", booking);
                    console.log("Booking response:", bookingResponse.data);

                    // Step 2: Update the payment object with the booking ID
                    const paymentData = { booking_id: bookingResponse.data.id };

                    // Step 3: Make the payment request
                    const paymentResponse = await axios.post("http://localhost:8080/payment", paymentData);
                    console.log("Payment response:", paymentResponse.data);

                    // Step 4: Navigate to the payment success page
                    history.push("/pay");
                } catch (error) {
                    console.error("Error during payment:", error);
                    // Handle the error, show an error message, etc.
                }
            },
            prefill: {
                name: "Discover India: Exploring Indian Monuments"
            }
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    };

    const loadScript = (src) => {
        return new Promise((resolve) => {
            const script = document.createElement('script');
            script.src = src;

            script.onload = () => {
                resolve(true);
            };

            script.onerror = () => {
                resolve(false);
            };

            document.body.appendChild(script);
        });
    };

    return (
        <div className="container">
            <div>
                {ticketSlot ? (
                    <div>
                        <blockquote className="blockquote mb-0 my-5">
                            <h1 className='textcolor2'><center>Total Bill</center></h1>
                            <div align="center">
                                User Id: {booking.user_id}<br />
                                Date: {booking.bookForDate}<br />
                                Slot Id: {booking.ticketSlot_id}<br />
                                Number Of Tickets: {booking.numTickets}<br />
                                <b>Total: </b> Rs. {ticketSlot.ticketPrice * booking.numTickets}<br /><br />
                                <button type="button" className='btn btn-primary' onClick={() => { displayRazorPay(ticketSlot.ticketPrice * booking.numTickets) }}>Pay</button><br />
                            </div><br /><br />
                        </blockquote>
                    </div>
                ) : (
                    <div>Loading...</div>
                )}
            </div>
        </div>
    );
}

export default BillDisplay;
