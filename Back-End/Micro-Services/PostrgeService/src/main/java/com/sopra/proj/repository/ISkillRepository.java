package com.sopra.proj.repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sopra.proj.bean.Skill;

@Repository
@Transactional
public interface ISkillRepository extends JpaRepository<Skill,Integer>{

}
