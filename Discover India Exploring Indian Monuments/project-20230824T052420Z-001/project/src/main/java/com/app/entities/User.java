package com.app.entities;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.app.PasswordEncryption;
import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "users")
@Getter
@Setter
@ToString
@NoArgsConstructor

public class User extends BaseEntity{
    
   
	

	@Column(name = "first_name")
    private String firstName;
    
    @Column(name = "last_name")
    private String lastName;
    @Column
    private String address;
    @Column
    private String email;
    @Column
    private String password;
   
    @JsonIgnore
    @OneToMany(mappedBy = "user",fetch = FetchType.LAZY)
    private List<Booking> bookings;

    public User(String firstName, String lastName, String address, String email, String password) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.address = address;
		this.email = email;
		this.password = PasswordEncryption.encryptPassword(password);
	}
    
}




