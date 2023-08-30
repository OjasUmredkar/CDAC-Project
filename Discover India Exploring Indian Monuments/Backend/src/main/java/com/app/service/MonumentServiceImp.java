package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.CustomException;
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

	@Override
	public Monument getMonumentById(Long id) {
		
		return monuRepo.findById(id).orElseThrow(()-> new CustomException("Invalid id"));
	}

	


}
