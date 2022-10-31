package com.learning.entity;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Customer {
	
	private long customerId;
	private String fullName;
	private String userName;
	private String password;
	private String accountType;
	private double accountBalance;
	private String approved;
	@Id
	private long accountNumber;
	private LocalDateTime dateOfCreation;
	private String accountStatus;
	
}
