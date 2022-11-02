package com.learning.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.learning.entity.Beneficiary;
import com.learning.repo.BeneficiaryRepo;
import com.learning.repo.StaffRepo;

@Service
public class StaffService {
	  @Autowired
	  StaffRepo staffRepo;
	  
	  @Autowired
	  BeneficiaryRepo beneficiaryRepo;
	  
	  
	  public List<Object[]> getBalanceInfo(int customerid){
		  
		  
		  
		  return staffRepo.AccountStatement(customerid);
	  }
	  public List<Beneficiary> getBeneficaryforApproval(){
		  
		  return beneficiaryRepo.FindBenficiaryForApproval();
		  
	  }

}
