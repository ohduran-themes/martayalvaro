import React from "react"
import "../styles/global.css"
import header_decoration_branch from "../images/header-decoration-branch.png"

const Header = () => {
  return (
    <header
      className="mx-auto"
      style={{
        backgroundImage: `url(${header_decoration_branch})`,
        backgroundPosition: "center top, center center",
        backgroundRepeat: "no-repeat, no-repeat",
      }}
    >
      <div className="pt-24 text-header">
        <h1>
          Marta
          <br />
          <span className="font-family-alex-brush">&</span>
          <br />
          Álvaro
        </h1>
      </div>
    </header>
  )
}

export default Header
