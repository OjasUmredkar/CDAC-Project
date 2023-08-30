package com.app.controllers;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.PasswordEncryption;
import com.app.dto.UserAuthDto;
import com.app.dto.UserDto;
import com.app.entities.Booking;
import com.app.entities.User;
import com.app.service.BookingServiceImp;
import com.app.service.UserService;
import com.app.service.UserServiceImp;

@RestController
@RequestMapping("/user")
@CrossOrigin("http://localhost:3000")
public class UserController {
	
	@Autowired
	private UserService userServ;
	
	
	public UserController() {  
		System.out.println("in user Controler");
	}
	
	@PostMapping
	public ResponseEntity<?> registorUser(@RequestBody UserDto userdto)
	{	
		return new ResponseEntity<>(userServ.registerUser(userdto),HttpStatus.CREATED);
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
	 
	@GetMapping("/user")
	public ResponseEntity<?> findUserId(@PathVariable Long id){
		return ResponseEntity.status(HttpStatus.OK).body(userServ.getUserById(id));
	}
	
	@PutMapping
	public ResponseEntity<?> updateUser(@RequestBody UserDto userdto)
	{
		return new ResponseEntity<>(userServ.updateUser(userdto),HttpStatus.CREATED);
	}
	

	
	
}
