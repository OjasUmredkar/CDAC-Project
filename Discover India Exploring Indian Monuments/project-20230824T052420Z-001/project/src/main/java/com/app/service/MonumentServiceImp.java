package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.entities.Monument;
import com.app.repository.MonumentRepository;
@Service
@Transactional
public class MonumentServiceImp implements MonumentService {
	@Autowired
	private MonumentRepository monuRepo;
	
	@Override
	public Monument addMonument(Monument monument) {
		return monuRepo.save(monument);
	}

	@Override
	public String deleteMonument(Long id) {
		
		 monuRepo.deleteById(id);
		 return "Delete successfully";
	}

	@Override
	public List<Monument> getMonumentByCity(String city) {
	
		return monuRepo.findByCity(city);
	}

	public List<Monument> getMonuments() {
		// TODO Auto-generated method stub
		return monuRepo.findAll();
	}

	@Override
	public Monument getMonumentById(long monument_id) {
		// TODO Auto-generated method stub
		return monuRepo.findById(monument_id).orElseThrow(()->new ResourceNotFoundException("Monument Not Found"));
	}

	
	
	


}
