import { React, Component } from 'react';
import Countdown, { zeroPad } from 'react-countdown';
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
                            <img src={ bg } alt=""/>
                            <div className="countdown">
                                <Container fluid>
                                    <Row>
                                        <Col className="flex-c">
                                            <span className="coming-soon">Coming Soon</span>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="flex-c">
                                            <div className="time-container">
                                                <span className="days">{ zeroPad(days, 2) }</span><br/>
                                                <span className="unit">DAYS</span>
                                            </div>
                                            <div className="time-container">
                                                <span className="hours">{ zeroPad(hours, 2) }</span><br/>
                                                <span className="unit">HOURS</span>
                                            </div>
                                            <div className="time-container">
                                                <span className="minutes">{ zeroPad(minutes, 2) }</span><br/>
                                                <span className="unit">MINUTES</span>
                                            </div>
                                            <div className="time-container">
                                                <span className="seconds">{ zeroPad(seconds, 2) }</span><br/>
                                                <span className="unit">SECONDS</span>
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
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