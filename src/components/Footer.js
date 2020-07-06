import React from "react"
// import { useTranslation } from "react-i18next"

import "../styles/global.css"
import footer_decoration_image from "../images/footer-decoration-branch.png"

const Footer = () => {
  // const { i18n } = useTranslation()

  // const changeLanguage = lng => {
  //   i18n.changeLanguage(lng)
  // }
  return (
    <footer className="mt-3">
      {/* <div className="flex w-20 mx-auto justify-around">
        <button onClick={() => changeLanguage("es")}>es</button>
        <button onClick={() => changeLanguage("en")}>en</button>
        <button onClick={() => changeLanguage("cat")}>cat</button>
      </div> */}
      <img
        className="mx-auto"
        src={footer_decoration_image}
        alt="footer branch"
      />
    </footer>
  )
}

export default Footer
