import React from "react"
import { Link } from "gatsby"
import { useTranslation } from "react-i18next"

import "../styles/global.css"

const NavBar = () => {
  const { t } = useTranslation()
  return (
    <nav className="mx-1 mb-5 sm:mb-6 md:mb-8 mt-4 sm:mt-6">
      <ul className="flex justify-around md:justify-center px-2 text-center text-sm sm:text-base md:text-lg text-teal-800 font-black">
        <li>
          <Link
            to="/"
            className="p-1 md:mx-5 rounded hover:bg-teal-800 hover:text-teal-100"
          >
            {t("Inicio")}
          </Link>
        </li>
        <li>
          <Link
            to="/informacion"
            className="p-1 md:mx-5 rounded hover:bg-teal-800 hover:text-teal-100"
          >
            {t("Información")}
          </Link>
        </li>
        <li>
          <Link
            to="/regalos"
            className="p-1 md:mx-5 rounded hover:bg-teal-800 hover:text-teal-100"
          >
            {t("Lista de Regalos")}
          </Link>
        </li>
        <li>
          <Link
            to="/rsvp"
            className="p-1 md:mx-5 rounded hover:bg-teal-800 hover:text-teal-100"
          >
            {t("Reservar")}
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
