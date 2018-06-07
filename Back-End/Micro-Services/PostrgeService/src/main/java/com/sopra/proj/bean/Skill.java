package com.sopra.proj.bean;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
@Table(name = "skill")
public class Skill {
	
	@Id
	@Column(nullable = false,name="ID")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int skill_id;
	@NotBlank
	@Size(min=2, message="Skill Name should have atleast 2 characters")
	@Column(nullable = false,name="NAME")
	private String skill_name;
	@NotBlank
	@Size(min=2, message="Skill Desciption should have atleast 5 characters")
	@Column(nullable = false,name="DESCRIPTION")
	private String skill_description;
	
	
	
	public int getSkill_id() {
		return skill_id;
	}



	public void setSkill_id(int skill_id) {
		this.skill_id = skill_id;
	}



	public String getSkill_name() {
		return skill_name;
	}



	public void setSkill_name(String skill_name) {
		this.skill_name = skill_name;
	}



	public String getSkill_description() {
		return skill_description;
	}



	public void setSkill_description(String skill_description) {
		this.skill_description = skill_description;
	}


	@Override
	public String toString() {
		return "Skill [id=" + skill_id + ", name=" + skill_name + ", description="
				+ skill_description +"]";
	}
}
