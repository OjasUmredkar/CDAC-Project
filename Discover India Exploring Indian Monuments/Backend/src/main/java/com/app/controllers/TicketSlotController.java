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

import com.app.dto.TicketSlotDto;
import com.app.entities.TicketSlot;
import com.app.service.TicketSlotServiceImp;

@RestController
@RequestMapping("/ticketSlot")
public class TicketSlotController {

	@Autowired
	private TicketSlotServiceImp slotServ;
	
	public TicketSlotController() {
		System.out.println("in ticketSlot Controller");
	}
	@PostMapping("/addSlot")
	public ResponseEntity<?> addSlot(@RequestBody TicketSlotDto ticketslot){
		return new ResponseEntity<>(slotServ.addSlot(ticketslot),HttpStatus.CREATED);
	}
	
	@GetMapping
	public ResponseEntity<?> getAllSlots(){
		return new ResponseEntity<>(slotServ.getAllSlot(),HttpStatus.ACCEPTED);
	}
	
	@DeleteMapping
	public ResponseEntity<?> deleteSlotById(@RequestParam Long id)
	{
		return new ResponseEntity<>(slotServ.deleteSlotById(id),HttpStatus.OK);
	}
}
