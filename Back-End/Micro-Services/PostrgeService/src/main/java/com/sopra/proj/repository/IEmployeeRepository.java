/**
 * 
 */
package com.sopra.proj.repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sopra.proj.bean.Employee;

/**
 * @author sonsaxena
 *
 */
@Repository
@Transactional
public interface IEmployeeRepository extends JpaRepository<Employee, Integer>{

}
