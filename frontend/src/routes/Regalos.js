import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export class Regalos extends React.Component {

  render(){

    return(
      <React.Fragment>
        <Row>
          <Col><h2 className="text-center my-3">{this.props.t('Nuestra Luna de Miel')}</h2></Col>
        </Row>
        <Row>
          <Col className="text-center my-3">
          <p>{this.props.t('Vuestra compañía en nuestro día más especial es el mejor regalo')},</p>
          <p>{this.props.t('pero si además queréis contribuir de alguna otra forma, podéis hacerlo de dos maneras')}:</p></Col>
        </Row>
        <Row>
          <Col>TEST</Col>
          <Col>PRUEBA</Col>
        </Row>

      </React.Fragment>
  )}
}
