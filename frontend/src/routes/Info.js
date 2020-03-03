import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import staagnes from '../images/staagnes.jpg';
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapPin } from '@fortawesome/free-solid-svg-icons'

export class Info extends React.Component {
  render() {

      return (
        <React.Fragment>
        <Row>
          <Col><h2 className="text-center my-3">{this.props.t('Ceremonia - 12.30')}</h2></Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg={4}>
            <Row>
              <Col>
                <Image src={staagnes} className="framed-image" fluid/>
              </Col>
            </Row>
          </Col>
          <Col lg={8}>
            <Row>
              <Col>
                <p className="text-justify">{this.props.t("Nos vemos a las 12.30")}</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p><FontAwesomeIcon icon={faMapPin}/> Plaza Del Obispado, Santa Agnès de Malanyanes, La Roca del Vallès, España</p>
              </Col>
            </Row>
          </Col>
        </Row>
        </React.Fragment>
      );
    }
  }
