import React, { Component } from "react"
import { Route } from 'react-router-dom'
import EmployeeList from './employees/EmployeeList'
import CandyList from './candies/CandyList'
import StoreList from './locations/StoreList'

class ApplicationViews extends Component {
state = {
    stores: [],
    employees: [],
    types: [],
    candies: []
}

componentDidMount() {
    const newState = {};
    fetch("http://localhost:5002/candies")
    .then(r => r.json())
    .then(candies => newState.candies = candies)
    .then(() => fetch("http://localhost:5002/employees")
    .then(r => r.json()))
    .then(employees => newState.employees = employees)
    .then(() => fetch("http://localhost:5002/stores")
    .then(r => r.json()))
    .then(stores => newState.stores = stores)
    .then(() => fetch("http://localhost:5002/types")
    .then(r => r.json()))
    .then(types => newState.types = types)
    .then(() => this.setState(newState))
}
render() {
    return (
        <div className= "container-div">
            <Route exact path="/" render={(props) => {
                return <StoreList stores={this.state.stores} />
            }} />
            <Route path="/candies" render={(props) => {
                return <CandyList candies={this.state.candies} types={this.state.types} />
            }} />
            <Route path="/employees" render={(props) => {
                return <EmployeeList employees={this.state.employees} />
            }} />
        </div>
    )
}
}

export default ApplicationViews;