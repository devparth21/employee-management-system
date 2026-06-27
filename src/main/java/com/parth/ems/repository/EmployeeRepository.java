package com.parth.ems.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.parth.ems.entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {

    List<Employee> findByDepartment(String department);
}