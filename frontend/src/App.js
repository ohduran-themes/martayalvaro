import React, { Component } from 'react';
import { MemoryRouter } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Route, Switch } from "react-router";
import { LinkContainer } from 'react-router-bootstrap';
import { withTranslation } from 'react-i18next';
import Select from 'react-select';
import { options } from './config/options';
import image2 from './images/image2.png';

import './App.css';
import './fonts.css';

import {Home} from './routes/Home';
import {Info} from './routes/Info';

const Regalos = () => <span>Regalos</span>;
const RSVP = () => <span>Confirma</span>;

export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      lang: options[0],
    };
  }

  changeLang = (lang) => {
    const { i18n } = this.props;
    const { value } = lang;
    this.setState({ lang });
    i18n.changeLanguage(value);
  };

  render(){
    const { lang } = this.state;
    const { t } = this.props;

    return (
      <MemoryRouter>
        <Container className="header-container">
          <Row className="justify-content-end">
            <Col lg={2} md={2} xs={2}>
              <Select
                defaultValue={options[0]}
                options={options}
                value={lang}
                onChange={this.changeLang}
                className="App-Select"
              />
            </Col>
          </Row>

          {/* HEADER */}
          <Row className="justify-content-md-center">
            <Col>
              <Row>
                <Col>
                  <h1 className="text-center couple-vertical-name">Marta</h1>
                </Col>
              </Row>
              <Row className="">
                <Col>
                  <h1 className="text-center font-family-elegant">&</h1>
                </Col>
              </Row>
              <Row className="">
                <Col>
                <h1 className="pt-5 text-center couple-vertical-name" style={{marginTop: "-1em"}}>Alvaro</h1>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        {/* NAVBAR */}
        <Container fluid>
          <Navbar bg="light" variant="light" expand="md">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-md-center">
              <Nav>
                <LinkContainer to="/"><Nav.Link>{t('Home')}</Nav.Link></LinkContainer>
                <LinkContainer to="/info"><Nav.Link>{t('Información')}</Nav.Link></LinkContainer>
                <LinkContainer to="/regalos"><Nav.Link>{t('Lista de Regalos')}</Nav.Link></LinkContainer>
                <LinkContainer to="/rsvp"><Nav.Link>{t('Reservar')}</Nav.Link></LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>

        <Container className="mt-2">

          <Switch>
            <Route exact path="/">
              <Info t={t} lang={lang}/>
            </Route>
            <Route exact path="/regalos">
              <Regalos t={t} lang={lang}/>
            </Route>
            <Route exact path="/rsvp">
              <RSVP t={t} lang={lang}/>
            </Route>
            <Route exact path="/">
              <Home t={t} lang={lang}/>
            </Route>
          </Switch>

          <Row className="mt-2 justify-content-center">
            <Image src={image2} />
          </Row>
        </Container>
      </MemoryRouter>
    );
  }
}

export default withTranslation()(App);
