import React from "react"
import img1 from "../assets/img/home.jpg"
import img2 from "../assets/img/kitchen.jpg"
import img3 from "../assets/img/bathroom.jpg"
import icon1 from "../assets/img/icon_scroll_light.svg"
import styled from "styled-components"
const Container = styled.div`
  width: 100%;
  .bg {
    transition: all 1s;
    background-size: cover;
    background-position-x: center;
    position: absolute;
    width: 66.66%;
    height: 100%;
    z-index: -1;
  }
  .bg1 {
    background-image: url(${img1});
    z-index: 3;
  }
  .bg2 {
    background-image: url(${img2});
    z-index: 2;
  }
  .bg3 {
    background-image: url(${img3});
    z-index: 1;
  }
  .content {
    text-align: right;
    position: fixed;
    top: 57vh;
    right: 38%;
    z-index: 5;
    transition: all 1s;
  }
  h2 {
    font-stretch: ultra-expanded;
    letter-spacing: 2px;
  }
  .scroll-icon {
    margin-top: 0.5em;
  }
  .small-text {
    cursor: pointer;
    margin-top: 1em;
  }
  .row {
    display: grid;
    grid-template-columns: 66.66% 33.33%;
  }
  .mybtn {
    border: none;
    color: #fff;
    font-weight: 600;
    background: transparent;
    outline: none;
    span {
      margin-right: 0.5em;
      font-weight: 600;
      font-size: 18px;
    }
  }
  .bg-overlay {
    position: absolute;
    background: #000;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.4;
    pointer-events: none;
  }
`

function Landingpage({ content, type, setContent }) {
  return (
    <Container>
      <div
        className="content"
        style={content !== 0 ? { opacity: "0", transition: "all 0.5s" } : {}}
      >
        <h2>
          CREATING AWESOME SPACES
          <br />
          DESIGNED TO FEEL RIGHT
          <br />
        </h2>
        <div className="small-text">
          <button onClick={setContent} className="mybtn">
            <span>Discover our products</span>
            <img src={icon1} alt="icon" className="scroll-icon" />
          </button>
        </div>
      </div>
      <div className="simple-trans-main">
        <div
          className="bg bg1"
          style={
            (content === 1 && type === "down") || content !== 0
              ? { height: "0%", transition: "all 1s", transitionDelay: "1s" }
              : {}
          }
        >
          <div
            className="bg-overlay"
            style={
              content !== 0
                ? {
                    display: "none",
                  }
                : {}
            }
          ></div>
        </div>
        <div
          className="bg bg2"
          style={
            (content === 2 && type === "down" && content !== 1) ||
            content === 3 ||
            (type === "up" && content === 2)
              ? { height: "0%", transition: "all 1s", transitionDelay: "0.1s" }
              : {}
          }
        />
        <div
          className="bg bg3"
          style={
            (content === 1 && type === "up") || content === 3
              ? {
                  height: "0%",
                  transition: "all 1s",
                  transitionDelay: `${content !== 3 ? "1s" : "0s"}`,
                }
              : {}
          }
        />
      </div>
    </Container>
  )
}

export default Landingpage
