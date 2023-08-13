import { Container, Row, Col } from "react-bootstrap";
import whatsappIcoNegro from "./assets/images/whatsapp-ico-negro.png";
import instagramIcoNegro from "./assets/images/instagram-ico-negro.png";
import linkedinIcoNegro from "./assets/images/linkedin-ico-negro.png";
import facebookIcoNegro from "./assets/images/facebook-ico-negro.png";
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
  return (
    <>
      <Container
        fluid
        className="container-fluid nt-footer overflow-auto position-relative"
      >
        <Row>
          <Col className="display-flex justify-content-center align-items-flex-end">
            <div className="align-self-flex-start">
              <img
                src="https://ntamariz.files.wordpress.com/2023/08/animacionlogosinfondo-2.gif"
                alt="Logo Natalia Tamariz"
                className="nt-footer_logo img-fluid"
              />
            </div>
            <div className="ml1">
              <div className="row-nombres">
                <h1 className="font-family-Starz-2016 footer-nt-nombre">
                  Natalia Tamariz
                </h1>
                <h2 className="font-family-Garamond footer-nt-cargo">
                  Art Director
                </h2>
                <a
                  href="mailto:nataliatamarizfotografia@gmail.com"
                  className="text-decoration-none hover-highlight"
                >
                  nataliatamarizfotografia@gmail.com
                </a>
                <a
                  href="mailto:angelatamariz01@gmail.com"
                  className="text-decoration-none hover-highlight"
                >
                  angelatamariz01@gmail.com
                </a>
                <a
                  href="tel:+014704280663"
                  className="text-decoration-none hover-highlight"
                >
                  470-428-0663
                </a>
              </div>
              <div className="row-redes ">
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <img className="whatsapp"
                    src={whatsappIcoNegro}
                    alt="WhatsApp de Natalia Tamariz"
                  />
                </a>

                <a
                  href="https://www.instagram.com/nataliatamarizfoto/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="instagram"
                    src={instagramIcoNegro}
                    alt="Instagram de Natalia Tamariz"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/natalia-angela-tamariz-clemente-b0b899110/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="linkedin"
                    src={linkedinIcoNegro}
                    alt="LinkedIn de Natalia Tamariz"
                  />
                </a>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <img className="facebook"
                    src={facebookIcoNegro}
                    alt="Facebook de Natalia Tamariz"
                  />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Footer;
