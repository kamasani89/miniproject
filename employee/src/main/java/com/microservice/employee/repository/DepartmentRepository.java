package com.microservice.employee.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.microservice.employee.entity.Department;

@Repository
public interface DepartmentRepository extends JpaRepository<Department, Integer>{

}
