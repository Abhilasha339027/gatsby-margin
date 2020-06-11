import React, { useState } from "react"
import styled from "styled-components"
import Hamburger from "./elements/Hamburger"
import SideBar from "./SideBar"
import AniLink from "gatsby-plugin-transition-link/AniLink"
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100vw;
  ul {
    margin: 30px 32px 0em 0em;
  }
  a {
    color: ${props => (props.color ? props.color : "#836755")};
    padding: 0px;
    font-size: 18px;
    margin: 0em 32px;
    border-bottom: 1px solid transparent;
    transition: all 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955);
    transition-property: all;
    transition-duration: 0.4s;
    transition-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
    transition-delay: 0s;
    transition-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
    &:hover {
      border-bottom: 1px solid #b89b89;
    }
  }
  .hamburger-item {
    display: none;
  }
  .open-sideBar {
    background: transparent;
    outline: none;
    border: none;
  }
  span {
    font-size: 1px;
  }
  .logo {
    height: 45px;
    width: 350px;
    margin-top: 22px;
    img {
      width: 70%;
      height: 70%;
    }
  }
  @media only screen and (max-width: 910px) {
    .hamburger-item {
      display: block;
    }
    .nav-item {
      display: none;
    }
    .logo {
      width: 300px;
      height: 40px;
    }
  }
`

const Header = ({ color, logo }) => {
  const [SideBarIsActive, toggleSideBar] = useState(false)
  const openSideBar = () => {
    toggleSideBar(true)
  }
  const activeStyle = {
    borderBottom: "1px",
  }
  return (
    <Container className="container-fluid header" color={color}>
      <ul className="logo">
        {logo ? (
          <img src={require(`../assets/img/${logo} logo.png`)} />
        ) : (
          <img src={require("../assets/img/dark logo.png")} />
        )}
      </ul>
      <SideBar
        toggleSideBar={toggleSideBar}
        SideBarIsActive={SideBarIsActive}
      />
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <AniLink
            paintDrip
            hex="#fff7eb"
            to="/"
            duration={1}
            className="nav-link active"
            activeStyle={activeStyle}
          >
            Home
          </AniLink>
        </li>
        <li className="nav-item">
          <AniLink
            paintDrip
            hex="#fff7eb"
            to="portfolio"
            duration={1}
            className="nav-link active"
            activeStyle={activeStyle}
          >
            Works
          </AniLink>
        </li>
        <li className="nav-item">
          <AniLink
            paintDrip
            hex="#fff7eb"
            to="about"
            duration={1}
            className="nav-link active"
          >
            about
          </AniLink>
        </li>
        <li className="nav-item">
          <AniLink
            paintDrip
            hex="#fff7eb"
            to="contact"
            duration={1}
            className="nav-link active"
          >
            Contact
          </AniLink>
        </li>
        <li className="hamburger-item">
          <button className="open-sideBar" onClick={() => openSideBar()}>
            <Hamburger />
          </button>
        </li>
      </ul>
    </Container>
  )
}

export default Header
