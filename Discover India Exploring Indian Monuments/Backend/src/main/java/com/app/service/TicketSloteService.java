package com.app.service;

import java.util.List;

import com.app.dto.TicketSlotDto;
import com.app.entities.TicketSlot;

public interface TicketSloteService {
	
	public TicketSlot addSlot(TicketSlotDto ticketSlot);
	
	public String deleteSlotById(Long id);
	
	public List<TicketSlot> getAllSlot();
	
	public TicketSlot getById(Long id);

	

}
