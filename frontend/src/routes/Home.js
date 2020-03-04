import React from 'react';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
          <h5>{this.props.t('Celebra con nosotros el inicio de esta gran aventura el día')}</h5>
          </Col>
        </Row>

        <Row>
          <Col className="mt-3 text-center font-family-elegant">
            <h1>{this.props.t('3 de Octubre de 2020')}</h1>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}
