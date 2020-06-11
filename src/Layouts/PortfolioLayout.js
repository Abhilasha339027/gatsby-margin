import React from "react"
import styled from "styled-components"
import Style from "../style/style"
import CustomFooter from "../components/CustomFooter"
import { Link } from "gatsby"
import { Dropdown } from "react-bootstrap"
const Container = styled.div`
  color: #333;
  font-family: "Montserrat", sans-serif;
  .content {
    max-width: 1800px;
    margin: auto;
  }
  .portfolio-cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 100%;
    margin: auto;
    margin-bottom: 14em;
    margin-top: 6em;
  }
  .title {
    margin-top: 3em;
  }
  h1 {
    text-transform: uppercase;
    text-align: center;
    font-size: 64px;
    font-weight: 700;
    font-family: "Montserrat", sans-serif;
  }
  h6 {
    text-align: center;
    font-size: 14px;
    margin-bottom: 5em;
    font-weight: 600;
  }
  .about-link {
    text-align: center;
    margin: 8em 0em;
    p {
      font-size: 14px;
      font-weight: 600;
    }
    h1 {
      color: #fff;
      transition: all 0.4s;
      line-height: 1;
      -webkit-text-stroke: 2px #333;
      &:hover {
        color: #333;
      }
    }
  }
  a {
    color: #333;
    text-decoration: none;
    &:hover {
      color: #333;
    }
  }
  .hidden-item {
    position: absolute;
    top: 50px;
  }
  .fsm {
    transition: all 1s ease-in;
  }
  .hidden-item-2 {
    position: absolute;
    top: 0px;
  }
  button {
    background: transparent;
  }
  .portfolio-title {
    display: flex;
    margin-top: -2em;
    margin-left: 2em;
    hr {
      background: #777;
      color: #777;
      width: 1.4em;
      margin: 0.5em 1.2em 0em 1.2em;
    }
    h4 {
      text-transform: uppercase;
      font-size: 16px;
      font-weight: 700;
    }
    p {
      font-size: 14px;
      color: #777;
      line-height: 16px;
    }
  }
  .wrap {
    height: 16px;
    overflow: hidden;
  }
  // .old,
  // .new {
  //   transition: transform 1s linear;
  // }
  // .portfolio-card:hover .old {
  //   transform: translateY(-1.2em);
  // }
  // .portfolio-card:hover .new {
  //   transform: translateY(-2.4em);
  // }

  .portfolio-card:hover
  {
    transition: transform .3s linear .1s ;
    transform: scale(1.2);
  }




  .card-btn {
    min-width: 350px;
    width: 41vw;
    height: 420px;
    margin: 4em 0em;
    background-size: cover;
  }
  #fsm_actual {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0em;
  }
  #filter {
    position: absolute;
    right: 10vw;
    background: #f2f2f2;
    border: none;
    outline: none;
    color: #000;
    padding-left: 1em;
    padding-right: 1em;
  }

  @media only screen and (max-width: 500px) {
    h1 {
      font-size: 48px;
    }
  }
  .active {
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
  }
`
export default function PortfolioLayout({ data, hideHeaderBg }) {
  var openFSM = function(target, bg) {
    hideHeaderBg()
    var $fsmActual = document.getElementById("fsm_actual")
    var position = {}
    var size = {}
    var $this = document.querySelector(`.${target}`)
    position = $this.getBoundingClientRect()
    var dist = window.pageYOffset
    size = {
      width: window.getComputedStyle($this).width,
      height: window.getComputedStyle($this).height,
    }
    document.querySelector(".dpdown").style.zIndex = -1

    $fsmActual.style.backgroundSize = `cover`
    $fsmActual.style.backgroundPosition = `center`
    $fsmActual.style.zIndex = `2`
    $fsmActual.style.backgroundImage = `url(${require(`../assets/img/${bg}`)})`
    $fsmActual.style.position = "absolute"
    var number = window.pageYOffset + position.top
    $fsmActual.style.height = size.height
    $fsmActual.style.width = size.width
    $fsmActual.style.top = number + "px"
    $fsmActual.style.left = position.left + "px"
    $fsmActual.style.transition = "all 1s"

    setTimeout(function() {
      var classes = $this.classList.value.split(" ")
      for (var i = 0; i < classes.length; i++) {
        $fsmActual.classList.add(classes[i])
      }
      $fsmActual.classList.add("active")
      $fsmActual.style.height = "100vh"
      $fsmActual.style.width = "100vw"
      $fsmActual.style.top = dist + "px"
      $fsmActual.style.left = "0"
      $fsmActual.style.transition = "all 1s"
    }, 1)

    setTimeout(function() {
      document.querySelector(`.link-${target}`).click()
    }, 1100)
  }
  var filter = function(value, event) {
    var cards = document.getElementsByClassName("portfolio-card")
    var activeCards = document.getElementsByClassName(value)
    for (var i = 0; i < cards.length; i++) {
      cards[i].style.transition = `all 0.8s`
      cards[i].style.transform = "scale(0.6)"
      cards[i].style.opacity = "0"
    }
    setTimeout(() => {
      for (var i = 0; i < cards.length; i++) {
        cards[i].style.display = `none`
      }
      for (i = 0; i < activeCards.length; i++) {
        activeCards[i].style.display = `block`
      }
    }, 800)

    setTimeout(() => {
      for (i = 0; i < activeCards.length; i++) {
        activeCards[i].style.transition = `all 0.8s`
        activeCards[i].style.transform = "scale(1)"
        activeCards[i].style.opacity = "1"
      }
    }, 900)

    var dropdowns = document.getElementsByClassName("dropdown-item")
    for (i = 0; i < dropdowns.length; i++) {
      dropdowns[i].style.color = "#000"
      dropdowns[i].style.background = "#fff"
    }
    event.target.style.background = "#007BFF"
    event.target.style.color = "#fff"
  }
  return (
    <div className ="margin">
    <div className="warapper">
      <Container className="portfolioContainer">
        <h6 className="hidden-item-2" />
        <h6 className="hidden-item" />
        <div id="fsm_actual" />
        <h1 className="title">PORTFOLIO</h1>
        <h6>Our best work</h6>
        <Dropdown className="dpdown">
          <Dropdown.Toggle id="filter">Filter</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={event => filter("kitchen", event)}>
              Kitchen
            </Dropdown.Item>
            <Dropdown.Item onClick={event => filter("bathroom", event)}>
              Bathroom
            </Dropdown.Item>
            <Dropdown.Item onClick={event => filter("bedroom", event)}>
              Bedroom
            </Dropdown.Item>
            <Dropdown.Item onClick={event => filter("living-room", event)}>
              Living room
            </Dropdown.Item>
            <Dropdown.Item onClick={event => filter("dining-room", event)}>
              Dining room
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <div className="content">
          <div className="portfolio-cards">
            {data.allSanityProject.edges.map(({ node }) => (
              <div
                className={`fsm portfolio-card ${node.categories[0].title
                  .toLowerCase()
                  .replace(" ", "-")}`}
                key={node.title}
              >
                <Link
                  className={`link-${node.slug.current}`}
                  to={`/${node.slug.current}`}
                />
                <button
                  className={`card-btn ${node.slug.current}`}
                  onClick={() => openFSM(node.slug.current, node.bgPath)}
                  style={{
                    backgroundImage: `url(${require(`../assets/img/${node.bgPath}`)})`,
                  }}
                ></button>
                <div className="portfolio-title">
                  <h4>{node.title}</h4>
                  <hr />
                  <div className="wrap">
                    <p className="old">Photo</p>
                    <p className="new">View Case</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <CustomFooter />
      </Container>
    </div>
    </div>
  )
}
