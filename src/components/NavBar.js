import React from "react"
import { Link } from 'gatsby'

import '../styles/global.css'

export class NavBar extends React.Component{

  render(){

    return(
      <nav className="mx-1 mb-5 sm:mb-6 md:mb-8 mt-4 sm:mt-6">
        <ul className="flex justify-around md:justify-center px-2 text-center text-xs sm:text-base md:text-lg text-teal-800 font-semibold">
          <li><Link to="/" className="p-1 md:mx-5 rounded hover:bg-teal-800 hover:text-teal-100">Home</Link></li>
          <li><Link to="/informacion" className="p-1 md:mx-5 rounded hover:bg-teal-800 hover:text-teal-100">Información</Link></li>
          <li><Link to="/regalos" className="p-1 md:mx-5 rounded hover:bg-teal-800 hover:text-teal-100">Lista de Regalos</Link></li>
          <li><Link to="/rsvp" className="p-1 md:mx-5 rounded hover:bg-teal-800 hover:text-teal-100">Reservar</Link></li>
          <li><Link to="/playlist" className="p-1 md:mx-5 rounded hover:bg-teal-800 hover:text-teal-100">PlayList</Link></li>
        </ul>
      </nav>
    )
  }
}

export default NavBar
