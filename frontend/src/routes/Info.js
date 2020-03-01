import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export class Info extends React.Component {
  render() {

      return (
        <React.Fragment>
        <Row>
          <Col lg={6}>
            <Row>
            Una fila
            </Row>
            <Row>
            Y otra
            </Row>
          </Col>
          <Col lg={4}>
            <Row>
            Una fila
            </Row>
            <Row>
            Y otra
            </Row>
          </Col>
          <Col lg={2}>
            <Row>
            Una fila
            </Row>
            <Row>
            Y otra
            </Row>
          </Col>

        </Row>
        </React.Fragment>
      );
    }
  }
