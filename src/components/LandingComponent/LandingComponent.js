import React, { Component } from 'react';
import { 
    Carousel, 
    Container, 
    Row,
    Col
} from 'react-bootstrap';
import carouselImg from '../../img/carousel-contents/cover.jpg';
import './LandingComponent.css'

class LandingComponent extends Component {

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col>
                        <Carousel controls={ false } interval={ 2500 }>
                            <Carousel.Item>
                                <img className="d-block w-100" src={ carouselImg } alt="First slide"/>
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src={ carouselImg } alt="First slide"/>
                                <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src={ carouselImg } alt="First slide"/>
                                <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default LandingComponent;