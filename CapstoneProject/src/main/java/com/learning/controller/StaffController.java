package com.learning.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/staff")
public class StaffController {

	@GetMapping("/account/{accountNo}")
	public void getAcctStatement(@PathVariable int accountNO) {
		
		
		
	}
	
	
	@GetMapping("/beneficiary")
	public void getAcctBeneficiary() {
		
		
		
	}
	
	@PutMapping("/beneficiary")
	public void approveBeneficiary() {
		
		
		
		
	}
	
	@GetMapping("/accounts/approve")
	public void getAcctApprove() {
		
		
		
	}
	
	@PutMapping("/accounts/approve")
	public void approveAccts() {
		
		
		
		
	}
	
	@GetMapping("/customer")
	public void getAllCustomers() {
		
		
		
	}
	@PutMapping("/customer")
	public void approveEnableCustomer() {
		
		
		
		
	}
	@GetMapping("/customer/{customerID}")
	public void getCustomersWithId() {
		
		
		
	}
	@PutMapping("/transfer")
	public void Transfer() {
		
		
		
		
	}
	
	
	
	
	
	
	
}
