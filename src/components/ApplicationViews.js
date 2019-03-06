import React, { Component } from "react"
import { Route } from 'react-router-dom'
import EmployeeList from './employees/EmployeeList'
import CandyList from './candies/CandyList'
import StoreList from './locations/StoreList'

class ApplicationViews extends Component {
storeArray =[
    { id: 1, name: "Kandy Korner North", address: "500 Candy Land" },
    { id: 2, name: "Kandy Korner South", address: "10101 Sweet Tooth Court" }
]
employeeArray = [
    { id: 1, name: "Jessica Younker" },
    { id: 2, name: "Jordan Nelson" },
    { id: 3, name: "Zoe LeBlanc" },
    { id: 4, name: "Blaise Roberts" }
]
candyTypes = [
    {id:1, name: "sucker"},
    {id:2, name: "gummi"},
    {id:3, name: "sour"},
    {id:4, name: "chocolate"}
]
candyArray = [
    {id:1, name: "Reese's Cups", candyTypeId:4 },
    {id:2, name: "Dum-Dums", candyTypeId:1 },
    {id:3, name: "Gummi Bears", candyTypeId:2 },
    {id:4, name: "Warheads", candyTypeId:3 },
    {id:5, name: "Snickers", candyTypeId:4}
]

state = {
    stores: this.storeArray,
    employees: this.employeeArray,
    types: this.candyTypes,
    candies: this.candyArray
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