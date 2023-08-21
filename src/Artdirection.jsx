// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";

import sliderArtDirectionCerebral from "./assets/images/slider-art-direction-cerebral.png";
import sliderArtDirectionKrylon from "./assets/images/slider-art-direction-krylon.png";
import sliderArtDirectionMtiasMakeUp from "./assets/images/slider-art-direction-matias-make-up.png";
import sliderArtDirectionRuna from "./assets/images/slider-art-direction-runa.png";
import imagenModal from "./assets/images/imagen-modal.jpg";
import cerebral2 from "./assets/images/cerebral-modal-2.png";
import cerebral3 from "./assets/images/cerebral-modal-3.png";
import krylon from "./assets/images/krylon.png";

import videoThumbnail from "./assets/images/runa-modal.png";
import videoFile from "./assets/videos/kevinvideoruna.mp4";
import cerebralVideo from "./assets/videos/cerebral-video.mp4";

function Artdirection() {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);
  const [videoVisible, setVideoVisible] = useState(false);

  const openVideo = () => {
    const video = document.getElementById("videoPlayer");
    video.play();
  };

  const toggleVideo = () => {
    setVideoVisible(!videoVisible);
  };

  const openModal = () => {
    setShowModal(true);
  };
  const openModal2 = () => {
    setShowModal2(true);
  };
  const openModal3 = () => {
    setShowModal3(true);
  };
  const openModal4 = () => {
    setShowModal4(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  const closeModal2 = () => {
    setShowModal2(false);
  };
  const closeModal3 = () => {
    setShowModal3(false);
  };
  const closeModal4 = () => {
    setShowModal4(false);
  };

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
        {/* mattias cover */}

        <Modal
          className="mattias-cover"
          show={showModal}
          onHide={closeModal}
          size="xl"
        >
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
              <div className="contenedor-centrado-flex">
                <img
                  src={imagenModal}
                  alt="MATTIAS cover"
                  className="img-fluid lazyload"
                />
              </div>
            </div>
          </Modal.Body>
        </Modal>

        {/* runa */}

        <Modal
          className="runa"
          show={showModal2}
          onHide={closeModal2}
          size="xl"
        >
          <Modal.Header className="p-5 pb-0" closeButton>
            <div className="contenedor-centrado-flex align-items-center width-100">
              <h1 className="font-family-Starz-2016 ">
                <span className="fondo-amarillo-titular">RUNA</span>
              </h1>
            </div>
          </Modal.Header>
          <Modal.Body className="p-5 pt-3">
            <div>
              <div className="text-align-center font-family-Galvji font-size-20px mb-3">
                <strong>CW:</strong>{" "}
                <span className="margin-right-2rem"> Maria Mainelli-Ajmo</span>{" "}
                <strong className="line-vertical"> AD:</strong>{" "}
                <span>Natalia Tamariz</span>
              </div>

              <div className="font-family-Galvji font-size-17px mb-4">
                <p>
                  <strong>Strategy:</strong> Runa is an energy drink that is
                  made from ingredients from the Amazon.
                </p>
                <p>
                  <strong>Concept:</strong> Animals and plants from the Amazon
                  are full of their own unique powers. Why don’t humans use the
                  power of nature to face daily problems with the help of Runa?
                </p>
              </div>
              <div className="contenedor-centrado-flex ">
                <div className="img">
                  {videoVisible ? (
                    <video
                      controls
                      width="100%"
                      style={{ "max-width": "770px" }}
                      onClick={toggleVideo}
                    >
                      <source src={videoFile} type="video/mp4" />
                      Tu navegador no admite el elemento de video.
                    </video>
                  ) : (
                    <img
                      src={videoThumbnail}
                      alt="RUNA"
                      width="100%"
                      onClick={toggleVideo}
                      style={{ cursor: "pointer" }}
                    />
                  )}
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>

        {/* Cerebral */}
        <Modal
          className="cerebral"
          show={showModal3}
          onHide={closeModal3}
          size="xl"
        >
          <Modal.Header className="p-5 pb-0" closeButton>
            <div className="contenedor-centrado-flex align-items-center width-100">
              <h1 className="font-family-Starz-2016 ">
                <span className="fondo-amarillo-titular">cerebral</span>
              </h1>
            </div>
          </Modal.Header>
          <Modal.Body className="p-5 pt-3">
            <div>
              <div className="text-align-center font-family-Galvji font-size-20px mb-3">
                <strong>CW:</strong>{" "}
                <span className="margin-right-2rem"> Ezekiel Wariboko</span>{" "}
                <strong className="line-vertical"> AD:</strong>{" "}
                <span>Natalia Tamariz</span>
              </div>
              <div className="font-family-Galvji font-size-17px mb-4">
                <p>
                  <strong>Strategy:</strong> Cerebral provides Black men a safe
                  place to express themselves and release trauma.
                </p>
                <p>
                  <strong>Concept:</strong> Yo, that’s facts.
                  <br></br>
                </p>
              </div>
              <div className="contenedor-centrado-flex">
                <div className="img">
                  <video controls style={{width: '100%',    'max-width': '752px', 'margin-bottom': '1rem',position:'relative','z-index': 0}}>
                    <source src={cerebralVideo} type="video/mp4" />
                    Tu navegador no admite el elemento de video.
                  </video>
                  <img
                    src={cerebral2}
                    alt="cerebral"
                    className="img-fluid lazyload position-relative"
                  />
                  <img
                    src={cerebral3}
                    alt="cerebral"
                    className="img-fluid lazyload position-relative"
                  />
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>

        {/* Krylon */}
        <Modal
          className="KRYLON"
          show={showModal4}
          onHide={closeModal4}
          size="xl"
        >
          <Modal.Header className="p-5 pb-0" closeButton>
            <div className="contenedor-centrado-flex align-items-center width-100">
              <h1 className="font-family-Starz-2016 ">
                <span className="fondo-amarillo-titular">KRYLON</span>
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
                  <strong>Strategy:</strong> Spray it, to say it
                </p>
                <p>
                  <strong>Concept:</strong> Get it off your chest
                </p>
              </div>
              <div className="contenedor-centrado-flex">
                <img src={krylon} alt="krylon" className="img-fluid lazyload" />
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
      <div>
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
                        className="lazyload"
                        onClick={openModal}
                        style={{ cursor: "pointer" }}
                      />

                      <h4>MATIAS MAKE UP</h4>
                    </div>
                  </div>
                  <div>
                    <div>
                      <img
                        src={sliderArtDirectionRuna}
                        alt="RUNA"
                        className="lazyload"
                        onClick={openModal2}
                        style={{ cursor: "pointer" }}
                      />

                      <h4>RUNA</h4>
                    </div>
                  </div>
                  <div>
                    <div>
                      <img
                        src={sliderArtDirectionCerebral}
                        alt="Cerebral"
                        className="lazyload"
                        onClick={openModal3}
                        style={{ cursor: "pointer" }}
                      />

                      <h4>Cerebral</h4>
                    </div>
                  </div>
                  <div>
                    <div>
                      <img
                        src={sliderArtDirectionKrylon}
                        alt="Krylon"
                        className="lazyload"
                        onClick={openModal4}
                        style={{ cursor: "pointer" }}
                      />

                      <h4>Krylon</h4>
                    </div>
                  </div>
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
