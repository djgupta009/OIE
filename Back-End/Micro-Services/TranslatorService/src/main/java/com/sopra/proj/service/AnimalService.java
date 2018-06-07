package com.sopra.proj.service;

import java.net.ConnectException;
import java.util.Collections;
import java.util.List;

import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sopra.proj.bean.Animal;
import com.sopra.proj.repository.IAnimalRepository;

import ch.qos.logback.classic.Logger;


/**
 * @author sonsaxena
 *
 */
@Service
public class AnimalService implements IAnimalService {

	private static final Logger LOGGER = (Logger) LoggerFactory.getLogger(AnimalService.class);
	private static final String SPANISH = "es";
	private static final String FRENCH = "fr";
	private static final String ENGLISH = "en";

	@Autowired
	private IAnimalRepository animalrepository;

	public List<Animal> getAllAnimalDetails() {
		return animalrepository.findAll(ENGLISH);
	}

	public Animal getAnimalDetails(String animal_id,String lang)
	{
		return animalrepository.getAnimalDetails(animal_id, lang);
	}

	public void addAnimalDetails(Animal bean) throws Exception {
		LOGGER.trace("Service:addanimals() start");
		try {
			bean.setLanguage(ENGLISH);
			String animal_id=generateNewAnimalID();
			if(null != animal_id && !"".equalsIgnoreCase(animal_id))
			{
				bean.setAnimal_id(animal_id);
			}
			Animal anm_fn = animalrepository.save(translateFieldData(bean,FRENCH));
			LOGGER.info("Animal added in French::", anm_fn);

			Animal anm_sp =  animalrepository.save(translateFieldData(bean,SPANISH));
			LOGGER.info("Animal added in Spanish::", anm_sp);

			Animal anm = animalrepository.save(bean);
			LOGGER.info("Animal added in english::", anm);

		}catch(ConnectException ex)
		{
			throw new ConnectException("Connection timeout");

		}catch(NumberFormatException ex)
		{
			throw new NumberFormatException("Invalid Animal_id");
		}catch(Exception e){
			LOGGER.error("Exception::", e);
		}
		LOGGER.trace("Service:addanimals() end");
	}

	/**
	 * @param bean
	 * @param lang
	 * @return
	 */
	public Animal translateFieldData(Animal bean, String language) throws Exception {
		Animal anm =new Animal(); 
		Language lang = Language.getLanguage(language);
		try {
			anm.setAnimal_id(API_MT.translate(bean.getAnimal_id(),lang));
			anm.setName(API_MT.translate(bean.getName(),lang));
			anm.setGender(API_MT.translate(bean.getGender(),lang));
			anm.setType(API_MT.translate(bean.getType(),lang));
			anm.setSpecies(API_MT.translate(bean.getSpecies(),lang));
			anm.setCountry(API_MT.translate(bean.getCountry(),lang));
			anm.setWeight(API_MT.translate(String.valueOf(bean.getWeight()),lang));
			anm.setAbout(API_MT.translate(bean.getAbout(),lang));
			anm.setHeathCondition(API_MT.translate(bean.getHealthCondition(),lang));
			anm.setDisease(API_MT.translate(bean.getDisease(),lang));
			anm.setAllergic(API_MT.translate(bean.getAllergic(),lang));
			anm.setLanguage(language);
			LOGGER.info("Animal translated::", anm);
		}catch(ConnectException ex)
		{
			throw new ConnectException("ConnectionTimeout");
		}catch(Exception e){

			LOGGER.error("Exception::", e);
		}
		return anm;
	}

	public List<String> getAnimalIDs() {
		List<String> animal_ids = animalrepository.getAnimalIDs();
		return animal_ids;
	}

	public String generateNewAnimalID()
	{
		String animal_id="";
		try{

			List<String> animal_ids = getAnimalIDs();
			if(animal_ids.isEmpty())
			{
				animal_id="Anm1";
			}
			else
			{
				Collections.sort(animal_ids);
				String last_val=animal_ids.get(animal_ids.size()-1);
				int inc_val= Integer.parseInt(last_val.substring(3,last_val.length()))+1;
				animal_id = "Anm" + inc_val;
			}

		}catch(NumberFormatException ex)
		{
			throw new NumberFormatException("Invalid Animal_id");
		}catch(Exception ex)
		{
			LOGGER.error("Exception::", ex);
		}
		return animal_id;
	}


}
