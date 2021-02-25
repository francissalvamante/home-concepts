import { React, Component } from 'react';
import Countdown from 'react-countdown';
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import bg from '../../img/carousel-contents/cover.jpg';
import './CountdownComponent.css';

class CountdownComponent extends Component {
    constructor(props) {
        super(props);

        this.release = new Date('03/01/2021 08:00:00');
    }

    renderer = ({ days, hours, minutes, seconds, completed }) => {
        if(completed) {
            return <Redirect to="/home"></Redirect>
        } else {
            return (
                <Container fluid>
                    <Row>
                        <Col className="countdown-container">
                            <img src={ bg } alt=""></img>
                        </Col>
                    </Row>
                </Container>
            );
        }
    }

    render() {
        return (
            <Container fluid>
                <Countdown date={ this.release } renderer={this.renderer}/>
            </Container>
        )
    }
}

export default CountdownComponent;