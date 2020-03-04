import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import staagnes from '../images/staagnes.jpg';
import masdesantllei from '../images/masdesantllei.jpg';
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapPin } from '@fortawesome/free-solid-svg-icons'
import GoogleMapReact from 'google-map-react';

export class Info extends React.Component {

  static defaultProps = {
    zoom: 15
  };

  render() {

      return (
        <React.Fragment>
          <Row>
            <Col><h2 className="text-center my-3">{this.props.t('Ceremonia - 12.30')}</h2></Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg={5}>
              <Row>
                <Col>
                  <Image src={staagnes} className="framed-image" fluid/>
                </Col>
              </Row>
            </Col>
            <Col lg={7}>
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
              <Row>
                <div style={{ height: '21vh', width: '100%' }}>
                  <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyBdkOJUA6ibeRYJ1m2lT3p5XRlB75ePE7A' }}
                    defaultCenter={{
                      lat: 41.6047438,
                      lng: 2.353613
                    }}
                    defaultZoom={this.props.zoom}>
                    <FontAwesomeIcon icon={faMapPin}
                      lat={41.6047438}
                      lng={2.353613}/>
                  </GoogleMapReact>
                </div>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col><h2 className="text-center my-3">{this.props.t('Celebración - 14.00')}</h2></Col>
          </Row>
          <Row className="justify-content-center">

            <Col lg={7}>
              <Row>
                <Col>
                  <p className="text-justify">{this.props.t("Nos vemos a las 14.00")}</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p><FontAwesomeIcon icon={faMapPin}/> Camí de la Casa Alta, s/n, Ctra. Granollers a Masnou, km.10, 5, 08410, Barcelona</p>
                </Col>
              </Row>
              <Row>
                <div style={{ height: '21vh', width: '100%' }}>
                  <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyBdkOJUA6ibeRYJ1m2lT3p5XRlB75ePE7A' }}
                    defaultCenter={{
                      lat: 41.547561,
                      lng: 2.299448
                    }}
                    defaultZoom={this.props.zoom}>
                    <FontAwesomeIcon icon={faMapPin}
                      lat={41.547561}
                      lng={2.299448}/>
                  </GoogleMapReact>
                </div>
              </Row>
            </Col>
            <Col lg={5}>
              <Row>
                <Col>
                  <Image src={masdesantllei} className="framed-image" fluid/>
                </Col>
              </Row>
            </Col>
          </Row>
        </React.Fragment>
      );
    }
  }
