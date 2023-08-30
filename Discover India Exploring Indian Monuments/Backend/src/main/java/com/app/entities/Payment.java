package com.app.entities;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "payments")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Payment extends BaseEntity{
   
    
    @OneToOne
    @JoinColumn(name = "booking_id")
    private Booking booking;
    @Column
    private double amount;
    @Column
    private LocalDateTime timestamp;
    
    
}
