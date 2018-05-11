/**
 * 
 */
package com.sopra.proj.service;
import java.util.List;
import com.sopra.proj.bean.Employee;

/**
 * @author sonsaxena
 *
 */
public interface IEmployeeService {

	public void addEmployee(Employee bean);

	public List<Employee> getEmployees();

	public void deleteEmployee(int id);
	
	public void updateEmployee(int id, Employee emp);
}
