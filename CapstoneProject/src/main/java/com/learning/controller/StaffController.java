package com.learning.controller;

import java.util.ArrayList;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.learning.entity.Account;
import com.learning.entity.Beneficiary;
import com.learning.entity.Customer;
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
	
	@PutMapping("/beneficiary/approve")
	public ResponseEntity<List<Beneficiary>> approveBeneficiary(@RequestBody int customerid) {
		List<Beneficiary> listBen= new ArrayList<>();
		List<Beneficiary> listBen2= new ArrayList<>();
		
		
		listBen=staffService.getBenficiarybyId(customerid);
		Beneficiary beneficiary=null;
		for (int i = 0; i < listBen.size(); i++) {
			beneficiary=listBen.get(i);
			beneficiary.setApproved(true);
			staffService.saveBeneficiary(beneficiary);
			listBen2.add(beneficiary);
		}
		 return ResponseEntity.ok(listBen2);
	}
	
	@GetMapping("/account/approval")
	public List<Account> getAcctApprove() {
		return staffService.getAccountforApproval();
		
	}
	
	@PutMapping("/account/approve")
	public ResponseEntity<List<Account>> approveAccts(@RequestBody int customerid) {
		List<Account> listAcc= new ArrayList<>();
		List<Account> listAcc2= new ArrayList<>();
		
		
	          
		listAcc=staffService.getAccountbyId(customerid);
		Account account=null;
		for(int i=0; i< listAcc.size();i++) {
			account=listAcc.get(i);
			account.setAccountStatus(true);
			staffService.saveAccount(account);
			listAcc2.add(account);
			
		}
		return ResponseEntity.ok(listAcc2);
		
		
	}
	
	@GetMapping("/customers")
	public List<Customer> getAllCustomers() {
		return staffService.getAllCustomers();
		
		
	}
	@PutMapping("/customer")
	public void approveEnableCustomer() {
		
		
		
		
	}
	@GetMapping("/customer/{customerId}")
	public Customer getCustomersWithId(@PathVariable("customerId") Long customerId) {
		return staffService.getcustomerByid(customerId);
		
		
		
	}
	@PutMapping("/transfer")
	public void Transfer() {
		
		
		
		
	}
	
	
	
	
	
	
	
}
