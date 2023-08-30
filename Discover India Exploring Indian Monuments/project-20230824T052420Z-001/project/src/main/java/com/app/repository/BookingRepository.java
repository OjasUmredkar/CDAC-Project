package com.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.dto.BookingDto;
import com.app.entities.Booking;
import com.app.entities.User;

public interface BookingRepository extends JpaRepository<Booking, Long> {

	Booking save(BookingDto booking);
	List<Booking>findByUser(User user);

}

