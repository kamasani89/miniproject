package com.microservice.employee.service;

import java.util.List;

import com.microservice.employee.entity.Department;

public interface DepartmentService {
	
	public Department save(Department department);

	public List<Department> getAllDepartment();
}
