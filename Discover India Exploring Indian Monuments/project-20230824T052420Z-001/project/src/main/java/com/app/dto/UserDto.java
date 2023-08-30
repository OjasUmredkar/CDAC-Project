package com.app.dto;


import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
@Getter
@Setter
@ToString
public class UserDto {
		private Long id;
	 	@NotBlank
	 	private String firstName;
	    private String lastName;
	    private String address;
	   
	   
	    private String email;
	    @NotBlank
	    private String password;
	
	

}
