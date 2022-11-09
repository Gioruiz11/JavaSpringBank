package com.learning.controller;

import java.util.List;

import javax.persistence.EntityExistsException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.learning.entity.Staff;
import com.learning.repo.CustomerRepo;
import com.learning.repo.StaffRepo;
import com.learning.service.ApproverService;

@RestController
@CrossOrigin
@RequestMapping("/api/admin")
public class ApproverController {
	@Autowired
	ApproverService approverService;
	@PostMapping("/addstaff")
	public Staff createStaff(@RequestBody Staff staff){
		 		 
		return approverService.createStaff(staff);

	}

	@GetMapping("/getstaff")
	public List<Staff> getAllStaff() {
		return approverService.getAllStaff();

	}


	@PutMapping("/enablestaff")
	public ResponseEntity<Staff> enableStaff(@RequestBody long customerid)
	{
		Customer customer= new Customer();
		customer=staffService.getcustomerByid(customerid);
		if (customer.isStatus()==true) {
			customer.setStatus(false);
			staffService.saveCustomer(customer);
			return ResponseEntity.ok(customer);
			
		}
		else if(customer.isStatus()==false) {
			customer.setStatus(true);
			staffService.saveCustomer(customer);
			return ResponseEntity.ok(customer);
			
			
		}
		return ResponseEntity.ok(customer);


	}
}
