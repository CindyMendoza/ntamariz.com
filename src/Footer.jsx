import { useState } from "react";
import logoSinFOndo from "./assets/animacionlogosinfondo.gif";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// import './Header.css'

function Footer() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Container fluid className="container-fluid nt-footer">
        <Row>
          <Col>
            <img
              src={logoSinFOndo}
              alt="Logo Natalia Tamariz"
              className="nt-footer_logo"
            />
            <h4>Natalia Tamariz</h4>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Footer;
