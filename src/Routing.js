import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import LandingComponent from './components/LandingComponent/LandingComponent';
import CountdownComponent from './components/CountdownComponent/CountdownComponent';
import AboutComponent from './components/AboutComponent/AboutComponent';

class Routing extends Component {
    
    render() {
        return (
            <>
                <Route exact path="/">
                    <CountdownComponent/>
                </Route>
                <Route path="/home">
                    <LandingComponent/>
                </Route>
                <Route path="/about">
                    <AboutComponent/>
                </Route>
            </>
        )
    }
}

export default Routing;