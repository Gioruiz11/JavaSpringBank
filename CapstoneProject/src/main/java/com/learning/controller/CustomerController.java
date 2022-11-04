package com.learning.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.learning.entity.Account;
import com.learning.entity.Customer;
import com.learning.repo.AccountRepo;
import com.learning.repo.CustomerRepo;

@RestController
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
	public Account createAccount(@PathVariable("customerId") long customerId, @RequestBody Account account) {
		account.setCustomer(getCustomerByCustomerId(customerId));
		return accountRepo.save(account);
	}	
	@PutMapping("/{customerId}/account/{accountNumber}")
	public Account approveAccount(@PathVariable("customerId") long customerId, @RequestBody Account account) {
		Optional<Account> newAccount = accountRepo.findById(account.getAccountNumber());
		Account approvedAccount = newAccount.get();
		approvedAccount.setAccountBalance(account.getAccountBalance());
		approvedAccount.setAccountType(account.getAccountType());
		approvedAccount.setAccountBalance(account.getAccountBalance());
		approvedAccount.setAccountStatus(account.isAccountStatus());
		approvedAccount.setDateOfCreation(account.getDateOfCreation());
		approvedAccount.setApproveAccount(account.getApproveAccount());
		
		accountRepo.save(approvedAccount);
		
		return approvedAccount;
		
	}
	@GetMapping("/{customerId}/account")
	public List<Account> getAccountByCustomerId(@PathVariable("customerId") long customerId) {
		List<Account> list = new ArrayList<>();
		List<Account> temp = new ArrayList<>();
		temp = accountRepo.findAll();
		for (Account account : temp) {
			if (account.getCustomer().getCustomerId() == customerId) {
				list.add(account);
			}
		}
		return list;
	}
	@GetMapping("/{customerId}")
	public Customer getCustomerByCustomerId(@PathVariable("customerId") long customerId) {
		Optional<Customer> temp = customerRepo.findById(customerId);
		Customer customer = temp.get();
		return customer;
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
