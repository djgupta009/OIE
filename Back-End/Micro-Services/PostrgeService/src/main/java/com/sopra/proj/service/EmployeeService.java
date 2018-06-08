/**
 * 
 */
package com.sopra.proj.service;

import java.util.List;

import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.sopra.proj.bean.Employee;
import com.sopra.proj.exception.ResourceNotFoundException;
import com.sopra.proj.repository.IEmployeeRepository;
import com.sopra.proj.repository.ISkillRepository;

import ch.qos.logback.classic.Logger;

/**
 * @author sonsaxena
 *
 */
@Service
public class EmployeeService implements IEmployeeService {

	@Autowired
	private IEmployeeRepository employeerepository;

	@Autowired
	private ISkillRepository skillrepository;

	private static final Logger LOGGER = (Logger) LoggerFactory.getLogger(EmployeeService.class);
	public void addEmployee(Employee bean) {
		LOGGER.trace("Service:addemployees() start");
		try {
			Employee emp = employeerepository.save(bean);
			LOGGER.info("Employee added::", emp);
		}catch(DataIntegrityViolationException e)
		{
			throw new DataIntegrityViolationException("Employee cannot be added");
		}catch(Exception e){
			LOGGER.error("Exception::", e);
		}
		LOGGER.trace("Service:addemployees() end");
	}


	public List<Employee> getEmployees() {
		return employeerepository.findAll();
	}

	public void deleteEmployee(int id)  {

		employeerepository.findById(id).map(emp -> {
			employeerepository.delete(emp);
			return ResponseEntity.ok().build();
		}).orElseThrow(() -> new ResourceNotFoundException("EmployeeId " + id + " not found"));
	}

	public void updateEmployee(int id, Employee emp) {
		
	    employeerepository.findById(id).map(empToUpdate -> {
		empToUpdate.setEmp_Desig(emp.getEmp_Desig());
		empToUpdate.setEmp_Contact(emp.getEmp_Contact());
		empToUpdate.setEmp_JoiningDate(emp.getEmp_JoiningDate());
	     if(null != emp.getEmp_Skills() && !emp.getEmp_Skills().isEmpty())
		{
			emp.getEmp_Skills().forEach(skill -> {skillrepository.findById(skill.getSkill_id()).map
				(s -> {
				return s.getSkill_name();}
				).orElseThrow(() -> new ResourceNotFoundException("SkillId " + skill.getSkill_id() + " not found"));  
				});
			empToUpdate.setEmp_Skills(emp.getEmp_Skills());
		}
		return employeerepository.save(empToUpdate);
	}).orElseThrow(() -> new ResourceNotFoundException("EmployeeId " + id + " not found"));
	
	}
}
