// import { useState } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import whatsappIcoNegro from "./assets/images/whatsapp-ico-negro.png";
import instagramIcoNegro from "./assets/images/instagram-ico-negro.png";
import linkedinIcoNegro from "./assets/images/linkedin-ico-negro.png";
import mailIcoNegro from "./assets/images/mail-ico-negro.png";
import animacionlogosinfondo from "./assets/images/animacionlogosinfondo.gif";

function Header() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Container fluid className="header">
        <Row>
          <Col>
            <div className="contenedor-centrado-flex">
              <div className="logo">
                <img
                  src={animacionlogosinfondo}
                  className="lazyload"
                />
              </div>
              <div className="cargo">
                <h1>Natalia Tamariz</h1>
                <span>Visual creator</span>
              </div>
            </div>

            <div className="redes ">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <img
                  className="whatsapp"
                  src={whatsappIcoNegro}
                  alt="WhatsApp de Natalia Tamariz"
                />
              </a>

              <a
                href="https://www.instagram.com/nataliatamarizfoto/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="instagram"
                  src={instagramIcoNegro}
                  alt="Instagram de Natalia Tamariz"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/natalia-angela-tamariz-clemente-b0b899110/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="linkedin"
                  src={linkedinIcoNegro}
                  alt="LinkedIn de Natalia Tamariz"
                />
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <img
                  className="mail"
                  src={mailIcoNegro}
                  alt="Facebook de Natalia Tamariz"
                />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Header;
