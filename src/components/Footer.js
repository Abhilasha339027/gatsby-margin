import React from "react"
import { Link } from "gatsby"
import img1 from "../assets/img/img7.jpg"
import img2 from "../assets/img/img9.jpg"
import img3 from "../assets/img/img8.jpg"
import styled from "styled-components"
import "../style/animatedBorder.scss"
const Container = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  left: 0;
  display: flex;
  transition: all 1s;
  height: 90vh;
  .footer {
    width: 33.33%;
    text-align: center;
    z-index: 7;
    overflow: hidden;
  }
  .bg {
    background-size: cover;
    width: 100%;
    height: 100%;
    overflow: hidden;
    transition: transform 1s;
    position: absolute;
    &:hover {
      transform: scale(1.1);
    }
  }
  .bg1 {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${img1});
  }
  .bg2 {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${img2});
  }
  .bg3 {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${img3});
  }
  h3 {
    font-size: 36px;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
    cursor: pointer;
  }
  .animatedBorder {
    margin-top: 4.4vh;
    margin-left: 5.4%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 89%;
    height: 81vh;
  }
  @media only screen and (max-width: 766px) {
    height: 250px;
    margin-bottom: 1em;
    margin-top: 1em;
    position: relative;
    .animatedBorder {
      height: 230px;
      margin-top: 10px;
      position: absolute;
      margin-left: 10px;
      width: calc(100% - 20px);
    }
    .footer {
      overflow: visible;
    }
    .bg {
      position: relative;
      height: 250px;
      overflow: visible;
      &:hover {
        transform: scale(1);
      }
    }
    h3 {
      font-size: 24px;
      margin-bottom: 0;
    }
  }
  @media only screen and (max-width: 720px) {
    display: block;
    .footer {
      width: 100%;
      margin-bottom: 0.8em;
    }
  }
`
function Footer({ content, scrollState }) {
  return (
    <Container>
      <div
        className="footer footer1"
        style={
          content !== 3 && scrollState
            ? { transform: "translateY(112%)", transition: "all 1s" }
            : { transform: "translateY(0%)", transition: "all 1s" }
        }
      >
        <Link to="./portfolio">
          <div className="bg bg1">
            <div className="animatedBorder">
              <span>
                <span>
                  <span>
                    <h3>
                      DISCOVER <br />
                      OUR <br />
                      PORTFOLIO
                    </h3>
                  </span>
                </span>
              </span>
            </div>
          </div>
        </Link>
      </div>

      <div
        className="footer footer2"
        style={
          content !== 3 && scrollState
            ? { transform: "translateY(112%)", transition: "all 1s" }
            : { transform: "translateY(0%)", transition: "all 1.5s" }
        }
      >
        <Link to="./about">
          <div className="bg bg2">
            <div className="animatedBorder">
              <span>
                <span>
                  <span>
                    <h3>
                      GET TO KNOW <br />
                      MORE ABOUT <br />
                      OUR SERVICE
                    </h3>
                  </span>
                </span>
              </span>
            </div>
          </div>
        </Link>
      </div>

      <div
        className="footer footer3"
        style={
          content !== 3 && scrollState
            ? { transform: "translateY(112%)", transition: "all 1s" }
            : { transform: "translateY(0%)", transition: "all 2s" }
        }
      >
        <Link to="./contact">
          <div className="bg bg3">
            <div className="animatedBorder">
              <span>
                <span>
                  <span>
                    <h3>
                      CONATCT US
                      <br /> WITH ANY <br />
                      QUESTIONS
                    </h3>
                  </span>
                </span>
              </span>
            </div>
          </div>
        </Link>
      </div>
    </Container>
  )
}

export default Footer
