package com.app.service;

import java.util.List;

import com.app.entities.Review;

public interface ReviewService {

	public  Review giveReview(Review review);
	
	public String deleteReviewById(Long id);
	


	public List<Review> getAllReviewByUserId();
		
	
}
