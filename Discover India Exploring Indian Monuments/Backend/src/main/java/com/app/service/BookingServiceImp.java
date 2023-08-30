package com.app.service;

import java.time.LocalDate;
import java.util.List;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.CustomException;
import com.app.dto.BookingDto;

import com.app.entities.Booking;

import com.app.entities.TicketSlot;
import com.app.entities.User;
import com.app.repository.BookingRepository;
@Service
@Transactional
public class BookingServiceImp implements BookingService{
	@Autowired
	private BookingRepository bookRepo;

	@Autowired
	private UserService userimp;
	@Autowired
	private TicketSloteService ticketimp;
	@Autowired
	private ModelMapper mapper;

	

	@Override
	public Booking bookTicket(BookingDto bookingdto) {
		Booking booking = mapper.map(bookingdto, Booking.class);
		if( booking.getBookForDate().isBefore(LocalDate.now()))
		{
			throw new CustomException("Can not book ticket");
		}
		
		User user = userimp.getUserById(bookingdto.getUser_id());
	    booking.setUser(user);
	    TicketSlot ticketSlot = ticketimp.getById(bookingdto.getTicketSlot_id());
	    booking.setTicketSlot(ticketSlot);
	    return bookRepo.save(booking);
	     
	
	}

	@Override
	public String cancelBooking(Long id) {
		if(bookRepo.existsById(id)) {
			bookRepo.deleteById(id);
			
			
			return "Ticket Cancelled Successfully";
			
		}
		
		return "invalid booking id";
	}

	@Override
	public List<Booking> getByUserid(Long id) {
		
		User user = userimp.getUserById(id);
		return bookRepo.findByUser(user);
	}

	@Override
	public Booking findById(Long id) {
		
		return bookRepo.findById(id).orElseThrow(()->  new CustomException("invalid Booking id"));
	}
	
	

}
