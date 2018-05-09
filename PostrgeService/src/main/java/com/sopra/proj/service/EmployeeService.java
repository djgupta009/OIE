/**
 * 
 */
package com.sopra.proj.service;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.sopra.proj.bean.Employee;
import com.sopra.proj.repository.IEmployeeRepository;

/**
 * @author sonsaxena
 *
 */
@Service
public class EmployeeService implements IEmployeeService {
	
	@Autowired
	private IEmployeeRepository employeerepository;
	
	public void addEmployee(Employee bean) {
		Employee emp = employeerepository.save(bean);
	}
	
	
	public List<Employee> getEmployees() {
		List<Employee> employees =new ArrayList<Employee>();
		employees=employeerepository.findAll();
		return employees;
	}

	public void deleteEmployee(int id) {
		employeerepository.deleteById(id);
	}

	public void updateEmployee(int id, Employee emp) {
		Employee empToUpdate = employeerepository.getOne(id);
		empToUpdate.setEmp_Desig(emp.getEmp_Desig());
		empToUpdate.setEmp_Contact(emp.getEmp_Contact());
		employeerepository.save(empToUpdate);
	}
	
	
}
