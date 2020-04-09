import React from "react"

import '../styles/global.css'
import footer_decoration_image from "../images/footer-decoration-branch.png"

export class Footer extends React.Component{

  render(){

    return(
      <footer className="mt-3">
        <img className="mx-auto" src={footer_decoration_image} alt="footer branch" />
      </footer>
    )
  }
}

export default Footer
