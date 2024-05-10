package com.ems.service.impl;

import com.ems.dto.EmployeeDto;
import com.ems.entity.Employee;
import com.ems.exception.RescourceNotFoundException;
import com.ems.mapper.EmployeeMapper;
import com.ems.repository.EmployeeRepository;
import com.ems.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

    private EmployeeRepository employeeRepository;


    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {
        Employee employee = EmployeeMapper.mapToEmployee(employeeDto);
        Employee saveEmployee = employeeRepository.save(employee);
        return EmployeeMapper.mapEmployeeDto(saveEmployee);
    }

    @Override
    public EmployeeDto getEmployeeById(Long employeeById) {
        Employee employee = employeeRepository.findById(employeeById).orElseThrow(() -> new RescourceNotFoundException("Employee is not Exists with  given Id" + employeeById));
        return EmployeeMapper.mapEmployeeDto(employee);
    }

    @Override
    public List<EmployeeDto> getAllEmployee() {
        List<Employee> employees = employeeRepository.findAll();
        return employees.stream().map((employee) -> EmployeeMapper.mapEmployeeDto(employee))
                .collect(Collectors.toList());
    }

    @Override
    public EmployeeDto updateEmpployee(Long employeeId, EmployeeDto employeeDto) {
        Employee employee = employeeRepository.findById(employeeId).orElseThrow(() -> new RescourceNotFoundException("Employee is not exists with given id: " + employeeId));
        employee.setFirstName(employeeDto.getFirstName());
        employee.setLastName(employeeDto.getLastName());
        employee.setEmail(employeeDto.getEmail());
        Employee updateEmployee = employeeRepository.save(employee);


        return EmployeeMapper.mapEmployeeDto(updateEmployee);
    }

    @PutMapping("{id}")
    @Override
    public EmployeeDto deleteEmployee(@PathVariable("id") Long employeeId) {
        Employee employee = employeeRepository.findById(employeeId).orElseThrow(() -> new RescourceNotFoundException("Employee is not exists with given id: " + employeeId));

        employeeRepository.deleteById(employeeId);
        return null;
    }


}
