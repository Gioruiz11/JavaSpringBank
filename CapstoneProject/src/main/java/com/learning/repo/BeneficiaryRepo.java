package com.learning.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.learning.entity.Beneficiary;
@Transactional
@Repository
public interface BeneficiaryRepo extends JpaRepository<Beneficiary, Long> {
	
	@Query(value="Select * from beneficiary where beneficiary.isApproved=0",nativeQuery=true)
	public List<Beneficiary> FindBenficiaryForApproval();

}
