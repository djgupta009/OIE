package com.sopra.proj.service;

import java.util.List;

import com.sopra.proj.bean.Skill;

public interface ISkillService {

	public void addSkill(Skill skill);

	public List<Skill> getSkills();

	public void deleteSkill(int id);

	public void updateSkill(int id, Skill skill);

}
