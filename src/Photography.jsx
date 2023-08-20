// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
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
import photographySlider9 from "./assets/images/javier-arnillas.png";
import photographySlider10 from "./assets/images/montserrat.png";
import photographySlider11 from "./assets/images/dayana-valenzuela.png";
import photographySlider12 from "./assets/images/crudo-impulso-colectivo.png";

function Photography() {
  const images = [
    { src: photographySlider1, alt: "Lima " },
    { src: photographySlider2, alt: "FREAK" },
    { src: photographySlider3, alt: "Ambrosoli" },
    { src: photographySlider4, alt: "Baleshka Price" },
    { src: photographySlider5, alt: "Rebirth" },
    { src: photographySlider6, alt: "Hiu Yan" },
    { src: photographySlider7, alt: "Genetic manipulation" },
    { src: photographySlider8, alt: "Minico" },
    { src: photographySlider9, alt: "Javier Arnillas" },
    { src: photographySlider10, alt: "Montserrat" },
    { src: photographySlider11, alt: "Dayana Valenzuela" },
    { src: photographySlider12, alt: "Crudo impulso colectivo" },
    
  ];
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
                {images.map((image, index) => (
                  <div key={index}>
                    <div>
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="lazyload"
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

export default Photography;
