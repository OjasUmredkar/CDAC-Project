package com.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Review;

public interface ReviewRepository extends JpaRepository<Review, Long> {


    
}
