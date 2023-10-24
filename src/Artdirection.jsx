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
import cerebral1 from "./assets/images/cerebral-modal-v2.jpg";
// import cerebral3 from "./assets/images/cerebral-modal-3.png";
import krylon from "./assets/images/krylon.png";

import videoThumbnail from "./assets/images/runa-modal.png";
import videoFile from "./assets/videos/kevinvideoruna.mp4";
import cerebralVideo from "./assets/videos/cerebral-video.mp4";
import { useModal } from "./useModal";
function Artdirection() {
  const { modalToShow, openModal, closeModal } = useModal();

  const [videoVisible, setVideoVisible] = useState(false);

  const openVideo = () => {
    const video = document.getElementById("videoPlayer");
    video.play();
  };

  const toggleVideo = () => {
    setVideoVisible(!videoVisible);
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
      {/* mattias cover */}

      <Modal
        className="mattias-cover"
        show={modalToShow === "mattias-cover"} 
        onHide={closeModal}
        size="xl"
      >
        <Modal.Header className="p-5 pb-0 flex-column" closeButton>
          <div>
            <div className="contenedor-centrado-flex tex flex-direction-column text-align-center">
              <h1 className="font-family-Starz-2016 fondo-amarillo-titular">
                MATTIAS cover
              </h1>
            </div>
          </div>
        </Modal.Header>
        <Modal.Body className="p-5 pt-3">
          <div>
            <div className="text-align-center font-family-Galvji font-size-20px mb-3 artDirection-modal_sub-title">
              <strong>CW:</strong>{" "}
              <span className="margin-right-2rem"> Landon Bennett</span>{" "}
              <strong className="line-vertical"> AD:</strong>{" "}
              <span>Natalia Tamariz</span>
            </div>
            <div className="font-family-Galvji font-size-17px mb-4 artDirection-modal_parrafo">
              <p>
                <strong>Problem:</strong> Men want to look good by getting tan,
                but at the end their skin look orange. <br></br>
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

      <Modal className="runa" 
      show={modalToShow === "runa"} onHide={closeModal} 
      size="xl">
        <Modal.Header className="p-5 pb-0" closeButton>
          <div className="contenedor-centrado-flex align-items-center width-100">
            <h1 className="font-family-Starz-2016 fondo-amarillo-titular">
              RUNA
            </h1>
          </div>
        </Modal.Header>
        <Modal.Body className="p-5 pt-3">
          <div>
            <div className="text-align-center font-family-Galvji font-size-20px mb-3 artDirection-modal_sub-title">
              <strong>CW:</strong>{" "}
              <span className="margin-right-2rem"> Maria Mainelli-Ajmo</span>{" "}
              <strong className="line-vertical"> AD:</strong>{" "}
              <span>Natalia Tamariz</span>
            </div>

            <div className="font-family-Galvji font-size-17px mb-4 artDirection-modal_parrafo">
              <p>
                <strong>Strategy:</strong> Runa is an energy drink that is made
                from ingredients from the Amazon.
              </p>
              <p>
                <strong>Concept:</strong> Animals and plants from the Amazon are
                full of their own unique powers. Why don’t humans use the power
                of nature to face daily problems with the help of Runa?
              </p>
            </div>
            <div className="contenedor-centrado-flex ">
              <div className="img">
                {videoVisible ? (
                  <video
                    controls
                    width="100%"
                    style={{ maxWidth: "770px" }}
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
        show={modalToShow === "cerebral"} onHide={closeModal}
        size="xl"
      >
        <Modal.Header className="p-5 pb-0" closeButton>
          <div className="contenedor-centrado-flex align-items-center width-100">
            <h1 className="font-family-Starz-2016 ">cerebral</h1>
          </div>
        </Modal.Header>
        <Modal.Body className="p-5 pt-3">
          <div>
            <div className="text-align-center font-family-Galvji font-size-20px mb-3 artDirection-modal_sub-title">
              <strong>CW:</strong>{" "}
              <span className="margin-right-2rem"> Ezekiel Wariboko</span>{" "}
              <strong className="line-vertical"> AD:</strong>{" "}
              <span>Natalia Tamariz</span>
            </div>

            <div className="font-family-Galvji font-size-17px mb-4 artDirection-modal_parrafo">
              <p>
                <strong>Strategy:</strong> Cerebral provides Black men a safe
                place to express themselves and release trauma.
              </p>
              <p>
                <strong>Concept:</strong> Yo, that’s facts.
                <br></br>
              </p>
            </div>
            <div className="contenedor-centrado-flex">
              <div>
                <div>
                  <img
                    src={cerebral1}
                    alt="cerebral"
                    className="img-fluid lazyload position-relative"
                  />
                </div>
                
                <div className=" bgYellowCuadrado">
                  <video
                    controls
                    style={{
                      width: "100%",
                      maxWidth: "750px",
                      marginBottom: "1rem",
                      position: "relative",
                      zIndex: 0,
                    }}
                  >
                    <source src={cerebralVideo} type="video/mp4" />
                    Tu navegador no admite el elemento de video.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      {/* Krylon */}
      <Modal
        className="KRYLON"
        show={modalToShow === "krylon"} onHide={closeModal}
        size="xl"
      >
        <Modal.Header className="p-5 pb-0" closeButton>
          <div className="contenedor-centrado-flex align-items-center width-100">
            <h1 className="font-family-Starz-2016 ">KRYLON</h1>
          </div>
        </Modal.Header>
        <Modal.Body className="p-5 pt-3">
          <div>
            <div className="text-align-center font-family-Galvji font-size-20px mb-3 artDirection-modal_sub-title">
              <strong>CW:</strong>{" "}
              <span className="margin-right-2rem"> Landon Bennett</span>{" "}
              <strong className="line-vertical"> AD:</strong>{" "}
              <span>Natalia Tamariz</span>
            </div>

            <div className="font-family-Galvji font-size-17px mb-4 artDirection-modal_parrafo">
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
                      src={sliderArtDirectionCerebral}
                      alt="Cerebral"
                      className="lazyload"
                      onClick={() => openModal('cerebral')}
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
                      onClick={() => openModal('krylon')}
                      style={{ cursor: "pointer" }}
                    />

                    <h4>Krylon</h4>
                  </div>
                </div>
                <div>
                  <div>
                    <img
                      src={sliderArtDirectionMtiasMakeUp}
                      alt="MATTIAS COVER"
                      className="lazyload"
                      onClick={() => openModal('mattias-cover')}
                      style={{ cursor: "pointer" }}
                    />

                    <h4>MATTIAS COVER</h4>
                  </div>
                </div>
                <div>
                  <div>
                    <img
                      src={sliderArtDirectionRuna}
                      alt="RUNA"
                      className="lazyload"
                      onClick={() => openModal('runa')}
                      style={{ cursor: "pointer" }}
                    />
                    <h4>RUNA</h4>
                  </div>
                </div>
              </Slider>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Artdirection;
