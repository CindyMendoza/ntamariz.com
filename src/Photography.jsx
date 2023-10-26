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
import { useModal } from "./useModal";
import { CustomModal } from "./customModal";

function Photography() {
  const { modalToShow, openModal, closeModal } = useModal();
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
      <CustomModal
        title="Lima"
        modalToShow={modalToShow === "lima"}
        closeModal={closeModal}
      >
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
      </CustomModal>

      {/* freakModal */}
      <CustomModal
        title=""
        modalToShow={modalToShow === "freak"}
        closeModal={closeModal}
      >
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
      </CustomModal>

      {/* Ambrosoli */}
      <CustomModal
        title="Ambrosoli"
        modalToShow={modalToShow === "ambrosoli"}
        closeModal={closeModal}
      >
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
                }}
              />
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
      </CustomModal>

      {/* Baleshka price */}
      <CustomModal
        title="Baleshka price"
        modalToShow={modalToShow === "baleshka-price"}
        closeModal={closeModal}
      >
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
      </CustomModal>

      {/* Rebirth */}
      <CustomModal
        title="Rebirth"
        modalToShow={modalToShow === "rebirth"}
        closeModal={closeModal}
      >
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
      </CustomModal>

      {/* HIU YAN */}
      <CustomModal
        title="HIU YAN"
        modalToShow={modalToShow === "hiuyan"}
        closeModal={closeModal}
      >
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
      </CustomModal>

      {/* Genetic manipulation */}
      <CustomModal
        title="Genetic manipulation"
        modalToShow={modalToShow === "genetic-manipulation"}
        closeModal={closeModal}
      >
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
      </CustomModal>

      {/* Minicon */}
      <CustomModal
        title="minico"
        modalToShow={modalToShow === "minico"}
        closeModal={closeModal}
      >
        <div>
          <div className="contenedor-centrado-flex">
            <div className="img text-align-center ">
              <img src={minico} alt="minico" className="img-fluid lazyload " />
            </div>
          </div>
        </div>
      </CustomModal>

      {/* Javier arnillas */}
      <CustomModal
        title=" "
        modalToShow={modalToShow === "javier-arnillas"}
        closeModal={closeModal}
      >
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
      </CustomModal>

      {/* Montserrat */}

      <CustomModal
        title="Montserrat"
        modalToShow={modalToShow === "montserrat"}
        closeModal={closeModal}
      >
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
      </CustomModal>

      {/* Dayana Valenzuela */}
      <CustomModal
        title="Montserrat"
        modalToShow={modalToShow === "dayana-valenzuela"}
        closeModal={closeModal}
      >
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
      </CustomModal>

      {/* Crudo impulso colectivo */}
      <CustomModal
        title="Crudo impulso colectivo"
        modalToShow={modalToShow === "crudo-impulso-colectivo"}
        closeModal={closeModal}
      >
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
      </CustomModal>

      {/* lola */}
      <CustomModal
        title="lola"
        modalToShow={modalToShow === "lola"}
        closeModal={closeModal}
      >
        <div>
          <div className="contenedor-centrado-flex">
            <div className="img text-align-center ">
              <div className="fondo-amarillo-titular">
                <img src={lola1} alt="lola" className="img-fluid lazyload " />
              </div>

              <div>
                <img src={lola2} alt="lola" className="img-fluid lazyload " />
              </div>

              <div className="fondo-amarillo-titular">
                <img src={lola3} alt="lola" className="img-fluid lazyload " />
              </div>
            </div>
          </div>
        </div>
      </CustomModal>
      

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
                      onClick={() => openModal("lima")}
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
                      onClick={() => openModal("freak")}
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
                      onClick={() => openModal("ambrosoli")}
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
                      onClick={() => openModal("baleshka-price")}
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
                      onClick={() => openModal("rebirth")}
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
                      onClick={() => openModal("hiuyan")}
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
                      onClick={() => openModal("minico")}
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
                      onClick={() => openModal("genetic-manipulation")}
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
                      onClick={() => openModal("javier-arnillas")}
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
                      onClick={() => openModal("montserrat")}
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
                      onClick={() => openModal("dayana-valenzuela")}
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
                      onClick={() => openModal("crudo-impulso-colectivo")}
                      style={{ cursor: "pointer" }}
                    />
                    <h4>Crudo impulso colectivo</h4>
                  </div>
                </div>
                <div>
                  <div>
                    <img
                      src={photographySlider13}
                      alt="Lola"
                      className="lazyload"
                      onClick={() => openModal("lola")}
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
