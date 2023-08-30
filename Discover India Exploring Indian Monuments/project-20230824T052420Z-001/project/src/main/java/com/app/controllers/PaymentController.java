package com.app.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.PaymentDto;
import com.app.service.PaymentService;

@RestController
@RequestMapping("/payment")
@CrossOrigin("http://localhost:3000")
public class PaymentController {
	@Autowired
	PaymentService payserv;
	
	public PaymentController() {
		System.out.println("in payment controller");
	}
	@PostMapping
	public ResponseEntity<?> doPayment(@RequestBody PaymentDto paymentdto)
	{
		return new ResponseEntity<>(payserv.doPayment(paymentdto),HttpStatus.CREATED);
	}
//	@DeleteMapping("id")
//	public ResponseEntity<?> deleteById(@RequestParam Long id){
//		return new ResponseEntity<>(payserv.deletPaymentById(id),HttpStatus.OK);
//	}
	
//	@DeleteMapping("/bookingid")
//	public ResponseEntity<?> deleteByBookingId(@RequestParam Long Bookingid){
//		return new ResponseEntity<>(payserv.deleteByBookingId(Bookingid),HttpStatus.OK);
//	}
//	
}
