package com.learning.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.learning.entity.Staff;
import com.learning.repo.CustomerRepo;
import com.learning.repo.StaffRepo;
@Service
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

	
	
	public ResponseEntity<Staff> enableStaff(@PathVariable("staffId") long staffId,@RequestBody Staff staffDetails) {
        Staff enableStaff = staffRepo.findById(staffId)
                .orElseThrow(() -> new RuntimeException("Staff Does not exist with id: " + staffId));

        enableStaff.setStaffId(staffDetails.getStaffId());
		enableStaff.setStaffFullName(staffDetails.getStaffFullName() );
		enableStaff.setStaffUserName(staffDetails.getStaffUserName());
		enableStaff.setStatus(staffDetails.isStatus());

        staffRepo.save(enableStaff);

        return ResponseEntity.ok(enableStaff);
    }
	
	}
	

