<Row>
  <Col>
    <Row className="text-center justify-content-center mb-3">
      <h4>Por transferencia</h4>
    </Row>
    <Row className="text-center justify-content-center">
      <Col>

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