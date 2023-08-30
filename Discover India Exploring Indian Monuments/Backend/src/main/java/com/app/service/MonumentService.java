package com.app.service;

import java.util.List;

import com.app.entities.Monument;

public interface MonumentService {
	
	public Monument addMonument(Monument monument);
	
	public String deleteMonument(Long id);
	
	public List<Monument> getMonumentByCity(String city);
	
	public Monument getMonumentById(Long id);

}
