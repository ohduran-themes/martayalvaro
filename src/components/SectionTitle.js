import React, { Component } from "react"

export default class SectionTitle extends Component {
  render() {
    return (
      <h1 className="mt-5 text-center text-3xl md:text-4xl lg:text-5xl text-teal-800 font-family-alex-brush font-bold">
        {this.props.children}
      </h1>
    )
  }
}
