package com.sopra.proj.bean;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

/**
 * @author sonsaxena
 *
 */
@Entity
@Table(name = "employee")
public class Employee {
	
	@Id
	@Column(nullable = false,name="ID")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int emp_ID;
	@NotBlank
	@Column(nullable = false,name="FIRST_NAME")
	private String emp_firstName;
	@NotBlank
	@Column(nullable = false,name="LAST_NAME")
	private String emp_lastName;
	@NotBlank
	@Column(nullable = false,name="DESIG")
	private String emp_Desig;
	@NotBlank
	@Column(nullable = false,name="CONTACT")
	private String emp_Contact;
	public int getEmp_ID() {
		return emp_ID;
	}
	public void setEmp_ID(int emp_ID) {
		this.emp_ID = emp_ID;
	}
	public String getEmp_firstName() {
		return emp_firstName;
	}
	public void setEmp_firstName(String emp_firstName) {
		this.emp_firstName = emp_firstName;
	}
	public String getEmp_lastName() {
		return emp_lastName;
	}
	public void setEmp_lastName(String emp_lastName) {
		this.emp_lastName = emp_lastName;
	}
	public String getEmp_Desig() {
		return emp_Desig;
	}
	public void setEmp_Desig(String emp_Desig) {
		this.emp_Desig = emp_Desig;
	}
	public String getEmp_Contact() {
		return emp_Contact;
	}
	public void setEmp_Contact(String emp_Contact) {
		this.emp_Contact = emp_Contact;
	}

}
