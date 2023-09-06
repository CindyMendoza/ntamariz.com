// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { CustomPrevArrow, CustomNextArrow } from "./Arrows";
// import 'swiper/swiper-bundle.min.css';
import photographySlider1 from "./assets/images/photography-slider-1.gif";
import photographySlider2 from "./assets/images/photography-slider-2.png";
import photographySlider3 from "./assets/images/photography-slider-3.gif";
import photographySlider4 from "./assets/images/photography-slider-5.png";
import photographySlider5 from "./assets/images/rebirth.png";
import photographySlider6 from "./assets/images/hiu-yan.png";
import photographySlider7 from "./assets/images/genetic-nipulation.png";
import photographySlider8 from "./assets/images/minico.png";
import photographySlider9 from "./assets/images/javier-arnillas-v2.png";
import photographySlider10 from "./assets/images/montserrat.png";
import photographySlider11 from "./assets/images/dayana-valenzuela.png";
import photographySlider12 from "./assets/images/crudo-impulso-colectivo.png";
import photographySlider13 from "./assets/images/lola.png";

import limaVideoMdal from "./assets/videos/lima-video-modal.mp4";
import freakModal from "./assets/images/freak-modal-v2.png";
import ambrosoliGif from "./assets/gifs/ambrosoli.gif";
import ambrosoliMp4 from "./assets/gifs/ambrosoli-gif-2.gif";
import ambrosoliPNG from "./assets/images/ambrosolipng.png";
import baleshkaPriceModal from "./assets/images/baleshka-price-modal-1.jpg";
import baleshkaPriceModal2 from "./assets/images/baleshka-price-modal-2.jpg";
import baleshkaPriceModal3 from "./assets/images/baleshka-price-modal-3.jpg";
import rebirthModal from "./assets/images/rebirth-v2.jpg";
import hiuyanhModal from "./assets/images/hiuyan-1.jpg";
import hiuyanhModal2 from "./assets/images/hiuyan-2.jpg";
import hiuyanhModal3 from "./assets/images/hiuyan-3.jpg";
import geneticManipulation from "./assets/images/genetic-manipulation.png";
import minico from "./assets/images/minico-2.jpg";
import javierArnillas from "./assets/images/javier-arnillas-2.jpg";
import monserrat from "./assets/images/monserrat.jpg";
import dayanaValenzuelaModal from "./assets/images/dayana-valenzuela-2.jpg";
import crudoImpulsoColectivo from "./assets/images/crudo-impulso-colectivo-1.jpg";
import crudoImpulsoColectivo2 from "./assets/images/crudo-impulso-colectivo-2.jpg";
import crudoImpulsoColectivo3 from "./assets/images/crudo-impulso-colectivo-3.jpg";
import lola1 from "./assets/images/lola-v2.jpg";
import lola2 from "./assets/gifs/lola-ojos.gif";
import lola3 from "./assets/gifs/lola-telefono.gif";

function Photography() {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);
  const [showModal5, setShowModal5] = useState(false);
  const [showModal6, setShowModal6] = useState(false);
  const [showModal7, setShowModal7] = useState(false);
  const [showModal8, setShowModal8] = useState(false);
  const [showModal9, setShowModal9] = useState(false);
  const [showModal10, setShowModal10] = useState(false);
  const [showModal11, setShowModal11] = useState(false);
  const [showModal12, setShowModal12] = useState(false);
  const [showModal13, setShowModal13] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  const openModal2 = () => {
    setShowModal2(true);
  };
  const closeModal2 = () => {
    setShowModal2(false);
  };
  const openModal3 = () => {
    setShowModal3(true);
  };
  const closeModal3 = () => {
    setShowModal3(false);
  };
  const openModal4 = () => {
    setShowModal4(true);
  };
  const closeModal4 = () => {
    setShowModal4(false);
  };
  const openModal5 = () => {
    setShowModal5(true);
  };
  const closeModal5 = () => {
    setShowModal5(false);
  };
  const openModal6 = () => {
    setShowModal6(true);
  };
  const closeModal6 = () => {
    setShowModal6(false);
  };
  const openModal7 = () => {
    setShowModal7(true);
  };
  const closeModal7 = () => {
    setShowModal7(false);
  };
  const openModal8 = () => {
    setShowModal8(true);
  };
  const closeModal8 = () => {
    setShowModal8(false);
  };
  const openModal9 = () => {
    setShowModal9(true);
  };
  const closeModal9 = () => {
    setShowModal9(false);
  };
  const openModal10 = () => {
    setShowModal10(true);
  };
  const closeModal10 = () => {
    setShowModal10(false);
  };
  const openModal11 = () => {
    setShowModal11(true);
  };
  const closeModal11 = () => {
    setShowModal11(false);
  };
  const openModal12 = () => {
    setShowModal12(true);
  };
  const closeModal12 = () => {
    setShowModal12(false);
  };
  const openModal13 = () => {
    setShowModal13(true);
  };
  const closeModal13 = () => {
    setShowModal13(false);
  };

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrow: true,
    responsive: [
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2.5,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
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
      {/* lima */}

      <Modal className="lima" show={showModal} onHide={closeModal} size="xl">
        <Modal.Header className="p-5 pb-0" closeButton>
          <div className="contenedor-centrado-flex align-items-center width-100">
            <h1 className="font-family-Starz-2016 fondo-amarillo-titular">
              Lima
            </h1>
          </div>
        </Modal.Header>
        <Modal.Body className="p-5 pt-3">
          <div>
            <div className="contenedor-centrado-flex">
              <div className="bgYellowCuadrado">
                <div>
                  <img
                    src={photographySlider1}
                    alt="Lima"
                    className="lazyload img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      {/* freakModal */}

      <Modal
        className="freakModal"
        show={showModal2}
        onHide={closeModal2}
        size="xl"
      >
        <Modal.Header className="p-5 pb-0" closeButton>
          <div className="contenedor-centrado-flex align-items-center width-100"></div>
        </Modal.Header>
        <Modal.Body className="p-5 pt-3">
          <div>
            <div className="contenedor-centrado-flex">
              <div>
                <img
                  src={freakModal}
                  alt="FREAK"
                  className="img-fluid lazyload "
                />
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      {/* Ambrosoli */}

      <Modal
        className="ambrosoli"
        show={showModal3}
        onHide={closeModal3}
        size="xl"
      >
        <Modal.Header className="p-5 pb-0" closeButton>
          <div className="contenedor-centrado-flex align-items-center width-100">
            <h1 className="font-family-Starz-2016 fondo-amarillo-titular">
              Ambrosoli
            </h1>
          </div>
        </Modal.Header>
        <Modal.Body className="p-5 pt-3">
          <div className="container-images">
            <div className="contenedor-centrado-flex">
              <div className="img text-align-center bgYellowCuadrado">
                <img
                  src={ambrosoliGif}
                  alt="Ambrosoli"
                  className="img-fluid lazyload "
                  style={{
                    width: "100%",
                    maxWidth: "300px",
                    marginBottom: "1rem",
                    position: "relative",
                    // zIndex: 0,
                  }}
                />
              </div>
            </div>
            <div className="contenedor-centrado-flex">
              <div className="img text-align-center">
                <img
                    src={ambrosoliMp4}
                    alt="Ambrosoli"
                    className="img-fluid lazyload "
                    style={{
                      width: "100%",
                      maxWidth: "375px",
                      marginBottom: "1rem",
                      position: "relative",
                      // zIndex: 0,
                    }}
                  />
                {/* <video
                  controls
                  style={{
                    width: "100%",
                    maxWidth: "375px",
                    marginBottom: "1rem",
                    position: "relative",
                    // zIndex: 0,
                  }}
                >
                  <source src={ambrosoliMp4} type="video/mp4" />
                  Tu navegador no admite el elemento de video.
                </video> */}
              </div>
            </div>
            <div className="contenedor-centrado-flex">
              <div>
                <img
                  src={ambrosoliPNG}
                  alt="Ambrosoli"
                  className="img-fluid lazyload "
                  style={{
                    width: "100%",
                    maxWidth: "320px",
                  }}
                />
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      {/* Baleshka price */}

      <Modal
        className="Baleshkaprice"
        show={showModal4}
        onHide={closeModal4}
        size="xl"
      >
        <Modal.Header className="p-5 pb-0" closeButton>
          <div className="contenedor-centrado-flex align-items-center width-100">
            <h1 className="font-family-Starz-2016 fondo-amarillo-titular">
              Baleshka price
            </h1>
          </div>
        </Modal.Header>
        <Modal.Body className="p-5 pt-3">
          <div>
            <div className="font-family-Galvji font-size-17px mb-4 text-align-center">
              <p>
                These portraits were taken for the book of Daggiana Peves named{" "}
                <br></br>
                “My name is Baleshka Price”.
              </p>
            </div>
            <div className="contenedor-centrado-flex">
              <div className="img text-align-center ">
                <img
                  src={baleshkaPriceModal}
                  alt="Baleshka price"
                  className="img-fluid lazyload "
                />
              </div>
              <div className="img text-align-center ">
                <img
                  src={baleshkaPriceModal2}
                  alt="Baleshka price"
                  className="img-fluid lazyload "
                />
              </div>
              <div className="img text-align-center ">
                <img
                  src={baleshkaPriceModal3}
                  alt="Baleshka price"
                  className="img-fluid lazyload "
                />
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      {/* Rebirth */}

      <Modal
        className="rebirth"
        show={showModal5}
        onHide={closeModal5}
        size="xl"
      >
        <Modal.Header className="p-5 pb-0" closeButton>
          <div className="contenedor-centrado-flex align-items-center width-100">
            <h1 className="font-family-Starz-2016 fondo-amarillo-titular">
              Rebirth
            </h1>
          </div>
        </Modal.Header>
        <Modal.Body className="p-5 pt-3">
          <div>
            <div className="contenedor-centrado-flex">
              <div className="img text-align-center ">
                <img
                  src={rebirthModal}
                  alt="Rebirth"
                  className="img-fluid lazyload "
                />
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      {/* HIU YAN */}

      <Modal
        className="hiuyan"
        show={showModal6}
        onHide={closeModal6}
        size="xl"
      >
        <Modal.Header className="p-5 pb-0" closeButton>
          <div className="contenedor-centrado-flex align-items-center width-100">
            <h1 className="font-family-Starz-2016 fondo-amarillo-titular">
              HIU YAN
            </h1>
          </div>
        </Modal.Header>
        <Modal.Body className="p-5 pt-3">
          <div>
            <div className="contenedor-centrado-flex">
              <div className="img text-align-center ">
                <img
                  src={hiuyanhModal}
                  alt="HIU YAN"
                  className="img-fluid lazyload "
                />
              </div>
              <div className="img text-align-center ">
                <img
                  src={hiuyanhModal2}
                  alt="HIU YAN"
                  className="img-fluid lazyload "
                />
              </div>
              <div className="img text-align-center ">
                <img
                  src={hiuyanhModal3}
                  alt="HIU YAN"
                  className="img-fluid lazyload "
                />
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      {/* Genetic manipulation */}

      <Modal
        className="genetic-manipulation"
        show={showModal7}
        onHide={closeModal7}
        size="xl"
      >
        <Modal.Header className="p-5 pb-0" closeButton>
          <div className="contenedor-centrado-flex align-items-center width-100">
            <h1 className="font-family-Starz-2016 fondo-amarillo-titular">
              Genetic manipulation
            </h1>
          </div>
        </Modal.Header>
        <Modal.Body className="p-5 pt-3">
          <div>
            <div className="contenedor-centrado-flex">
              <div className="img text-align-center ">
                <img
                  src={geneticManipulation}
                  alt="Genetic manipulation"
                  className="img-fluid lazyload "
                />
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      {/* Minicon */}

      <Modal
        className="minico"
        show={showModal8}
        onHide={closeModal8}
        size="xl"
      >
        <Modal.Header className="p-5 pb-0" closeButton>
          <div className="contenedor-centrado-flex align-items-center width-100">
            <h1 className="font-family-Starz-2016 fondo-amarillo-titular">
              minico
            </h1>
          </div>
        </Modal.Header>
        <Modal.Body className="p-5 pt-3">
          <div>
            <div className="contenedor-centrado-flex">
              <div className="img text-align-center ">
                <img
                  src={minico}
                  alt="minico"
                  className="img-fluid lazyload "
                />
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      {/* Javier arnillas */}

      <Modal
        className="javier-arnillas"
        show={showModal9}
        onHide={closeModal9}
        size="xl"
      >
        <Modal.Header className="p-5 pb-0" closeButton></Modal.Header>
        <Modal.Body className="p-5 pt-3">
          <div>
            <div className="contenedor-centrado-flex">
              <div className="img text-align-center ">
                <img
                  src={javierArnillas}
                  alt="Javier Arnillas"
                  className="img-fluid lazyload "
                />
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      {/* Montserrat */}

      <Modal
        className="Montserrat"
        show={showModal10}
        onHide={closeModal10}
        size="xl"
      >
        <Modal.Header className="p-5 pb-0" closeButton>
          <div className="contenedor-centrado-flex align-items-center width-100">
            <h1 className="font-family-Starz-2016 fondo-amarillo-titular">
              Montserrat
            </h1>
          </div>
        </Modal.Header>
        <Modal.Body className="p-5 pt-3">
          <div>
            <div className="contenedor-centrado-flex">
              <div className="img text-align-center ">
                <img
                  src={monserrat}
                  alt="Montserrat"
                  className="img-fluid lazyload "
                />
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      {/* Dayana Valenzuela */}

      <Modal
        className="dayana-valenzuela"
        show={showModal11}
        onHide={closeModal11}
        size="xl"
      >
        <Modal.Header className="p-5 pb-0" closeButton></Modal.Header>
        <Modal.Body className="p-5 pt-3">
          <div>
            <div className="contenedor-centrado-flex">
              <div className="img text-align-center ">
                <img
                  src={dayanaValenzuelaModal}
                  alt="Dayana Valenzuela"
                  className="img-fluid lazyload "
                />
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      {/* Crudo impulso colectivo */}

      <Modal
        className="crudo-impulso-colectivo"
        show={showModal12}
        onHide={closeModal12}
        size="xl"
      >
        <Modal.Header className="p-5 pb-0" closeButton>
          <div className="contenedor-centrado-flex align-items-center width-100">
            <h1 className="font-family-Starz-2016 fondo-amarillo-titular">
              Crudo impulso colectivo
            </h1>
          </div>
        </Modal.Header>
        <Modal.Body className="p-5 pt-3">
          <div>
          <div className="contenedor-centrado-flex">
            <div className="img text-align-center ">
              <img
                src={crudoImpulsoColectivo}
                alt="Crudo impulso colectivo"
                className="img-fluid lazyload "
                style={{
                  width: "100%",
                  maxWidth: "316px",
                }}
              />
            </div>
            <div className="img text-align-center ">
              <img
                src={crudoImpulsoColectivo2}
                alt="Crudo impulso colectivo"
                className="img-fluid lazyload "
                style={{
                  width: "100%",
                  maxWidth: "316px",
                }}
              />
            </div>
            <div className="img text-align-center ">
              <img
                src={crudoImpulsoColectivo3}
                alt="Crudo impulso colectivo"
                className="img-fluid lazyload "
                style={{
                  width: "100%",
                  maxWidth: "316px",
                }}
              />
            </div>
          </div>
          </div>
        </Modal.Body>
      </Modal>

      {/* lola */}

      <Modal
        className="lola"
        show={showModal13}
        onHide={closeModal13}
        size="xl"
      >
        <Modal.Header className="p-5 pb-0" closeButton>
          <div className="contenedor-centrado-flex align-items-center width-100">
            <h1 className="font-family-Starz-2016 fondo-amarillo-titular">
              lola
            </h1>
          </div>
        </Modal.Header>
        <Modal.Body className="p-5 pt-3">
          <div>
            <div className="contenedor-centrado-flex">
              <div className="img text-align-center ">
                <div className="fondo-amarillo-titular">
                  <img
                    src={lola1}
                    alt="lola"
                    className="img-fluid lazyload "
                  />
                </div>

                <div>
                  <img src={lola2} alt="lola" className="img-fluid lazyload " />
                </div>

                <div className="fondo-amarillo-titular">
                  <img
                    src={lola3}
                    alt="lola"
                    className="img-fluid lazyload "
                  />
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <Container className="photography ">
        <Row>
          <Col xs={12} className="contenedor-centrado-flex align-items-center">
            <div>
              <h1 className="font-family-Starz-2016 fondo-amarillo-titular">
                Photography
              </h1>
              <h1 className="font-family-Starz-2016 fondo-amarillo-titular">
                projects
              </h1>
            </div>
          </Col>
          <Col xs={12}>
            <div id="slider-photography">
              <Slider {...settings}>
                <div>
                  <div>
                    <img
                      src={photographySlider1}
                      alt="Lima"
                      className="lazyload"
                      onClick={openModal}
                      style={{ cursor: "pointer" }}
                    />
                    <h4>Lima</h4>
                  </div>
                </div>
                <div>
                  <div>
                    <img
                      src={photographySlider2}
                      alt="FREAK"
                      className="lazyload"
                      onClick={openModal2}
                      style={{ cursor: "pointer" }}
                    />
                    <h4>FREAK</h4>
                  </div>
                </div>
                <div>
                  <div>
                    <img
                      src={photographySlider3}
                      alt="Ambrosoli"
                      className="lazyload"
                      onClick={openModal3}
                      style={{ cursor: "pointer" }}
                    />
                    <h4>Ambrosoli</h4>
                  </div>
                </div>
                <div>
                  <div>
                    <img
                      src={photographySlider4}
                      alt="Baleshka Price"
                      className="lazyload"
                      onClick={openModal4}
                      style={{ cursor: "pointer" }}
                    />
                    <h4>Baleshka Price</h4>
                  </div>
                </div>
                <div>
                  <div>
                    <img
                      src={photographySlider5}
                      alt="Rebirth"
                      className="lazyload"
                      onClick={openModal5}
                      style={{ cursor: "pointer" }}
                    />
                    <h4>Rebirth</h4>
                  </div>
                </div>
                <div>
                  <div>
                    <img
                      src={photographySlider6}
                      alt="Hiu Yan"
                      className="lazyload"
                      onClick={openModal6}
                      style={{ cursor: "pointer" }}
                    />
                    <h4>Hiu Yan</h4>
                  </div>
                </div>
                <div>
                  <div>
                    <img
                      src={photographySlider8}
                      alt="Minico"
                      className="lazyload"
                      onClick={openModal8}
                      style={{ cursor: "pointer" }}
                    />
                    <h4>Minico</h4>
                  </div>
                </div>
                <div>
                  <div>
                    <img
                      src={photographySlider7}
                      alt="Genetic manipulation"
                      className="lazyload"
                      onClick={openModal7}
                      style={{ cursor: "pointer" }}
                    />
                    <h4>Genetic manipulation</h4>
                  </div>
                </div>

                <div>
                  <div>
                    <img
                      src={photographySlider9}
                      alt="Javier Arnillas"
                      className="lazyload"
                      onClick={openModal9}
                      style={{ cursor: "pointer" }}
                    />
                    <h4>Javier Arnillas</h4>
                  </div>
                </div>
                <div>
                  <div>
                    <img
                      src={photographySlider10}
                      alt="Montserrat"
                      className="lazyload"
                      onClick={openModal10}
                      style={{ cursor: "pointer" }}
                    />
                    <h4>Montserrat</h4>
                  </div>
                </div>
                <div>
                  <div>
                    <img
                      src={photographySlider11}
                      alt="Dayana Valenzuela"
                      className="lazyload"
                      onClick={openModal11}
                      style={{ cursor: "pointer" }}
                    />
                    <h4>Dayana Valenzuela</h4>
                  </div>
                </div>
                <div>
                  <div>
                    <img
                      src={photographySlider12}
                      alt="Crudo impulso colectivo"
                      className="lazyload"
                      onClick={openModal12}
                      style={{ cursor: "pointer" }}
                    />
                    <h4>Crudo impulso colectivo</h4>
                  </div>
                </div>
                <div>
                  <div>
                    <img
                      src={photographySlider13}
                      alt="Crudo impulso colectivo"
                      className="lazyload"
                      onClick={openModal13}
                      style={{ cursor: "pointer" }}
                    />
                    <h4>Lola</h4>
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

export default Photography;
