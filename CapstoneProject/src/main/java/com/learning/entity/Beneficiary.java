package com.learning.entity;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="beneficiary")
public class Beneficiary {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(nullable = false)
	private long beneficiaryId;
	private long beneficiaryAccountNo; 
	private String beneficiaryName;  
	private boolean active;
	private boolean isApproved;
	private long customerAccountNo;
	private Date addedDate;
	public long getBeneficiaryId() {
		return beneficiaryId;
	}
	public void setBeneficiaryId(long beneficiaryId) {
		this.beneficiaryId = beneficiaryId;
	}
	public long getBeneficiaryAccountNo() {
		return beneficiaryAccountNo;
	}
	public void setBeneficiaryAccountNo(long beneficiaryAccountNo) {
		this.beneficiaryAccountNo = beneficiaryAccountNo;
	}
	public String getBeneficiaryName() {
		return beneficiaryName;
	}
	public void setBeneficiaryName(String beneficiaryName) {
		this.beneficiaryName = beneficiaryName;
	}
	public boolean isActive() {
		return active;
	}
	public void setActive(boolean active) {
		this.active = active;
	}
	public boolean isApproved() {
		return isApproved;
	}
	public void setApproved(boolean isApproved) {
		this.isApproved = isApproved;
	}
	public long getCustomerAccountNo() {
		return customerAccountNo;
	}
	public void setCustomerAccountNo(long customerAccountNo) {
		this.customerAccountNo = customerAccountNo;
	}
	public Date getAddedDate() {
		return addedDate;
	}
	public void setAddedDate(Date addedDate) {
		this.addedDate = addedDate;
	}
	public Beneficiary(long beneficiaryId, long beneficiaryAccountNo, String beneficiaryName, boolean active,
			boolean isApproved, long customerAccountNo, Date addedDate) {
		super();
		this.beneficiaryId = beneficiaryId;
		this.beneficiaryAccountNo = beneficiaryAccountNo;
		this.beneficiaryName = beneficiaryName;
		this.active = active;
		this.isApproved = isApproved;
		this.customerAccountNo = customerAccountNo;
		this.addedDate = addedDate;
	}
	public Beneficiary() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	

}
