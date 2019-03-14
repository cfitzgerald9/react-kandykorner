import React, { Component } from "react"
import { Route , Redirect } from 'react-router-dom'
import EmployeeList from './employees/EmployeeList'
import CandyList from './candies/CandyList'
import StoreList from './locations/StoreList'
import CandyManager from '../modules/CandyManager'
import CandyForm from './candies/CandyForm'
import EmployeeManager from "../modules/EmployeeManager";
import LocationManager from "../modules/LocationManager";
import TypeManager from "../modules/TypeManager"
import CandyDetail from './candies/CandyDetail'
import EmployeeDetail from './employees/EmployeeDetail'
import EmployeeForm from './employees/EmployeeForm'
import Login from './authentication/Login'

class ApplicationViews extends Component {
    isAuthenticated = () => sessionStorage.getItem("credentials") !== null
state = {
    stores: [],
    employees: [],
    types: [],
    candies: []
}

deleteCandy = id =>{
    return fetch(`http://localhost:5002/candies/${id}`,{
        method: "DELETE"
    })
    .then(response => response.json())
    .then(() => fetch(`http://localhost:5002/candies`))
    .then(response => response.json())
    .then(candies => this.setState({
            candies: candies
    }))
}
addCandy = candy =>
        CandyManager.post(candy)
            .then(() => CandyManager.getAll())
            .then(candies =>
                this.setState({
                    candies: candies
                })
            );
            addEmployee = employee =>
            EmployeeManager.post(employee)
                .then(() => EmployeeManager.getAll())
                .then(employees =>
                    this.setState({
                        employees: employees
                    })
                );

deleteEmployee = id =>{
    return fetch(`http://localhost:5002/employees/${id}`,{
        method: "DELETE"
    })
    .then(r => r.json())
    .then(() => fetch(`http://localhost:5002/employees`))
    .then(r => r.json())
    .then(employees => this.setState({
        employees: employees
    }))
}

componentDidMount() {
    const newState = {};
    CandyManager.getAll()
    .then(candies => newState.candies = candies)
    .then(EmployeeManager.getAll)
    .then(employees => newState.employees = employees)
    .then(LocationManager.getAll)
    .then(stores => newState.stores = stores)
    .then(TypeManager.getAll)
    .then(types => newState.types = types)
    .then(() => this.setState(newState))
}
render() {
    return (
        <div className= "container-div">
        <Route path="/login" component={Login} />
            <Route exact path="/" render={(props) => {
                if (this.isAuthenticated()) {
                return <StoreList stores={this.state.stores} />
            } else {
                return <Redirect to="/login" />
                }}} />
            <Route exact path="/candies" render={(props) => {
                 if (this.isAuthenticated()) {
                return <CandyList {...props}
                candies={this.state.candies}
                types={this.state.types}
                deleteCandy={this.deleteCandy} />
            } else {
                return <Redirect to="/login" />
                }}} />
             <Route path="/candies/new" render={(props) => {
                 if (this.isAuthenticated()) {
                 return <CandyForm  {...props}
                 candies={this.state.candies}
                 types={this.state.types}
                 addCandy={this.addCandy} />
                } else {
                    return <Redirect to="/login" />
                    }}} />
            <Route exact path="/employees" render={props => {
                if (this.isAuthenticated()) {
                return <EmployeeList
                deleteEmployee={this.deleteEmployee}
                employees={this.state.employees} />
                } else {
                return <Redirect to="/login" />
                }}} />
             <Route path="/employees/:employeeId(\d+)" render={(props) => {
                  if (this.isAuthenticated()) {
                    return <EmployeeDetail {...props}
                        deleteEmployee={this.deleteEmployee}
                        employees={this.state.employees} />
                    } else {
                        return <Redirect to="/login" />
                        }}} />
                 <Route path="/employees/new" render={(props) => {
                     if (this.isAuthenticated()) {
                    return <EmployeeForm {...props}
                        addEmployee={this.addEmployee}
                        employees={this.state.employees} />
                    } else {
                        return <Redirect to="/login" />
                        }}} />
            <Route path="/candies/:candyId(\d+)" render={(props) => {
                  if (this.isAuthenticated()) {
                    return <CandyDetail {...props}
                        deleteCandy={this.deleteCandy}
                        candies={this.state.candies}
                        types={this.state.types}/>
                  } else {
                        return <Redirect to="/login" />
                        }}} />
        </div>
    )
}
}

export default ApplicationViews;