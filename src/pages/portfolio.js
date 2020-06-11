import React, { Component } from "react"
import Header from "../components/Header"
import PortfolioLayout from "../Layouts/PortfolioLayout"
import Seo from "../components/seo"

export default class Portfolio extends Component {
  constructor(props) {
    super(props)
    this.state = { bgState: 1 }
    this.hideHeaderBg = this.hideHeaderBg.bind(this)
  }
  hideHeaderBg() {
    this.setState({ bgState: 0 })
  }
  render() {
    return (
      <div>
        <Seo title="About" />
        <div
          style={{
            position: "fixed",
            top: "0",
            zIndex: 10,
            right: 0,
            width: "100vw",
            transition: "all 0.5s",
            paddingBottom: "1.7em",
            background: `${this.state.bgState ? "#fff" : "transparent"}`,
          }}
        >
          <Header />
        </div>
        <PortfolioLayout
          data={this.props.data}
          hideHeaderBg={this.hideHeaderBg}
        />
      </div>
    )
  }
}

export const query = graphql`
  query {
    allSanityProject {
      edges {
        node {
          title
          bgPath
          slug {
            current
          }
          mainImage {
            asset {
              fixed(width: 1920, height: 950) {
                ...GatsbySanityImageFixed
              }
            }
          }
          categories {
            title
          }
        }
      }
    }
  }
`
