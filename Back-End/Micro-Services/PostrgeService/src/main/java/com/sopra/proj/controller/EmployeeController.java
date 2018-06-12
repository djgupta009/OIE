/**
 * 
 */
package com.sopra.proj.controller;

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

import com.sopra.proj.bean.Employee;
import com.sopra.proj.service.IEmployeeService;

/**
 * @author sonsaxena
 *
 */
@RestController
public class EmployeeController {

	@Autowired
	private IEmployeeService employeeservice;
	
	@CrossOrigin(origins = "http://127.0.0.1:4200")
	@RequestMapping(value = "/employees", method = RequestMethod.GET)
	public ResponseEntity<List<Employee>> getEmployees() {
		List<Employee> employees = employeeservice.getEmployees();		
		if (employees.isEmpty())
			return new ResponseEntity<List<Employee>>(HttpStatus.NO_CONTENT);
		return new ResponseEntity<List<Employee>>(employees, HttpStatus.OK);
	}

	@CrossOrigin(origins = "http://127.0.0.1:4200")
	@RequestMapping(value = "/addemployee", method = RequestMethod.POST,consumes = "application/json")
	public ResponseEntity<Void> addEmployee(@Valid @RequestBody Employee emp) {
		employeeservice.addEmployee(emp);
		return new ResponseEntity<Void>(HttpStatus.CREATED);
	}

	@CrossOrigin(origins = "http://127.0.0.1:4200")
	@RequestMapping(value = "/deleteemployee/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Employee> deleteEmployee(@Valid @PathVariable("id") int id) {
			employeeservice.deleteEmployee(id);
		return new ResponseEntity<Employee>(HttpStatus.OK);
	}

	@CrossOrigin(origins = "http://127.0.0.1:4200")
	@RequestMapping(value = "/updateemployee/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Employee> updateEmployee(@Valid @PathVariable("id") int id, @Valid @RequestBody Employee emp) {
			employeeservice.updateEmployee(id, emp);
		return new ResponseEntity<Employee>(HttpStatus.OK);
	}
	
}
