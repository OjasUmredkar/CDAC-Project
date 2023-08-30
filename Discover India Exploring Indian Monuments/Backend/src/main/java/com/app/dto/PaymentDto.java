package com.app.dto;

import java.time.LocalDateTime;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;




@Setter
@Getter
@NoArgsConstructor
public class PaymentDto {
	
	 	private Long booking_id;
	    private LocalDateTime timestamp;
}
