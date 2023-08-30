package com.app.service;

import com.app.dto.PaymentDto;
import com.app.entities.Payment;

public interface PaymentService {
	
	
	
	public String deletPaymentById(Long id);
	
	public void deleteByBookingId(Long id);

	public Payment doPayment(PaymentDto paymentdto);

}
