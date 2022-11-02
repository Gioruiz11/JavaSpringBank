package com.learning.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.learning.entity.Beneficiary;
import com.learning.service.StaffService;

@RestController
@RequestMapping("/api/staff")
public class StaffController {

	@Autowired
	StaffService staffService;
	@GetMapping("/account/{accountNo}")
	public List<Object[]> getAcctStatement(@PathVariable("accountNo") int accountNO) {
		return staffService.getBalanceInfo(accountNO);
		
		
		
	}
	
	
	@GetMapping("/beneficiary/approval")
	public List<Beneficiary> getBeneficiaryforApproval() {
		
		return staffService.getBeneficaryforApproval();
		
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
