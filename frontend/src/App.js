import React from 'react';
import { MemoryRouter, Switch, Route } from 'react-router-dom';

import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { LinkContainer } from 'react-router-bootstrap';

import image2 from './images/image2.png';

import './App.css';
import './fonts.css';

const Home = () => <span>Home</span>;

const About = () => <span>About</span>;

const Users = () => <span>Users</span>;

const App = () => (
  <MemoryRouter>
    <Container className="header-container">

      {/* HEADER */}
      <Row className="justify-content-md-center">
        <Col>
          <Row className="pt-5">
            <Col>
              <h1 className="pt-5 text-center couple-vertical-name">Marta</h1>
            </Col>
          </Row>
          <Row className="">
            <Col>
              <h1 className="pt-1 text-center font-family-elegant">&</h1>
            </Col>
          </Row>
          <Row className="">
            <Col>
              <h1 className="pt-1 text-center couple-vertical-name">Alvaro</h1>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* NAVBAR */}
      <Container>
        <Navbar bg="light" variant="light">
        <LinkContainer to="/"><Navbar.Brand>Home</Navbar.Brand></LinkContainer>

        <Nav>
          <LinkContainer to="/about"><Nav.Link>About</Nav.Link></LinkContainer>
          <LinkContainer to="/users"><Nav.Link>Users</Nav.Link></LinkContainer>
        </Nav>
        </Navbar>
      </Container>

      {/* <Row>
        <Col>
          <h2>
            Current Page is{' '}
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/users">
                <Users />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </h2>
        </Col>
      </Row> */}

      <Row className="mt-3 sub-profile-container">
        <Col className="text-center">
        <h5>Please join us for our wedding celebration on</h5>
        </Col>
      </Row>
      <Row>
        <Col className="mt-3 text-center font-family-elegant">
          <h1>3rd October, 2020</h1>
        </Col>
      </Row>
      <Row className="mt-2 justify-content-center">
        <Image src={image2} fluid />
      </Row>
    </Container>
  </MemoryRouter>
);

export default App;
