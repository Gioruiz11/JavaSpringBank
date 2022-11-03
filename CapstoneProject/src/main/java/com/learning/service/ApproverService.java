package com.learning.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;

import com.learning.entity.Staff;
import com.learning.repo.CustomerRepo;
import com.learning.repo.StaffRepo;

public class ApproverService {


	@Autowired
	CustomerRepo customerRepo;
	@Autowired
	StaffRepo staffRepo;

	public Staff createStaff(@RequestBody Staff staff){
		Staff s = new Staff();
		s.setStaffId(staff.getStaffId());
		s.setStaffFullName(staff.getStaffFullName() );
		s.setStaffUserName(staff.getStaffUserName());
		s.setStatus(staff.isStatus());	 		 
		return staffRepo.save(staff);

	}

	public List<Staff> getAllStaff() {
		return staffRepo.findAll();

	}

	public boolean enableStaff() {
		Staff s = new Staff();
		if(s.isStatus()==false)
			return false;

		return true;}

}