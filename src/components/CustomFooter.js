import React from "react"
import styled from "styled-components"
const Container = styled.div`
  color: #fff;
  width: 100vw !important;
  .footer {
    width: 100vw !important;
    background: #242424;
  }
  .footer-flexbox {
    padding: 6em 10% 4em 10%;
    width: 100vw !important;
    justify-content: space-between;
  }
  @media only screen and (max-width: 750px) {
    .footer-flexbox {
      justify-content: center;
      flex-direction: column;
    }
    .p-2 {
      text-align: center;
    }
  }
`
function CustomFooter() {
  return (
    <Container>
      <footer className="footer">
        <div className="d-flex footer-flexbox">
          <div className="p-2">
            <p>&copy; 2020</p>
            <p>Metro floring & Interior design</p>
          </div>
          <div className="p-2">
            <p>Link 1 </p>
            <p>Link 2 </p>
            <p>Link 3 </p>
            <p>Link 4 </p>
          </div>
          <div className="p-2">
            <p>Link 1 </p>
            <p>Link 2 </p>
          </div>
          <div className="p-2">
            <p>Link 1 </p>
            <p>Link 2 </p>
          </div>
        </div>
      </footer>
    </Container>
  )
}

export default CustomFooter
