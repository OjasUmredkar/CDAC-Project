package com.app.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.entities.Review;
import com.app.service.ReviewService;
import com.app.service.ReviewServiceImp;

@RestController
@RequestMapping("/reviews")
@CrossOrigin("http://localhost:3000")
public class ReviewController {
	
	@Autowired
	private ReviewService reviewServ;
	
	@PostMapping
	public ResponseEntity<?> giveReviw(@RequestBody Review review)
	{
		return new ResponseEntity<>(reviewServ.giveReview(review),HttpStatus.CREATED);
	}
	
	@DeleteMapping
	public ResponseEntity<?> deleteReviewById(@RequestParam Long id){
		return new ResponseEntity<>(reviewServ.deleteReviewById(id),HttpStatus.OK);
	}

}
