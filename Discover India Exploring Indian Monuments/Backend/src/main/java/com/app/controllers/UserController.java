package com.app.controllers;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.app.dto.UserAuthDto;
import com.app.dto.UserDto;
import com.app.entities.Booking;
import com.app.entities.User;
import com.app.service.BookingServiceImp;
import com.app.service.UserServiceImp;

@RestController
@RequestMapping("/User")
public class UserController {
	
	@Autowired
	private UserServiceImp userServ;
	
	
	public UserController() {
		System.out.println("in user Controler");
	}
	
	@PostMapping
	public ResponseEntity<?> registorUser(@RequestBody User user)
	{
		return new ResponseEntity<>(userServ.RegistorUser(user),HttpStatus.CREATED);
	}
	
	@PostMapping("/signin")
	public ResponseEntity<?> authenticateUser(@RequestBody @Valid UserAuthDto request) {
		System.out.println("in auth emp " + request);
		return ResponseEntity.status(HttpStatus.OK)
				.body(userServ.authenticateUser(request));
		}
	@GetMapping
	public ResponseEntity<?> getAllUsers(){
		return new ResponseEntity<>(userServ.getAllUser(),HttpStatus.ACCEPTED);
	}

	
	
}
