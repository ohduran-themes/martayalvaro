import React, { Component } from "react"

export default class SectionTitle extends Component {
  render() {
    return (
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl text-teal-800 font-family-alex-brush font-bold">
        {this.props.children}
      </h1>
    )
  }
}
