package com.learning.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.learning.entity.Account;
import com.learning.entity.Customer;
import com.learning.repo.AccountRepo;
import com.learning.repo.CustomerRepo;

@Controller
@CrossOrigin
@RequestMapping("/api/customer")
public class CustomerController {
	@Autowired
	CustomerRepo customerRepo;
	@Autowired
	AccountRepo accountRepo;
	
	@PostMapping("/register")
	public Customer registerCustomer(@RequestBody Customer customer) {
		return customerRepo.save(customer);
	}
	@PostMapping("/{customerId}/account")
	public Account createAccount(@RequestBody Account account) {
		return accountRepo.save(account);
	}	
	@PutMapping("/{customerId}/account/{accountNumber}")
	public void approveAccount() {
		
	}
	@GetMapping("/{customerId}/account")
	public List<Account> getAccountByCustomerId(long customerId) {
		return accountRepo.findAll();
	}
	@GetMapping("/{customerId}")
	public List<Customer> getCustomerByCustomerId(long customerId) {
		return customerRepo.findAll();
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
