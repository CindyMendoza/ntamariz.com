import { Container, Row, Col } from "react-bootstrap";
import aboutmeImageNt from "./assets/images/aboutme-image-nt.png";

function Aboutme() {
  return (
    <>
      <Container
        fluid
        className="container-fluid overflow-auto position-relative aboutme"
      >
        <Row className="">
          <Col className="" xs={12} md={6}>
            <h1 className="font-family-Starz-2016 text-align-center">ABOUT ME</h1>
            <p className="font-family-Galvji text-align-center">
              I am a Peruvian photographer that loves fashion and telling
              stories through powerfull images.
            </p>
          </Col>
          <Col xs={12} md={6}>
            <img
              src={aboutmeImageNt}
              alt="Imagen de Natalia Tamariz"
              className="aboutme-image-nt"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Aboutme;
