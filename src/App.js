import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Countdown from 'react-countdown';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class CountdownComponent extends React.Component {
  constructor(props) {
    super(props);
    this.launchDate = new Date('03/01/2021 08:00');
  }

  renderer({ days, hours, minutes, seconds, completed }) {
    if(completed) {
      // do something
    } else {
      return (
        <>
          <Container fluid>
            <Row className="logo-container">
              <Col><a href="https://facebook.com/HomeConceptsPH"><img src="hclogo.png"></img></a></Col>
            </Row>
          </Container>
          <Container fluid>
            <Row>
              <Col className="coming-soon">Coming Soon!</Col>
            </Row>
          </Container>
          {/* <div className="container-fluid coming-soon">Coming Soon</div> */}
          <Container className="countdown-timer">
            <Row>
              <Col md="2">&nbsp;</Col>
              <Col className="text-center" md="2">
                <div className="days">{ days } <br></br>DAYS</div>
              </Col>
              <Col className="text-center" md="2">
                <div className="days">{ hours } <br></br>HOURS</div>
              </Col>
              <Col className="text-center" md="2">
                <div className="days">{ minutes } <br></br>MINUTES</div>
              </Col>
              <Col className="text-center" md="2">
                <div className="days">{ seconds } <br></br>SECONDS</div>
              </Col>
              <Col md="2">&nbsp;</Col>
            </Row>
          </Container>
        </>
      )
    }
  }

  render() {
    return (
      <>
        <Countdown 
          date={ this.launchDate }
          renderer={this.renderer}
        ></Countdown>
      </>
    )
  }
}

function App() {
  return (
    <>
      <Navbar bg="white" expand="lg">
        <Navbar.Brand href="https://facebook.com/HomeConceptsPH"><img src="hclogo.png"></img></Navbar.Brand>
      </Navbar>
      <div className="container-fluid countdown-container">
        <CountdownComponent></CountdownComponent>
      </div>
    </>
  );
}

export default App;
