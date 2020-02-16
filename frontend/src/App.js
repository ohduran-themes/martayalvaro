import React from 'react';
import { MemoryRouter, Switch, Route } from 'react-router-dom';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
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
        <Col>
          <h2>
            Navigate to{' '}
            <ButtonToolbar className="custom-btn-toolbar">
              <LinkContainer to="/">
                <Button>Home</Button>
              </LinkContainer>
              <LinkContainer to="/about">
                <Button>About</Button>
              </LinkContainer>
              <LinkContainer to="/users">
                <Button>Users</Button>
              </LinkContainer>
            </ButtonToolbar>
          </h2>
        </Col>

      </Row>
    </Container>
  </MemoryRouter>
);

export default App;
