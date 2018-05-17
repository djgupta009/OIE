package com.sopra.proj.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.sopra.proj.bean.Skill;
import com.sopra.proj.service.ISkillService;

@RestController
public class SkillController {
	
	@Autowired
	private ISkillService skillservice;
	
	
	@RequestMapping(value = "/skills", method = RequestMethod.GET)
	public ResponseEntity<List<Skill>> getSkills() {
		List<Skill> skills = skillservice.getSkills();		
		if (skills.isEmpty())
			return new ResponseEntity<List<Skill>>(HttpStatus.NO_CONTENT);
		return new ResponseEntity<List<Skill>>(skills, HttpStatus.OK);
	}
	
	
	@RequestMapping(value = "/addskill", method = RequestMethod.POST, consumes = "application/json")
	public ResponseEntity<Void> addSkill(@Valid @RequestBody Skill skill) {
		skillservice.addSkill(skill);
		return new ResponseEntity<Void>(HttpStatus.CREATED);
	}

	
	@RequestMapping(value = "/deleteskill/{id}", method = RequestMethod.DELETE) 
	public ResponseEntity<Skill> deleteSkill(@Valid @PathVariable("id") int id) {
			skillservice.deleteSkill(id);
		return new ResponseEntity<Skill>(HttpStatus.OK);
	}
	

	@RequestMapping(value = "/updateskill/{id}", method = RequestMethod.PUT) 
	public ResponseEntity<Skill> updateEmployee(@Valid @PathVariable("id") int id, @Valid @RequestBody Skill skill){
		skillservice.updateSkill(id, skill);
		return new ResponseEntity<Skill>(HttpStatus.OK);
	}
	
}
