package com.learning.entity;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="account")
public class Account {
	private String accountType;
	private long customerId;
	private double accountBalance;
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(nullable = false)
	private long accountNumber;
	private Date dateOfCreation;
	private boolean accountStatus;
	public String getAccountType() {
		return accountType;
	}
	public void setAccountType(String accountType) {
		this.accountType = accountType;
	}
	public long getCustomerId() {
		return customerId;
	}
	public void setCustomerId(long customerId) {
		this.customerId = customerId;
	}
	public double getAccountBalance() {
		return accountBalance;
	}
	public void setAccountBalance(double accountBalance) {
		this.accountBalance = accountBalance;
	}
	public long getAccountNumber() {
		return accountNumber;
	}
	public void setAccountNumber(long accountNumber) {
		this.accountNumber = accountNumber;
	}
	public Date getDateOfCreation() {
		return dateOfCreation;
	}
	public void setDateOfCreation(Date dateOfCreation) {
		this.dateOfCreation = dateOfCreation;
	}
	public boolean isAccountStatus() {
		return accountStatus;
	}
	public void setAccountStatus(boolean accountStatus) {
		this.accountStatus = accountStatus;
	}
	public Account(String accountType, long customerId, double accountBalance, long accountNumber, Date dateOfCreation,
			boolean accountStatus) {
		super();
		this.accountType = accountType;
		this.customerId = customerId;
		this.accountBalance = accountBalance;
		this.accountNumber = accountNumber;
		this.dateOfCreation = dateOfCreation;
		this.accountStatus = accountStatus;
	}
	public Account() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
}