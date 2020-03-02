import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import image4 from '../images/image4.jpg';
import Image from 'react-bootstrap/Image';

export class Info extends React.Component {
  render() {

      return (
        <React.Fragment>
        <Row className="justify-content-center">
          <Col lg={4}>
            <Row>
              <Col>
                <Image src={image4} className="framed-image" fluid/>
              </Col>
            </Row>
          </Col>
          <Col lg={6}>
            <Row>
            <Col>
              <p>{this.props.t('La ceremonia comenzará en la iglesia de ')} <a href="https://www.tripadvisor.es/Attraction_Review-g6560687-d8779834-Reviews-Iglesia_Santa_Agnes_de_Malanyanes-Santa_Agnes_de_Malanyanes_La_Roca_del_Valles_C.html">Santa Agnes de Malanyanes</a> {this.props.t("a eso de las 12.30. Para los que vienen de lejos, os recomendamos que hagáis noche en Barcelona, ya que fletaremos un autobús que os lleve a la iglesia.")}</p>
              <p>{this.props.t("Tras el 'Sí, quiero', iremos a celebrarlo al ")} <a href="https://www.masdesantllei.com/">Mas de Sant Lleí</a>.</p>
            </Col>
            </Row>
          </Col>
        </Row>
        </React.Fragment>
      );
    }
  }
