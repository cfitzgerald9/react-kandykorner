import React, { Component } from 'react';
import ApplicationViews from './ApplicationViews'
import NavBar from './nav/NavBar'


class KandyKorner extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <ApplicationViews />
            </React.Fragment>
        )
    }
}

export default KandyKorner