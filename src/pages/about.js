import React from "react"
import Header from "../components/Header"
import AboutLayout from "../Layouts/AboutLayout"
import Seo from "../components/seo"

export default function IndexPage() {
  return (
    <div>
      <Seo title="About" />
      <Header />
      <AboutLayout />
    </div>
  )
}
