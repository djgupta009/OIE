/**
 * 
 */
package com.sopra.proj.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
	
	@RequestMapping(value="/employees",method=RequestMethod.GET)
    public ResponseEntity<List<Employee>> getEmployees() {
        List<Employee> employees = employeeservice.getEmployees();
        if(employees.isEmpty())
            return new ResponseEntity<List<Employee>>(HttpStatus.NO_CONTENT);
        return new ResponseEntity<List<Employee>>(employees, HttpStatus.OK);
    }
 
    @RequestMapping(value="/addemployee",method=RequestMethod.POST)
    public ResponseEntity<Void> addEmployee(@RequestBody Employee emp){
    	employeeservice.addEmployee(emp);
        return new ResponseEntity<Void>(HttpStatus.CREATED);
    }
    
    @RequestMapping(value="/deleteemployee/{id}",method=RequestMethod.DELETE)
    public ResponseEntity<Employee> deleteEmployee(@PathVariable("id") int id){
       
    	try{
    		employeeservice.deleteEmployee(id); 
    	}catch(Exception e)
    	{
            return new ResponseEntity<Employee>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<Employee>(HttpStatus.OK);
    }
    
    @RequestMapping(value="/updateemployee/{id}",method=RequestMethod.PUT)
    public ResponseEntity<Employee> updateEmployee(@PathVariable("id") int id, @RequestBody Employee emp){
    	try{
    		employeeservice.updateEmployee(id,emp);
    	}
    	catch(Exception e)
    	{
            return new ResponseEntity<Employee>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<Employee>(HttpStatus.OK);
    }

}
