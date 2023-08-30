package com.app.dto;

import java.time.LocalDate;


import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class BookingDto {
	@Id // PK
	@GeneratedValue(strategy = GenerationType.IDENTITY) // auto generation of ids : auto_increment
	private Long id;
	
	private Long user_id;
    private LocalDate bookForDate;
    
    private Long ticketSlot_id;
  
    private int numTickets;
    
    
}
