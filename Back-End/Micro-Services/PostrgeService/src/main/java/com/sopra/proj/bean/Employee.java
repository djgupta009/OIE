package com.sopra.proj.bean;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

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
	@Size(min=2, message="First Name should have atleast 2 characters")
	@Column(nullable = false,name="FIRST_NAME")
	private String emp_firstName;
	@NotBlank
	@Column(nullable = false,name="LAST_NAME")
	private String emp_lastName;
	@NotBlank
	@Size(min=10, message="Designation should have atleast 5 characters")
	@Column(nullable = false,name="DESIG")
	private String emp_Desig;
	@Column(nullable = false,name="CONTACT")
	private long emp_Contact;
	@Column(nullable = false,name="SKILL")
	@Size(max=10,  message="Maximum of 10 skills can be associated")
	@ManyToMany
	@JoinTable(name = "employ_skill",  uniqueConstraints = {@UniqueConstraint(columnNames={"EMP_ID", "SKILL_ID"})} ,joinColumns = { @JoinColumn(name = "EMP_ID") }, inverseJoinColumns = { @JoinColumn(name = "SKILL_ID") })
	private List<Skill> emp_Skills;
	
	
	
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



	public long getEmp_Contact() {
		return emp_Contact;
	}



	public void setEmp_Contact(long emp_Contact) {
		this.emp_Contact = emp_Contact;
	}



	public List<Skill> getEmp_Skills() {
		return emp_Skills;
	}



	public void setEmp_Skills(List<Skill> emp_Skills) {
		this.emp_Skills = emp_Skills;
	}


	@Override
	public String toString() {
		return "Employee [id=" + emp_ID + ", first_name=" + emp_firstName + ", last_name=" + emp_lastName +", desig =" + emp_Desig+", contact" + emp_Contact+"]";
	}
}
