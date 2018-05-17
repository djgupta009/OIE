package com.sopra.proj.service;

import java.util.List;

import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.sopra.proj.bean.Skill;
import com.sopra.proj.exception.ResourceNotFoundException;
import com.sopra.proj.repository.ISkillRepository;

import ch.qos.logback.classic.Logger;

@Service
public class SkillService implements ISkillService {

	@Autowired
	private ISkillRepository skillrepository;
	private static final Logger LOGGER = (Logger) LoggerFactory.getLogger(EmployeeService.class);
	public void addSkill(Skill bean) {
		LOGGER.trace("Service:addSkill() start");
		try {
			Skill skill = skillrepository.save(bean);
			LOGGER.info("Skill added::", skill);
		}catch(DataIntegrityViolationException e)
		{
			throw new DataIntegrityViolationException("Skill cannot be added");
		}catch(Exception e)
		{
		 LOGGER.error("Exception::", e);
		}
		LOGGER.trace("Service:addSkill() end");
	}


	public List<Skill> getSkills() {
		return skillrepository.findAll();
		
	}

	public void deleteSkill(int id) {
		
		skillrepository.findById(id).map(skill -> {
			try {
			skillrepository.delete(skill);
			}catch(DataIntegrityViolationException e)
			{
				throw new DataIntegrityViolationException("Skill with id " + id + " is associated with an employee");
			}catch(Exception e)
			{
			 LOGGER.error("Exception::", e);
			}
			
			return ResponseEntity.ok().build();
		}).orElseThrow(() -> new ResourceNotFoundException("SkillId " + id + " not found"));
	}

	public void updateSkill(int id, Skill skill){
		
		skillrepository.findById(id).map(skillToUpdate -> {
			skillToUpdate.setSkill_name(skill.getSkill_name());
			skillToUpdate.setSkill_description(skill.getSkill_description());
			return skillrepository.save(skillToUpdate);
		}).orElseThrow(() -> new ResourceNotFoundException("SkillId " + id + " not found"));
		
	}
}
