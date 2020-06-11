import React from "react"
import Header from "../components/Header"
import ContactLayout from "../Layouts/ContactLayout"
import styled from "styled-components"

const Container = styled.div`
  width: 99vw;
  margin-left: 1vw;
  @media only screen and (max-width: 766px) {
    width: 100%;
    margin: 0;
    padding-bottom:10%;
  }
`
const contact = () => {
  return (
    <div>
      <Container>
        <Header />
        <ContactLayout />
      </Container>
    </div>
  )
}

export default contact
