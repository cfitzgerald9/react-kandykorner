import React, { Component } from 'react';
import { Link } from "react-router-dom";
class EmployeeList extends Component {
    render() {
        return (
            <React.Fragment>
            <div className="employeeButton">
            <button type="button"
                    className="btn btn-success"
                    onClick={() => {
                        this.props.history.push("/employees/new")}
                    }>
               Add Employee
            </button>
        </div>
            <article className="employees">
                <h1>Employee List</h1>
                {this.props.employees.map((employee) => {
                    return <p key={employee.id}>{employee.name} <button className="deleteEmployeeButton" onClick={() => (this.props.deleteEmployee(employee.id))}>Fire me</button>  <Link className="nav-link" to={`/employees/${employee.id}`}>More Details</Link></p>
                })}
            </article>
            </React.Fragment>
        );

    }
}

export default EmployeeList;