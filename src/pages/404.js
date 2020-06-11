import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Container = styled.div`
  color: #333;
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  a {
    color: #9e8f86;
  }
`
const NotFoundPage = () => (
  <Container>
    <h1 className="content-title">Error 404</h1>
    <section className="content-body">
      Page not found, <Link to="/"> return home </Link> to start over
    </section>
  </Container>
)

export default NotFoundPage
