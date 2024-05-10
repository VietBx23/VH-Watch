import React, { useEffect, useState } from "react";
import { deleteEmployee, listEmployee } from "../service/EmployeeService";
import { useNavigate } from "react-router-dom";

// Định nghĩa một functional component tên là ListEmployeeComponets
const ListEmployeeComponets = () => {
  // Sử dụng hook useState để khởi tạo một state employees chứa danh sách nhân viên. Ban đầu, nó sẽ trống []
  const [employees, setEmloyees] = useState([]);
  const navigator = useNavigate();

  // Sử dụng hook useEffect để gọi hàm listEmployee() mỗi khi component được render lần đầu tiên ([] là dependency array, khi truyền vào một array rỗng, useEffect chỉ được gọi một lần khi component được render lần đầu tiên)
  useEffect(() => {
    getAllEmployee();
  }, []);

  function getAllEmployee() {
    listEmployee()
      .then((response) => {
        setEmloyees(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function addNewEmployee() {
    navigator("/add-employee");
  }

  function updateEmployee(id) {
    navigator(`/edit-employee/${id}`);
  }
  function deleteEmployees(id) {
    console.log(id);
    deleteEmployee(id)
      .then((response) => {
        getAllEmployee();
      })
      .catch((error) => {
        console.log(error);
      });
    // navigator(`/delete-employee/${id}`);
  }
  // Render ra giao diện người dùng
  return (
    <div className="container ">
      <h2 className="text-center titleAddEmployees">List Of Employees</h2>
      <button className="btn btn-primary mb-2 " onClick={addNewEmployee}>
        Add Employees{" "}
      </button>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Employee Id</th>
            <th>Employee First Name</th>
            <th>Employee Last Name</th>
            <th>Employee Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Lặp qua mỗi nhân viên trong mảng employees và hiển thị thông tin của họ trong bảng  */}
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <th>
                <button
                  className="btn btn-primary"
                  onClick={() => updateEmployee(employee.id)}
                >
                  {" "}
                  Update
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteEmployees(employee.id)}
                >
                  {" "}
                  Delete
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployeeComponets;
