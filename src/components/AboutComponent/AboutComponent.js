import React, { Component } from 'react';
import {
    Card,
    Image
} from 'react-bootstrap';
import './AboutComponent.css';
import ceo from '../../img/ceo.jpg';

export default class AboutComponent extends Component {
    
    render() {
        return (
            <div className="about-container">
                <Card>
                    <Card.Header>About the CEO</Card.Header>
                    <Card.Body>
                        <Image src={ ceo } className="ceo" alt="Ms. Alyssa Villanueva" rounded />
                        <div>asdfa</div>
                        <div>fdsfdaf</div>
                        <div>asdfasfaf</div>
                        <div>dadfhajfla</div>
                        <div>fjldgshgl</div>
                        <div className="certification">Certified Interior Decorator</div>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}