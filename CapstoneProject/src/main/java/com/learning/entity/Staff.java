package com.learning.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

import org.springframework.beans.factory.annotation.Value;

@Entity
public class Staff {
	@Id
	private Long staffId;
	private String staffFullName;
	private String staffUserName;
	private String staffPassword;
    private enum Status {
		enable, disable
    }
	
	

}
