/**
 * 
 */
package com.sopra.proj.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sopra.proj.bean.Employee;

/**
 * @author sonsaxena
 *
 */
@Repository
public interface IEmployeeRepository extends JpaRepository<Employee, Integer>{

}
