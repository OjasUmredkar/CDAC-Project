package com.app.service;

import java.time.LocalDate;
import java.util.List;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dto.BookingDto;
import com.app.dto.UserDto;
import com.app.entities.Booking;
import com.app.entities.TicketSlot;
import com.app.entities.User;
import com.app.repository.BookingRepository;
@Service
@Transactional
public class BookingServiceImp implements BookingService{
	@Autowired
	private BookingRepository bookRepo;
	private TicketSlot ticketSlot;
	@Autowired
	private UserServiceImp userimp;
	@Autowired
	private TicketSlotServiceImp ticketimp;
	@Autowired
 private ModelMapper mapper;

	@Override
	public Booking bookTicket(BookingDto bookingdto) {
		Booking booking = mapper.map(bookingdto, Booking.class);
		if( booking.getBookForDate().isBefore(LocalDate.now()))
		{
			throw new ResourceNotFoundException("Can not book ticket");
		}
		
		UserDto user = userimp.getUserById(bookingdto.getUser_id());
	    if (user == null) {
	        throw new ResourceNotFoundException("User not found");
	    }
	    booking.setUser(mapper.map(user, User.class));

	    TicketSlot ticketSlot = ticketimp.getById(bookingdto.getTicketSlot_id());
	    if (ticketSlot == null) {
	        throw new ResourceNotFoundException("Ticket slot not found");
	    }
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
		
		UserDto userdto = userimp.getUserById(id);
		User user=mapper.map(userdto, User.class);
		return bookRepo.findByUser(user);
	}

	@Override
	public Booking findById(Long booking_id) {
		
		return bookRepo.findById(booking_id).orElseThrow(()->new ResourceNotFoundException("Booking not found"));
	}


}
