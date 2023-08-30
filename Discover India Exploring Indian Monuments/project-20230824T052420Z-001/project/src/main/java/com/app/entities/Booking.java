package com.app.entities;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "bookings")
public class Booking extends BaseEntity{

    @JsonIgnore
	@ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
    @Column
    private LocalDate bookForDate;
    
	@ManyToOne 
    @JoinColumn(name = "slot_id")
    private TicketSlot ticketSlot;
    @Column
    private int numTickets;
   
    @JsonIgnore
    @OneToOne(mappedBy = "booking")
    private Payment payment;
    @JsonIgnore
    @OneToMany(mappedBy = "booking",fetch = FetchType.LAZY)
    private List<Review> reviews;
    
}


