package com.learning.controller;

import java.util.List;

import javax.persistence.EntityExistsException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.learning.entity.Staff;
import com.learning.repo.CustomerRepo;
import com.learning.repo.StaffRepo;

@RestController
@RequestMapping("/api/admin")
public class ApproverController {
	@Autowired
	CustomerRepo customerRepo;
	@Autowired
	StaffRepo staffRepo;
	@PostMapping("/staff")
	public Staff createStaff(@RequestBody Staff staff){
		 Staff s = new Staff();
		 s.setStaffId(staff.getStaffId());
		 s.setStaffFullName(staff.getStaffFullName() );
		 s.setStaffUserName(staff.getStaffUserName());
		 s.setStatus(staff.isStatus());	 		 
		return staffRepo.save(staff);
		
	}
	
	@GetMapping("/staff")
	public List<Staff> getAllStaff() {
		return staffRepo.findAll();
		
	}
	
	
	
	@PutMapping("/staff")
	public boolean enableStaff() {
		Staff s = new Staff();
		if(s.isStatus()==false)
		return false;
			
		return true;
		
		
		
		
		
		
		
		
		
		
		
	
}
}
