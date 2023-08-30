package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;

import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "reviews")
public class Review extends BaseEntity{
  
    
	 @ManyToOne
	    @JoinColumn(name = "booking_id")
	    private Booking booking;
	    @Column
	    private int rating;
	    @Column
	    private String reviewText;
    
  
}


