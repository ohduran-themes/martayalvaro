import React from "react"
import "../i18n"
import Header from "../components/Header"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import "../styles/global.css"

export default class extends React.Component {
  render() {
    return (
      <>
        <Header />
        <NavBar />
        {this.props.children}
        <Footer />
      </>
    )
  }
}
