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
import com.app.entities.Monument;
import com.app.service.MonumentServiceImp;

@RestController
@RequestMapping("/Monument")
public class MonumentController {
	@Autowired
	private MonumentServiceImp monuServ;
	
	
	 public MonumentController() {
		System.out.println("In Monument Controller");
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
		return new ResponseEntity<>(monuServ.getMonumentByCity(city),HttpStatus.CREATED);
	}
	
	
	
	
}
