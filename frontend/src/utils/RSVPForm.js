// Customize this 'myform.js' script and add it to your JS bundle.
// Then import it with 'import MyForm from "./myform.js"'.
// Finally, add a <MyForm/> element whereever you wish to display the form.

import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {downArrow} from '../images/down_arrow_select.jpg';


const numberSelect = {
    boxSizing: "border-box",
    boxShadow: "0 1px 4px var(--shadow-color)",
    border: "0",
    overflow: "hidden",
}

export default class RSVPForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (

      <Form
        onSubmit={this.submitForm}
        action="https://formspree.io/xjvovpjj"
        method="POST">
      <Form.Row>
        <Form.Group as={Col} lg={6} md={6} sm={12} xs={12} controlId="formGridEmail">
          <Form.Control type="text" name="nombre" placeholder={this.props.t('Nombre')} className="framed-image text-center" />
        </Form.Group>

        <Form.Group as={Col} lg={6} md={6} sm={12} xs={12} controlId="formGridEmail">
          <Form.Control type="email" name="email" placeholder={this.props.t('Email')} className="framed-image text-center" />
        </Form.Group>
        </Form.Row>

        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Row className="justify-content-center">
            <Form.Group as={Col} lg={8} md={8} sm={10} xs={12} controlId="formGridEmail" className="text-center">
              <Form.Label>{this.props.t('¿Cuántos sois?')}</Form.Label>
              <Form.Control as="select" name="company" className="text-center" style={numberSelect}>
                <option value="1" className="text-center">{this.props.t('Voy solo, pero la noche es joven')}</option>
                <option value="2" className="text-center">{this.props.t('Voy acompañado de una persona')}</option>
                <option value="3" className="text-center">{this.props.t('Vamos en plan Trio Calavera')}</option>
                <option value="4" className="text-center">{this.props.t('Somos los 4 Fantásticos')}</option>
                <option value="4+" className="text-center">{this.props.t('Somos más de 4, siéntanos en una grada')}</option>
              </Form.Control>
            </Form.Group>
          </ Form.Row>
        </Form.Group>

        <Form.Group controlId="formGridAddress2" className="text-center">
        <Form.Label >{this.props.t('¿Tienes alguna alergia alimentaria?')}</Form.Label>
        <Form.Control placeholder="" className="framed-image "/>
        </Form.Group>

        <Form.Row className="justify-content-center">
          <Form.Group as={Col} lg={2} md={2} sm={2} xs={2} controlId="formGridEmail" className="text-center">
            <Button variant="primary" type="submit" className="d-flex align-center">
            {this.props.t('Enviar')}
            </Button>
          </Form.Group>
        </ Form.Row>

      </Form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
        console.log(xhr);
      }
    };
    xhr.send(data);
  }
}
