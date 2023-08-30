package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.entities.Review;
import com.app.repository.ReviewRepository;
@Service
@Transactional
public class ReviewServiceImp implements ReviewService {
	@Autowired
	private ReviewRepository reviewRepo;
	@Override
	public Review giveReview(Review review) {
		
		return reviewRepo.save(review);
	}

	@Override
	public String deleteReviewById(Long id) {
		if(reviewRepo.existsById(id)) {
			 reviewRepo.deleteById(id);
			 return "Delete Successfully";
		}
		
		return "Invalid id";
	}

	@Override
	public List<Review> getAllReviewByUserId() {
		
		return reviewRepo.findAll();
	}

}
