package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.PasswordEncryption;
import com.app.custom_exceptions.*;

import com.app.dto.UserAuthDto;
import com.app.dto.UserDto;
import com.app.entities.User;
import com.app.repository.UserRepository;
@Service
@Transactional
public class UserServiceImp implements UserService {

	@Autowired
	private UserRepository userRepo;
	@Autowired
	private ModelMapper mapper;
	
	@Override
	public User authenticateUser(UserAuthDto request) {
		request.setPassword(PasswordEncryption.encryptPassword(request.getPassword()));
		User ur = userRepo.findByEmailAndPassword(request.getEmail(), request.getPassword())
				.orElseThrow(() -> new ResourceNotFoundException("Invalid Email or password"));
	//	UserAuthDto authRespDTO = mapper.map(ur, UserAuthDto.class);
		return ur;
		
	}
	@Override
	public UserDto registerUser(UserDto userdto) {
		userdto.setPassword(PasswordEncryption.encryptPassword(userdto.getPassword()));
		User user=mapper.map(userdto, User.class);
		return mapper.map(userRepo.save(user), UserDto.class);
	}
	@Override
	public List<User> getAllUser() {
		return userRepo.findAll();
	}
	@Override
	public UserDto getUserById(Long id) {
		
		return mapper.map(userRepo.findById(id).orElseThrow(()->new ResourceNotFoundException("Invalid Emp ID , Can't get emp details!!!!")), UserDto.class);
	}
	@Override
	public UserDto updateUser(UserDto userdto) {
		
		
		User user=mapper.map(userdto, User.class);
		return mapper.map(userRepo.save(user), UserDto.class);
	}
	
	
	

}
