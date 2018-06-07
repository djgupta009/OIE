package com.sopra.proj.service;
import java.util.List;

import com.sopra.proj.bean.Animal;

/**
 * @author sonsaxena
 *
 */
public interface IAnimalService {

	public void addAnimalDetails(Animal anm) throws Exception;

	public List<Animal> getAllAnimalDetails();	
	
	public Animal getAnimalDetails(String animal_id,String lang);
	
	public List<String> getAnimalIDs();
	
	/*public void updateAnimalD(int id, Animal emp);*/
	
}