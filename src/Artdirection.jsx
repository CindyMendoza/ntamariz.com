// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { CustomPrevArrow, CustomNextArrow } from "./Arrows";
// import 'swiper/swiper-bundle.min.css';
import sliderArtDirectionCerebral from "./assets/images/slider-art-direction-cerebral.png";
import sliderArtDirectionKrylon from "./assets/images/slider-art-direction-krylon.png";
import sliderArtDirectionMtiasMakeUp from "./assets/images/slider-art-direction-matias-make-up.png";
import sliderArtDirectionRuna from "./assets/images/slider-art-direction-runa.png";
import imagenModal from "./assets/images/imagen-modal.jpg";

function Artdirection() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  const images = [
    // { src: sliderArtDirectionMtiasMakeUp, alt: "MATIAS MAKE UP" },
    { src: sliderArtDirectionRuna, alt: "RUNA" },
    { src: sliderArtDirectionCerebral, alt: "Cerebral" },
    { src: sliderArtDirectionKrylon, alt: "Krylon" },
  ];
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrow: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1.5,
          arrow: false,
        },
      },
    ],
  };

  return (
    <>
      <div>
        <Modal show={showModal} onHide={closeModal}>
          <Modal.Header closeButton>
            <div className="contenedor-centrado-flex align-items-center width-100">
              <h1 className="font-family-Starz-2016 ">
                <span className="fondo-amarillo-titular">Matias </span>
                <span className="fondo-amarillo-titular">MAKEUP</span>
              </h1>
            </div>
          </Modal.Header>
          <Modal.Body>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <img
              src={imagenModal}
              alt=""
              className="img-fluid lazyload"
              style={{ cursor: "pointer" }}
            />
          </Modal.Body>
        </Modal>
      </div>

      <Container fluid className="art-direction overflow-hidden">
        <Row>
          <Col
            xs={12}
            lg={3}
            className="contenedor-centrado-flex align-items-center"
          >
            <div>
              <h1 className="font-family-Starz-2016 ">
                <span className="fondo-amarillo-titular">Art Direction</span>
                <br></br>
                <span className="fondo-amarillo-titular">Projects</span>
              </h1>
            </div>
          </Col>
          <Col xs={12} lg={9}>
            <div id="slider-art-direction">
              <Slider {...settings}>
                <div>
                  <div>
                    <img
                      src={sliderArtDirectionMtiasMakeUp}
                      alt="MATIAS MAKE UP"
                      className="img-fluid lazyload"
                      onClick={openModal}
                      style={{ cursor: "pointer" }}
                    />
                    <h4>MATIAS MAKE UP</h4>
                  </div>
                </div>
                {images.map((image, index) => (
                  <div key={index}>
                    <div>
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="img-fluid lazyload"
                      />
                      <h4>{image.alt}</h4>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Artdirection;
