import React from 'react';
import { MemoryRouter, Switch, Route } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { LinkContainer } from 'react-router-bootstrap';

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
              <h1 className="pt-1 text-center couple-vertical-and">and</h1>
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
      <Navbar bg="light" variant="light">
      <LinkContainer to="/"><Navbar.Brand>Home</Navbar.Brand></LinkContainer>

        <Nav className="mr-auto">
          <LinkContainer to="/about"><Nav.Link>About</Nav.Link></LinkContainer>
          <LinkContainer to="/users"><Nav.Link>Users</Nav.Link></LinkContainer>
        </Nav>
      </Navbar>

      <Row>
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

      </Row>
    </Container>
  </MemoryRouter>
);

export default App;
