package com.sopra.proj.bean;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * @author sonsaxena
 *
 */
@Entity
@Table(name = "Animal")
public class Animal {
	
	@Id
	@Column(nullable = false,name="ID")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	@Column(nullable = false,name="ANIMAL_ID")
	private String animal_id;
	@Column(nullable = false,name="NAME")
	private String name;
	
	@Column(nullable = false,name="GENDER")
	private String gender;
	
	@Column(nullable = false,name="TYPE")
	private String type;
	
	@Column(nullable = false,name="SPECIES")
	private String species;
	
	@Column(nullable = false,name="COUNTRY")
	private String country;
	
	@Column(nullable = false,name="WEIGHT")
	private String weight;
	
	@Column(nullable = false,name="ABOUT")
	private String about;
	
	@Column(nullable = false,name="HEALTH")
	private String healthCondition;
		
	@Column(nullable = false,name="DISEASE")
	private String disease;
	
	@Column(nullable = false,name="ALLERGIC")
	private String allergic;
	
	@Column(nullable = false,name="LANGUAGE")
	private String language;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	
	public String getAnimal_id() {
		return animal_id;
	}

	public void setAnimal_id(String animal_id) {
		this.animal_id = animal_id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getSpecies() {
		return species;
	}

	public void setSpecies(String species) {
		this.species = species;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getWeight() {
		return weight;
	}

	public void setWeight(String weight) {
		this.weight = weight;
	}

	public String getAbout() {
		return about;
	}

	public void setAbout(String about) {
		this.about = about;
	}

	public String getHealthCondition() {
		return healthCondition;
	}

	public void setHeathCondition(String healthCondition) {
		this.healthCondition = healthCondition;
	}

	public String getDisease() {
		return disease;
	}

	public void setDisease(String disease) {
		this.disease = disease;
	}

	public String getAllergic() {
		return allergic;
	}

	public void setAllergic(String allergic) {
		this.allergic = allergic;
	}

	public String getLanguage() {
		return language;
	}

	public void setLanguage(String language) {
		this.language = language;
	}

	@Override
	public String toString() {
		return "Animal [id=" + id + ", animal_id=" + animal_id + ", name=" + name + ", gender=" + gender + ", type="
				+ type + ", species=" + species + ", country=" + country + ", weight=" + weight + ", about=" + about
				+ ", heathCondition=" + healthCondition + ", disease=" + disease + ", allergic=" + allergic
				+ ", language=" + language + "]";
	}

	
}
