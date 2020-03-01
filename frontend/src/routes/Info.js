import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import image4 from '../images/image4.jpg';
import Image from 'react-bootstrap/Image';

export class Info extends React.Component {
  render() {

      return (
        <React.Fragment>
        <Row>
          <Col lg={3}>
            <Row>
              <Col>
                <Image src={image4} className="framed-image" fluid/>
              </Col>
            </Row>
          </Col>
          <Col lg={6}>
            <Row>
            <Col>
              Texto
            </Col>
            </Row>
          </Col>
        </Row>
        </React.Fragment>
      );
    }
  }
