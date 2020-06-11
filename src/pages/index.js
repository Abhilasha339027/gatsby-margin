import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.css"
import "../style/main.scss"
import Seo from "../components/seo"
import Header from "../components/Header"
import DefaultLayout from "../Layouts/DefaultLayout"

export default function IndexPage() {
  const [content, updateContent] = useState(0)
  const [type, updateType] = useState("down")

  return (
    <div>
      <Seo title="Home" />
      <div
        style={
          content === 0
            ? {
                display: "block",
              }
            : {
                display: "none",
              }
        }
      >
        <Header logo="white" />
      </div>
      <div
        style={
          content !== 0
            ? {
                position: "relative",
                opacity: 1,
                transition: "all 1s",
                transitionDelay: "1.5s",
                transform: "translateY(10px)",
                // padding: "0.1em 0em 1.5em 0em",
                background: "#fff",
                width: "100%",
              }
            : {
                opacity: 0,
                position: "absolute",
                transform: "translateY(-100px)",
              }
        }
      >
        <Header />
      </div>
      <DefaultLayout updateContent={updateContent} updateType={updateType} />
    </div>
  )
}
