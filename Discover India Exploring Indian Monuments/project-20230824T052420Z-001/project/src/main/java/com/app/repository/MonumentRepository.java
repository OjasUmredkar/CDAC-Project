package com.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Monument;

public interface MonumentRepository extends JpaRepository<Monument, Long> {
    // You can add custom query methods here if needed
	
	List<Monument> findByCity(String City);
}
