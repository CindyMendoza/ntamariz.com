import { Container, Row, Col } from "react-bootstrap";
import aboutmeImageNt from "./assets/images/aboutme-image-nt_v2.png";

function Aboutme() {
  return (
    <>
      <Container className="aboutme">
        <Row className="">
          <Col className="" xs={12} lg={6}>
            <div className="contenedor-centrado-flex flex-direction-column align-items-center">
              <div>
                <h1 className="font-family-Starz-2016 text-align-center fondo-amarillo-titular">
                  ABOUT ME
                </h1>
              </div>
              <p className="font-family-Galvji text-align-center">
                I am a Peruvian photographer that loves fashion and telling
                stories through powerfull images.
              </p>
            </div>
          </Col>
          <Col xs={12} lg={6}>
            <div className="contenedor-centrado-flex">
              <img
                src={aboutmeImageNt}
                alt="Imagen de Natalia Tamariz"
                className="aboutme-image-nt img-fluid lazyload"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Aboutme;
