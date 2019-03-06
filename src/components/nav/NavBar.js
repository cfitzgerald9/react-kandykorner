import React, { Component } from "react"
import { Link } from "react-router-dom"


class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-light fixed-top light-blue flex-md-nowrap p-0 shadow">
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Store Locations</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/candies">Candies</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/employees">Employees</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default NavBar
