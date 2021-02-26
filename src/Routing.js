import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import LandingComponent from './components/LandingComponent/LandingComponent';
import CountdownComponent from './components/CountdownComponent/CountdownComponent';

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
            </>
        )
    }
}

export default Routing;