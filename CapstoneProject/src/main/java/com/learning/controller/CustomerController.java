package com.learning.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/api/customer")
public class CustomerController {
	//@PostMapping("/register")
	public void registerCustomer() {
		
	}
	//@PostMapping("/{customerId}/account")
	public void createCustomerAccount() {
		
	}	
	//@PutMapping("/{customerId}/account/{accountNumber}")
		
	//@GetMapping("/{customerId}/account")
	public void getAccountByCustomerId() {
		
	}
	//@GetMapping("/{customerId}")
	public void getCustomerByCustomerId() {
		
	}
	//Jean's Methods
	
	@PutMapping("/:customerID")
	public void updateCustomer() {
		
	}
	
	@GetMapping("/:customerID/account/:accountID")
	public void getCustomerWithAccountId() {
		
	}
	
	@PostMapping("/:customerID/beneficiary")
	public void addBeneficiary() {
		
	}
	
	@GetMapping("/:customerID/beneficiary")
	public void getBeneficiaryByCustomerId() {
		
	}
	
	@DeleteMapping("/:customerID/beneficiary/:beneficiaryID")
	public void deleteBeneficiary() {
		
	}
	
	@PutMapping("/transfer")
	public void transferAccount() {
		
	}

}
