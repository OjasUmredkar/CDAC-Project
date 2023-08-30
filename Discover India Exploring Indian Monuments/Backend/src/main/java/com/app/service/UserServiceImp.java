package com.app.service;

import java.util.List;
import javax.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.app.custom_exceptions.*;
import com.app.dto.UserAuthDto;
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
		User ur = userRepo.findByEmailAndPassword(request.getEmail(), request.getPassword())
				.orElseThrow(() -> new CustomException("Invalid Email or password"));
	//	UserAuthDto authRespDTO = mapper.map(ur, UserAuthDto.class);
		return ur;
		
	}
	@Override
	public User RegistorUser(User user) {
		
		return userRepo.save(user);
	}
	
	@Override
	public List<User> getAllUser() {
		return userRepo.findAll();
	}
	@Override
	public User getUserById(Long id) {
		
		return userRepo.findById(id).orElseThrow(()->new CustomException("Invalid Emp ID , Can't get emp details!!!!"));
	}
	
	
	

}
