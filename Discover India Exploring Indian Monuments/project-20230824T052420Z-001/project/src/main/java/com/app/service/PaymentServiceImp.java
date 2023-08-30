package com.app.service;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dto.PaymentDto;
import com.app.entities.Booking;
import com.app.entities.Payment;
import com.app.repository.PaymentRepository;
@Service
@Transactional
public class PaymentServiceImp implements PaymentService {
	
	@Autowired
	private PaymentRepository payRepo;
	@Autowired
	private ModelMapper mapper;
	@Autowired
	private BookingService bookingservice;

	@Override
	public Payment doPayment(PaymentDto paymentdto) {
		Payment payment = mapper.map(paymentdto, Payment.class);
		if(payment.getBooking()==null) {
			 new ResourceNotFoundException("Invalid booking id");
		}
		Booking booking = bookingservice.findById(paymentdto.getBooking_id());
		payment.setAmount(booking.getNumTickets()*booking.getTicketSlot().getTicketPrice());
		
		payment.setBooking(booking);
		return payRepo.save(payment);
	}

	@Override
	public String deletPaymentById(Long id) {
		
		if(payRepo.existsById(id)) {
			payRepo.deleteById(id);
			return "Deleted successfully";
			}
		return "Invalid id";

	}

	@Override
	public void deleteByBookingId(Long id) {
		Booking booking = bookingservice.findById(id);
		payRepo.deleteByBooking(booking);
		
		

	}

}
