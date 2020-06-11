import React from "react"
import styled from "styled-components"
const Container = styled.div`
  width: 24px;
  height: 24px;
  .Hamburger {
    right: 2em;
    top: 25px;
    position: absolute;
    width: 24px;
    height: 24px;
    b {
      display: block;
      right: 0px;
      position: absolute;
      height: 2px;
      width: 24px;
      background: #fff;
      border-radius: 4px;
      transform-origin: 0 50%;
      background: #333;
    }
    b:first-child {
      top: 12px;
      transform: scaleX(1);
      opacity: 1;
    }
    b:nth-child(2) {
      top: 19px;
      transform: scaleX(1);
      opacity: 1;
      width: 20px;
    }
    b:last-child {
      top: 26px;
      width: 14px;
      transform: scaleX(1);
      opacity: 1;
    }

    &:hover {
      cursor: pointer;
      b {
        animation: menu-hover 0.3s forwards cubic-bezier(0, 0, 0.2, 1) 1;
      }
      b:nth-child(2) {
        animation-delay: 0.1s;
      }
      b:last-child {
        animation-delay: 0.2s;
      }
    }
  }
  @keyframes menu-hover {
    60% {
      transform: scaleX(1.4);
    }
    100% {
      transform: scaleX(1);
    }
  }
`

function Hamburger() {
  return (
    <Container>
      <div className="Hamburger">
        <b></b>
        <b></b>
        <b></b>
      </div>
    </Container>
  )
}

export default Hamburger
