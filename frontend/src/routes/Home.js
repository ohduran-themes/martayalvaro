import React from 'react';
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
import { options } from '../config/options';
import image3 from '../images/image3.jpg';

import '../App.css';
import '../fonts.css';


export class Home extends React.Component {
  render() {

    return (
      <React.Fragment>
        <Row className="justify-content-center">
          <Col lg={10}>
            <Image src={image3} className="framed-image" fluid/>
          </Col>
        </Row>

        <Row className="mt-3 sub-profile-container">
          <Col className="text-center">
          <h5>{this.props.t('Please join us for our wedding celebration on')}</h5>
          </Col>
        </Row>

        <Row>
          <Col className="mt-3 text-center font-family-elegant">
            <h1>{this.props.t('3rd October, 2020')}</h1>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}
