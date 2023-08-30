package com.app.service;


import java.time.LocalTime;
import java.util.List;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.CustomException;
import com.app.dto.TicketSlotDto;
import com.app.entities.Monument;
import com.app.entities.TicketSlot;
import com.app.repository.TicketSlotRepository;
@Service
@Transactional
public class TicketSlotServiceImp implements TicketSloteService {
	
	@Autowired
	private TicketSlotRepository tickRepo;
	@Autowired
	private ModelMapper mapper;
	@Autowired
	private MonumentServiceImp monumentService;

	
	@Override
	public TicketSlot addSlot(TicketSlotDto ticketSlotdto) {
	    if (ticketSlotdto.getStartTime().isAfter(ticketSlotdto.getEndTime())) {
	        throw new IllegalArgumentException("Start time should be before the end time");
	    }

	    Monument monument = monumentService.getMonumentById(ticketSlotdto.getMonument_id());
	    if(monument==null) {
	    	throw new CustomException("Invalid Monument");
	    }

	    List<TicketSlot> existingSlots = tickRepo.findByMonument(monument);

	    for (TicketSlot existingSlot : existingSlots) {
	        if (checkTimeOverlap(existingSlot.getStartTime(), existingSlot.getEndTime(),
	                ticketSlotdto.getStartTime(), ticketSlotdto.getEndTime())) {
	            throw new IllegalArgumentException("Time slot overlaps with an existing slot");
	        }
	    }

	    TicketSlot ticketSlot = mapper.map(ticketSlotdto, TicketSlot.class);
	    ticketSlot.setMonument(monument);
	    return tickRepo.save(ticketSlot);
	}

	private boolean checkTimeOverlap(LocalTime start1, LocalTime end1, LocalTime start2, LocalTime end2) {
	    return (start1.isBefore(end2) && end1.isAfter(start2)) || (start2.isBefore(end1) && end2.isAfter(start1));
	}


	@Override
	public String deleteSlotById(Long id) {
		if(tickRepo.existsById(id)) {
		 tickRepo.deleteById(id);
		 return tickRepo.findById(id)+"Slote deleted successfully";
		}
		return "invalid Slot id";
	}

	@Override
	public List<TicketSlot> getAllSlot() {
		
		return tickRepo.findAll();
	}

	@Override
	public TicketSlot getById(Long id) {
		
		return tickRepo.findById(id).orElseThrow(()-> new CustomException("Invalid id"));
	}

}
