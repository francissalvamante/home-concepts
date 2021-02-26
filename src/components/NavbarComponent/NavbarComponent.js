import React, { Component } from 'react';
import {
    Navbar,
    Nav
} from 'react-bootstrap';
import './NavbarComponent.css';
import hclogo from '../../img/hc.png';

class NavbarComponent extends Component {

    render() {
        return (
            <Navbar bg="white" expand="lg" sticky="top">
                <Navbar.Brand href="/home">
                    <img alt="" src={ hclogo } width="50" height="50"></img>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse>
                    <Nav.Link href="/about">About</Nav.Link>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavbarComponent;