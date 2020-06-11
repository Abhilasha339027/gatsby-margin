import React, { Component } from "react"
import styled from "styled-components"
import img1 from "../assets/img/home.jpg"
import img2 from "../assets/img/kitchen.jpg"
import icon1 from "../assets/img/icon_scroll_dark.svg"
import Footer from "../components/Footer"

const Wrapper = styled.div`
  transition: all 1s;
  color: #333;
  transition-delay: 1.3s;
  position: absolute;
  z-index: -1;
  width: 100%;
  margin-top: 1.6em;
  .section-container {
    height: 89.5vh;
    width: 100%;
  }
  .section {
    height: 89.5vh;
    width: 100%;
    display: grid;
  }
  .section-2 {
    grid-template-columns: 66.66% 33.33%;
    margin-top: 20px;
  }
  .section-1 {
    grid-template-columns: 33.33% 66.66%;
  }
  .left-section,
  .right-section {
    height: 89.5vh;
    width: 100%;
    transition: all 1s;
  }
  img {
    width: 100%;
    height: 89.5vh;
  }
  .info {
    padding: 0em 4em 3em 4em;
    box-sizing: border-box;
    text-align: center;
    width: 100%;
    height: 89.5vh;
    background: #fff3e3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  h3 {
    font-size: 2.5rem;
  }
  p {
    line-height: 1.5;
    font-size: 16px;
    padding: 0 1em;
    margin-top: 2em;
  }
  hr {
    color: #836755;
    background: #bca99e;
    width: 10em;
  }
  .continu-btn {
    position: absolute;
    bottom: 2em;
    cursor: pointer;
    background: transparent;
    outline: none;
    border: none;
    p {
      color: #9f8575;
      font-size: 16px;
      font-weight: 600;
    }
  }
  .scroll-icon {
    width: 28px;
    height: 28px;
    margin-top: -1em;
  }
  @media only screen and (max-width: 900px) {
    h3 {
      font-size: 2em;
    }
    .info {
      padding: 0em 1em 3em 1em;
    }
  }
  @media only screen and (max-width: 766px) {
    .section {
      flex-direction: column;
      display: block;
      height: 100%;
    }
    img {
      height: 100vw;
    }
    .section-container,
    .left-section,
    .right-section {
      height: 100%;
    }
    .info {
      height: 450px;
    }
  }
`
export default class AboutLayout extends Component {
  constructor(props) {
    super(props)
    this.state = { content: 1, type: "down", scroleState: 1 }
    this.handleKey = this.handleKey.bind(this)
    this.handleState = this.handleState.bind(this)
    this.handleScrool = this.handleScrool.bind(this)
    this.updateSrollState = this.updateSrollState.bind(this)
  }
  handleState() {
    this.setState({
      content: this.state.content + 1,
      type: "down",
    })
  }
  handleKey(event) {
    document.removeEventListener("keydown", this.handleKey, false)
    if (event.keyCode === 40 && this.state.scroleState) {
      if (this.state.content !== 3) {
        this.setState({ content: this.state.content + 1, type: "down" })
      }
    } else if (event.keyCode === 38 && this.state.scroleState) {
      if (this.state.content !== 1) {
        this.setState({ content: this.state.content - 1, type: "up" })
      }
    }
    setTimeout(() => {
      document.addEventListener("keydown", this.handleKey, false)
    }, 1000)
  }
  handleScrool(event) {
    document.removeEventListener("wheel", this.handleScrool, false)
    if (event.deltaY > 0 && this.state.scroleState) {
      if (this.state.content !== 3) {
        this.setState({ content: this.state.content + 1, type: "down" })
      }
    } else if (event.deltaY < 0 && this.state.scroleState) {
      if (this.state.content !== 1) {
        this.setState({ content: this.state.content - 1, type: "up" })
      }
    }
    setTimeout(() => {
      document.addEventListener("wheel", this.handleScrool, false)
    }, 1000)
  }
  updateSrollState() {
    if (window.innerWidth <= 766) {
      this.setState({ scroleState: 0 })
    } else {
      this.setState({ scroleState: 1 })
    }
  }
  componentDidMount() {
    document.addEventListener("keydown", this.handleKey, false)
    document.addEventListener("wheel", this.handleScrool, false)
    window.addEventListener("resize", this.updateSrollState.bind(this))
    this.updateSrollState()
  }
  componentWillUnmount() {}
  render() {
    return (
      <Wrapper
        // onWheel={this.handleScrool}
        content={this.state.content}
        className="container-fluid"
      >
        <div className="margin">
        <div className="section-container" >
          <div className="section section-1">
            <div className="left-section left-section-1 p-0">
              <div className="info info-1">
                <h3>15 + YEARS EXPERIENCE</h3>
                <hr />
                <p>
                  We construct spaces designed to make YOU feel good. From the
                  initial envisioning process we work with you to tease out your
                  ideal vision, and bring it to light.
                </p>
                <button
                  onClick={() =>
                    this.setState({
                      content: this.state.content + 1,
                      type: "down",
                    })
                  }
                  className="continu-btn"
                >
                  <p className="text">Continue</p>
                  <img src={icon1} alt="scroll icon" className="scroll-icon" />
                </button>
              </div>
            </div>
            <div className="right-section right-section-1 p-0">
              <img src={img1} alt="story" />
            </div>
          </div>
          <div className="section section-2">
            <div
              className="left-section left-section-2 p-0"
              style={
                this.state.content !== 1 && this.state.scroleState
                  ? {
                      transition: "all 1s",
                      transform: "translateY(calc(-100% - 20px))",
                    }
                  : { transform: "translateY(0%)", transition: "all 1s" }
              }
            >
              <img src={img2} alt="story" />
            </div>
            <div
              className="right-section right-section-2 p-0"
              style={
                this.state.content !== 1 && this.state.scroleState
                  ? {
                      transition: "all 1.5s",
                      transform: "translateY(calc(-100% - 20px) )",
                    }
                  : { transform: "translateY(0%)", transition: "all 1.5s" }
              }
            >
              <div className="info info-2">
                <h3>IT’S THE EMOTIONS</h3>
                <hr />
                <p>
                  To us the final impression is just as important, if not more
                  than, the last one. With the crux of our business having come
                  by word of mouth we have been able to grow organically, thanks
                  to our incredible clients and amazing team.
                </p>
              </div>
            </div>
          </div>
          <Footer
            className="footer-section"
            content={this.state.content}
            scrollState={this.state.scroleState}
          />
        </div>
        </div>
      </Wrapper>
    )
  }
}
