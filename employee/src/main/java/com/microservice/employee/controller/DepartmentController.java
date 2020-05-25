package com.microservice.employee.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.microservice.employee.entity.Department;
import com.microservice.employee.service.DepartmentService;

@RestController
@RequestMapping("/deparment")
public class DepartmentController {

	@Autowired
	private DepartmentService service;

	@PostMapping("/save")
	public ResponseEntity<Department> save(@RequestBody Department dept) {

		Department department = service.save(dept);

		return new ResponseEntity<Department>(department, HttpStatus.CREATED);

	}

	@GetMapping("/get-all-departments")
	public ResponseEntity<List<Department>> getDepartments() {
		List<Department> deptList = service.getAllDepartment();
		return new ResponseEntity<List<Department>>(deptList, HttpStatus.OK);
	}

}
