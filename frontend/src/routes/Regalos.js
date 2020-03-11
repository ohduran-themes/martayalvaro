import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Media from 'react-bootstrap/Media';
import Card from 'react-bootstrap/Card';
import image5 from '../images/image5.jpeg';

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
          <p>{this.props.t('pero si además queréis contribuir de alguna otra forma, podéis hacerlo de la siguiente manera')}:</p></Col>
        </Row>
        <Row className="justify-content-center">
          <Card className="shadow-sm framed-image ">
            <Card.Body>
              <Media>
                <img
                  width={64}
                  height={64}
                  className="mr-3 rounded-circle"
                  src={image5}
                  alt="Bank Data"
                />
                <Media.Body>
                  <h5>Álvaro Durán Barata y Marta Hurtado Sabate</h5>
                    <strong>ES56 2100 0813 6702 0099 8515</strong>
                    <p>CaixaBank, S.A.</p>
                </Media.Body>
              </Media>
            </Card.Body>
          </Card>
        </Row>


      </React.Fragment>
  )}
}
