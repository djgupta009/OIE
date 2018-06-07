package com.sopra.proj.controller;

import java.net.ConnectException;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.sopra.proj.bean.Animal;
import com.sopra.proj.service.IAnimalService;

/**
 * @author sonsaxena
 *
 */
@RestController
public class AnimalController {

	@Autowired
	private IAnimalService animalService;
	
	@CrossOrigin(origins = "http://127.0.0.1:4300")
	@RequestMapping(value = "/animals", method = RequestMethod.GET)
	public ResponseEntity<List<Animal>> getAnimalDetails() {
		List<Animal> animals = animalService.getAllAnimalDetails();		
		if (animals.isEmpty())
			return new ResponseEntity<List<Animal>>(HttpStatus.NO_CONTENT);
		return new ResponseEntity<List<Animal>>(animals, HttpStatus.OK);
	}
	
	@CrossOrigin(origins = "http://127.0.0.1:4300")
	@RequestMapping(value = "/animal/{animalid}/{lang}", method = RequestMethod.GET)
	public ResponseEntity<Animal> getAnimalDetails(@Valid @PathVariable("animalid") String animal_id, @Valid @PathVariable("lang") String lang) {
		Animal animal = animalService.getAnimalDetails(animal_id,lang);		
		if (null == animal)
			return new ResponseEntity<Animal>(HttpStatus.NO_CONTENT);
		return new ResponseEntity<Animal>(animal, HttpStatus.OK);
	}

	
	@CrossOrigin(origins = "http://127.0.0.1:4300")
	@RequestMapping(value = "/addanimaldetail", method = RequestMethod.POST,consumes = "application/json")
	public ResponseEntity<Void> addAnimalDetails(@Valid @RequestBody Animal anm) throws Exception {
		try {
			animalService.addAnimalDetails(anm);
		} catch (ConnectException e) {
			throw new ConnectException("Connection Timeout");
		}
		return new ResponseEntity<Void>(HttpStatus.CREATED);
	}
	
	
}
