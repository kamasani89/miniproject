package com.microservice.employee.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.microservice.employee.entity.Department;
import com.microservice.employee.repository.DepartmentRepository;
import com.microservice.employee.service.DepartmentService;

@Service
public class DepartmentServiceImpl implements DepartmentService {

	@Autowired
	private DepartmentRepository repository;
	
	@Override
	public Department save(Department department) {
		
		return repository.save(department);
	}

	@Override
	public List<Department> getAllDepartment() {
		return repository.findAll();
	}

}
