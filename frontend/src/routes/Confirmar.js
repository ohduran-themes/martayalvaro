import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RSVPForm from '../utils/RSVPForm';

export class Confirmar extends React.Component {

  render(){

    return(
      <React.Fragment>
      <Row>
        <Col><h2 className="text-center my-3">{this.props.t('Confirma tu Asistencia')}</h2></Col>
      </Row>
      <Row className="justify-content-center">
        <Col lg={6}><RSVPForm t={this.props.t}/></Col>
      </Row>

      </React.Fragment>


  )}
}
