package com.app.entities;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;

import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
@Entity
@Table(name = "monuments")
public class Monument extends BaseEntity {
		@Column
	 	private String name;
		@Column
	    private String description;
		@Column
	    private String city;
		@Column
	    private String state;
		@Column
	    private String historicalPeriod;
	    // Other monument attributes
	    @JsonIgnore
	    @OneToMany(mappedBy = "monument",orphanRemoval = true)
	    private List<TicketSlot> ticketSlots;
	    
    
    // Getters and setters
}


