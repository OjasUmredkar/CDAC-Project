package com.app.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.TicketSlotDto;
import com.app.entities.Monument;
import com.app.entities.TicketSlot;
import com.app.entities.User;
import com.app.service.MonumentService;
import com.app.service.MonumentServiceImp;
import com.app.service.TicketSlotServiceImp;

@RestController
@RequestMapping("/monument")
@CrossOrigin("http://localhost:3000")
public class MonumentController {
	@Autowired
	private MonumentService monuServ;
	
	
	 public MonumentController() {
		System.out.println("In Monument Controller");
	}
	 @GetMapping
	public ResponseEntity<?> getAllMonuments(){
		return ResponseEntity.status(HttpStatus.OK).body(monuServ.getMonuments());
	}
	
	@PostMapping
	public ResponseEntity<?> registorUser(@RequestBody Monument monument)
	{
		return new ResponseEntity<>(monuServ.addMonument(monument),HttpStatus.CREATED);
	}
	
	
	@DeleteMapping("/id")
	public ResponseEntity<?> deleteMonument(@RequestParam Long id){
		
		return new ResponseEntity<>(monuServ.deleteMonument(id),HttpStatus.OK);
	}
	
	@GetMapping("/city")
	public ResponseEntity<?> getMonumentsByCity(@RequestParam String city){
		return new ResponseEntity<>(monuServ.getMonumentByCity(city),HttpStatus.OK);
	}
	
	
	
	
}
