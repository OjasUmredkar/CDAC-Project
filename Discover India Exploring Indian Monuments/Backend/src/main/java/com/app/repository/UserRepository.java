package com.app.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.dto.UserDto;
import com.app.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {

	Optional<User> findByEmailAndPassword(String email, String password);

	
	User save(UserDto user);
}

