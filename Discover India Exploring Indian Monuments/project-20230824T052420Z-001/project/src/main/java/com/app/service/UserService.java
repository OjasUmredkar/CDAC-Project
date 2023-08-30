package com.app.service;


import java.util.List;

import com.app.dto.UserAuthDto;
import com.app.dto.UserDto;
import com.app.entities.User;

public interface UserService {
	
	public UserDto registerUser(UserDto userdto);
	
	public User authenticateUser(UserAuthDto request);
	
	public List<User> getAllUser();

	public UserDto getUserById(Long id) ;

	public UserDto updateUser(UserDto userdto);

	
	
	
}
