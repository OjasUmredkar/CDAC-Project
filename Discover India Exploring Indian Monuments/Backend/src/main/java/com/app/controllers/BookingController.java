package com.app.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.BookingDto;

import com.app.service.BookingServiceImp;

@RestController
@RequestMapping("/Booking")
public class BookingController {

	@Autowired
	private BookingServiceImp bookServ;
	
	public BookingController() {
		System.out.println("in Booking Controller");
	}
	
	@PostMapping("/Booking")
	public ResponseEntity<?> bookTicket(@RequestBody BookingDto booking){
	 {
			return new ResponseEntity<>(bookServ.bookTicket(booking),HttpStatus.CREATED);
		}
		
	}
	
	@DeleteMapping("id")
	public ResponseEntity<?> deleteById(@RequestParam Long id){
		return new ResponseEntity<>(bookServ.cancelBooking(id),HttpStatus.OK);
	}
	
	@GetMapping("/userid")
	public ResponseEntity<?> getByUserId(@RequestParam Long id){
		return new ResponseEntity<>(bookServ.getByUserid(id),HttpStatus.ACCEPTED);
	}
}
