package com.learning.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.learning.entity.Beneficiary;
import com.learning.entity.Staff;
@Transactional
@Repository
public interface StaffRepo extends JpaRepository<Staff, Long> {
	@Modifying
	@Query(value="select distinct account.accountNumber,customer.fullName,account.accountBalance,transaction.amount,transaction.transactionType,transaction.reason from customer,account,transaction where :account.customer_id=transaction.fromAccountNo or :account.customer_id=transaction.toAccountNo;",nativeQuery=true)
	public List<Object[]> AccountStatement(@Param("account.customer_id")int customerid );
	
	

	
	
	
}
