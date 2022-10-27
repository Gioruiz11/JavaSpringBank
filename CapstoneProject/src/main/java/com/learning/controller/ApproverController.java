package com.learning.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/admin")
public class ApproverController {

	@PostMapping("/staff")
	public void createStaff() {
		
	}
	
	@GetMapping("staff")
	public void getAllStaff() {
		
	}
	
	@PutMapping("/staff")
	public void enableStaff() {
		
	}
}
