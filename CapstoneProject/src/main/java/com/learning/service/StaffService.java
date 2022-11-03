package com.learning.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.learning.entity.Account;
import com.learning.entity.Beneficiary;
import com.learning.entity.Customer;
import com.learning.repo.AccountRepo;
import com.learning.repo.BeneficiaryRepo;
import com.learning.repo.CustomerRepo;
import com.learning.repo.StaffRepo;

@Service
public class StaffService {
	  @Autowired
	  StaffRepo staffRepo;
	  
	  @Autowired
	  BeneficiaryRepo beneficiaryRepo;
	  
	  @Autowired
	  AccountRepo accountRepo;
	  
	  @Autowired
	  CustomerRepo customerRepo;
	  
	  
	  public List<Object[]> getBalanceInfo(int customerid){
		  
		  
		  
		  return staffRepo.AccountStatement(customerid);
	  }
	  public List<Beneficiary> getBeneficaryforApproval(){
		  
		  return beneficiaryRepo.FindBenficiaryForApproval();
		  
	  }
	  public List<Account> getAccountforApproval(){
		  return accountRepo.FindAccountForApproval();
		  
		  
	  }
	  
	  public List<Customer> getAllCustomers(){
		  return customerRepo.findAll();
		  
		  
		  
	  }
	  
	  public Customer getcustomerByid(Long customerId) {
		  return customerRepo.findById(customerId).get();
		  
		  
	  }
	public List<Beneficiary> getBenficiarybyId(int customerid){
		
		
		return beneficiaryRepo.FindBenficiaryForCustomer(customerid);
		
		
		
	}
	public void saveBeneficiary(Beneficiary beneficiary) {
		
		
		beneficiaryRepo.save(beneficiary);
	}
	
  public List<Account> getAccountbyId(int customerid){
		
		
		return accountRepo.FindAccountForCustomer(customerid);
		
		
		
	}
	public void saveAccount(Account account) {
		
		
		accountRepo.save(account);
	}
	
	
	
	
	  
	  

}
