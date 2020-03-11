import React from 'react';
import styled from 'styled-components'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import creditcard from '../images/credit_card.png';

const PayPalButton = styled.form`
  -webkit-transform: scale(1);
  transform: scale(1);
  -webkit-transition: .3s ease-in-out;
  transition: .3s ease-in-out;
  &:hover {
    -webkit-transform: scale(1.3);
  	transform: scale(1.3);
  }
`;

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
          <Col>
            <Row className="text-center justify-content-center mb-3">
              <h4>Por transferencia</h4>
            </Row>
            <Row className="text-center justify-content-center">
              <Col>
              <p>Álvaro Durán Barata y Marta Hurtado Sabate</p>
              <p>ES56 2100 0813 6702 0099 8515</p>
              <p>CaixaBank, S.A.</p>
              </Col>
            </Row>

          </Col>
          <Col>
            <Row className="text-center justify-content-center mb-3">
              <h4>Por PayPal</h4>
            </Row>
            <Row className="text-center d-flex align-items-center justify-content-center">
              <PayPalButton action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input type="hidden" name="hosted_button_id" value="XDPMGP2BXP9M4" />
                <input type="image"
                      src={creditcard}
                      style={{width: '25%', height: '25%'}}
                      border="0"
                      name="submit"/>
                <img alt="" border="0" src="https://www.paypal.com/es_ES/i/scr/pixel.gif" width="1" height="1" />
              </PayPalButton>
            </Row>

          </Col>
        </Row>

      </React.Fragment>
  )}
}
