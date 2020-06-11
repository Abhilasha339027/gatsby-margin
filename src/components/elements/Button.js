import React from "react"
import styled from "styled-components"

function Button({ children }) {
  const Container = styled.button`
    border: none;
    border-bottom: 1px solid #9f8575;
    color: #9f8575;
    font-weight: 600;
    background: transparent;
    outline: none;
  `
  return (
    <Container onClick={() => console.log("button clicked")}>
      {children}
    </Container>
  )
}

export default Button
