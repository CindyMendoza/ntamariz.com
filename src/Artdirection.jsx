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
    arrow: true,
    responsive: [
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 1.8,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 1.5,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1.1,
        },
      },
      {
        breakpoint: 768,
        arrow: false,
        settings: {
          slidesToShow: 1.7,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1.5,
        },
      },
      {
        breakpoint: 465,
        settings: {
          slidesToShow: 1.3,
        },
      },
      {
        breakpoint: 410,
        settings: {
          slidesToShow: 1.1,
        },
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div>
        <Modal show={showModal} onHide={closeModal} size="xl">
          <Modal.Header className="p-5 pb-0" closeButton>
            <div className="contenedor-centrado-flex align-items-center width-100">
              <h1 className="font-family-Starz-2016 ">
                <span className="fondo-amarillo-titular">MATTIAS</span>
                <span className="fondo-amarillo-titular">cover</span>
              </h1>
            </div>
          </Modal.Header>
          <Modal.Body className="p-5 pt-3">
            <div>
              <div className="text-align-center font-family-Galvji font-size-20px mb-3">
                <strong>CW:</strong>{" "}
                <span className="margin-right-2rem"> Landon Bennett</span>{" "}
                <strong className="line-vertical"> AD:</strong>{" "}
                <span>Natalia Tamariz</span>
              </div>
              <div className="font-family-Galvji font-size-17px mb-4">
                <p>
                  <strong>Problem:</strong> Men want to look good by getting
                  tan, but at the end their skin look orange. <br></br>
                </p>
                <p>
                  <strong>Solution:</strong> Wear MATTIAS mens foundation.
                  <br></br>
                </p>
                <p>
                  <strong>Concept:</strong> Not your presidents makeup
                </p>
              </div>
              <div>
                <img src={imagenModal} alt="" className="img-fluid lazyload" />
              </div>
            </div>
          </Modal.Body>
        </Modal>

        <Container className="art-direction">
          <Row>
            <Col
              xs={12}
              md={5}
              xl={4}
              xxl={3}
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
            <Col xs={12} md={7} xl={8} xxl={9}>
              <div id="slider-art-direction">
                <Slider {...settings}>
                  <div>
                    <div>
                      <img
                        src={sliderArtDirectionMtiasMakeUp}
                        alt="MATIAS MAKE UP"
                        className=" lazyload"
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
                          className=" lazyload"
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
      </div>
    </>
  );
}

export default Artdirection;
