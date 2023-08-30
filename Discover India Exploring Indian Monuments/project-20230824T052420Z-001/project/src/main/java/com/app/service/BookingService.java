package com.app.service;

import java.util.List;

import com.app.dto.BookingDto;
import com.app.entities.Booking;

public interface BookingService {
	
	public Booking bookTicket(BookingDto bookingdto);
	
	public String cancelBooking(Long id);

	public List<Booking> getByUserid(Long id);

	public Booking findById(Long booking_id);

	
}
