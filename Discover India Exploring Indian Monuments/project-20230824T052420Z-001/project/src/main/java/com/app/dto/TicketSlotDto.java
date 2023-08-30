package com.app.dto;

import java.time.LocalDate;
import java.time.LocalTime;

import javax.persistence.Column;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.app.entities.Monument;

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
    private LocalTime startTime;
    private LocalTime endTime;
   
    private double ticketPrice;
    private long monument_id;

    
}

