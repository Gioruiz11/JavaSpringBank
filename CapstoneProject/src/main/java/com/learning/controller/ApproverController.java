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
	@PostMapping("/staff")
	public Staff createStaff(@RequestBody Staff staff){
		 		 
		return approverService.createStaff(staff);

	}

	@GetMapping("/staff")
	public List<Staff> getAllStaff() {
		return approverService.getAllStaff();

	}


	@PutMapping("/staff")
	public ResponseEntity<Staff> enableStaff(@PathVariable("staffId") long staffId,@RequestBody Staff staffDetails)
	{
		return approverService.enableStaff(staffId,staffDetails);



	}
}
