package com.app.dto;


import java.time.LocalTime;

import com.fasterxml.jackson.annotation.JsonFormat;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class TicketSlotDto {
	@JsonFormat(pattern = "HH:mm:ss")
    private LocalTime startTime;
	@JsonFormat(pattern = "HH:mm:ss")
    private LocalTime endTime;
   
    private double ticketPrice;
    private Long monument_id;

    // Constructors, getters, setters
}

