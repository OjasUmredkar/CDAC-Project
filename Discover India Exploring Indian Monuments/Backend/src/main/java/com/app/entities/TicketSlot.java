package com.app.entities;


import java.sql.Time;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;

import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;



@Entity
@Table(name = "ticket_slots")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class TicketSlot extends BaseEntity {
		
		@Column
		@DateTimeFormat(pattern="HH:mm:ss")
	    private LocalTime startTime;
		@Column
		@DateTimeFormat(pattern = "HH:mm:ss")
	    private LocalTime endTime;
		
		@Column
	    private double ticketPrice;
	    
	    @ManyToOne
	    @JoinColumn(name = "monument_id")
	    private Monument monument;
	    @JsonIgnore
	    @OneToMany(mappedBy = "ticketSlot")
	    private List<Booking> bookings;
    
    
}


