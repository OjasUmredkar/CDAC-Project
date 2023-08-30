package com.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.dto.TicketSlotDto;
import com.app.entities.Monument;
import com.app.entities.TicketSlot;

public interface TicketSlotRepository extends JpaRepository<TicketSlot, Long> {

	TicketSlot save(TicketSlotDto ticketSlot);
   List<TicketSlot> findByMonument(Monument monument);
}

