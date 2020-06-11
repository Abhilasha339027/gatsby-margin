import React from "react"
import { Carousel } from "react-bootstrap"
import styled from "styled-components"
import img1 from "../assets/img/img7.jpg"
import img2 from "../assets/img/img5.jpg"
import img3 from "../assets/img/img6.jpg"

function MyCarousel({ content, type }) {
  content === 0 && type === "up"
    ? setTimeout(() => {
        document.querySelector(".carousel").style.zIndex = "0"
      }, 1000)
    : console.log()
  const Container = styled.div`
    height: 100%;
    .carousel {
      height: 100%;
      z-index: -1;
    }
    .carousel-item {
      width: 100%;
      height: 100%;
      position: relative;
      background-size: cover;
      background-position-x: center;
    }
    .item-overlay {
      position: absolute;
      background: #000;
      top: 0;
      width: 100%;
      height: 100%;
      opacity: 0.4;
      pointer-events: none;
      transition: transform 1s;
    }
    .carousel-item-1 {
      background-image: url(${img2});
    }
    .carousel-item-2 {
      background-image: url(${img3});
    }
    .carousel-item-3 {
      background-image: url(${img1});
    }
    .carousel-caption {
      top: 57vh;
      text-align: left;
    }
    .carousel-inner {
      height: 100%;
    }
  `
  return (
    <Container>
      <Carousel
        className="carousel"
        controls={false}
        interval="4000"
        style={
          content === 0 && type === "down"
            ? {
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${img2})`,
                zIndex: "1",
              }
            : { background: "#fff" }
        }
      >
        <Carousel.Item className="carousel-item carousel-item-1">
          <div
            className="item-overlay"
            style={
              content !== 0
                ? { transition: "transform 1s", transform: "translateY(100%)" }
                : {}
            }
          />
          <Carousel.Caption>
            <h3>First Slide Label</h3>
            <h5>Nulla vitae elit libero, a pharetra augue mollis interdum.</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item carousel-item-2">
          <div
            className="item-overlay"
            style={
              content !== 0
                ? { transform: "translateY(100%)", transition: "transform 1s" }
                : {}
            }
          />
          <Carousel.Caption>
            <h3>Second Slide Label</h3>
            <h5>Nulla vitae elit libero, a pharetra augue mollis interdum.</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item carousel-item-3">
          <div
            className="item-overlay"
            style={
              content !== 0
                ? { transform: "translateY(100%)", transition: "transform 1s" }
                : {}
            }
          />
          <Carousel.Caption>
            <h3>Third Slide Label</h3>
            <h5>Nulla vitae elit libero, a pharetra augue mollis interdum.</h5>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  )
}

export default MyCarousel
