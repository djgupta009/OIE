package com.sopra.proj.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.sopra.proj.bean.Animal;

/**
 * @author sonsaxena
 *
 */
@Repository
@Transactional
public interface IAnimalRepository extends JpaRepository<Animal, Integer>{
	

	@Query("from Animal where animal_id = ?1 and language = ?2")
	public Animal getAnimalDetails(String animal_id,String lang);
	
	@Query("Select distinct(animal_id) from Animal")
	public List<String> getAnimalIDs();
	
	@Query("from Animal where language = ?1")
	public List<Animal> findAll(String lang);

}
