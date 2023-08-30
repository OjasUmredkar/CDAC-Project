package com.app.service;


import java.util.List;

import com.app.dto.UserAuthDto;

import com.app.entities.User;

public interface UserService {
	
	public User RegistorUser(User user);
	
	public User authenticateUser(UserAuthDto request);
	
	public List<User> getAllUser();

	public User getUserById(Long id) ;
	
	
}
