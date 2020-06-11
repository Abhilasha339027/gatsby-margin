import React from "react"
import Button from "./elements/Button"
import styled from "styled-components"
const Container = styled.div`
  background: #fff;
  position: absolute;
  color: #212529;
  text-align: left;
  padding: 0 60px;
  transition: all 1s;
  .content {
    transition: all 0.5s;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    opacity: 0;
  }
  .content2 {
    transform: translateY(-150%);
  }
  h3 {
    // font-size: 36px;
    // text-transform: uppercase;
    margin-bottom: 0.5rem;
  }
  h5 {
    color: #7e7158;
    background-color: #fff7eb;
    padding: 5px 7px;
    margin-bottom: 15px;
    display: inline-block;
    font-weight: 600;
    font-size: 16px;
  }
  h6 {
    margin-bottom: 1em;
    font-size: 20px;
    line-height: 30px;
    color: #363636;
    text-align: justify;
  }
  p {
    font-size: 16px;
    line-height: 28px;
    color: #363636;
    text-align: justify;
  }
  @media only screen and (max-width: 1200px) {
    h6 {
      font-size: 16px;
    }
    p {
      font-size: 14px;
    }
  }
  @media only screen and (max-height: 800px) {
    h6 {
      font-size: 16px;
      line-height: 1.5em;
    }
    p {
      font-size: 14px;
      line-height: 1.5em;
    }
  }
  @media only screen and (max-width: 1000px) {
    p {
      display: none;
    }
    padding: 0 20px;
  }
  @media only screen and (max-width: 790px) {
    padding: 0 5px;
  }
`
function InfoSection({ content, scrollState }) {
  return (
    <Container
      style={
        content === 0 && scrollState
          ? { height: "0%", transition: "all 1s" }
          : { height: "100%", transition: "all 1s", transitionDelay: "1s" }
      }
    >
      <div
        className="content content1"
        style={
          content === 1 && content !== 0
            ? {
                opacity: "1",
                transition: "all 1.5s",
                transitionDelay: "1s",
              }
            : {}
        }
      >
        <h3>Kitchens</h3>
        <h5>Stunning Natural Stone Kitchens</h5>
        <h6>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries
        </h6>
        <p>
          It was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </p>
        <Button>View all kitchens</Button>
      </div>
      <div
        className="content content2"
        style={
          content === 2 && content !== 0
            ? {
                opacity: "1",
                transition: "all 0.5s",
                transitionDelay: "1s",
              }
            : {}
        }
      >
        <h3>BATHROOMS</h3>
        <h5>Stunning Natural Stone bathrooms</h5>
        <h6>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries
        </h6>
        <p>
          It was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </p>
        <Button>View all bathrooms</Button>
      </div>
    </Container>
  )
}

export default InfoSection
