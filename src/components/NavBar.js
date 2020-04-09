import React from "react"
import { Link } from 'gatsby'

import '../styles/global.css'

export class NavBar extends React.Component{

  render(){

    return(
      <nav className="mx-1 mb-5">
        <ul className="flex justify-around text-center text-sm px-2 font-semibold text-teal-800">
          <li><Link to="/" className="p-1 rounded hover:bg-teal-800 hover:text-teal-100">Home</Link></li>
          <li><Link to="/informacion" className="p-1 rounded hover:bg-teal-800 hover:text-teal-100">Información</Link></li>
          <li><Link to="/regalos" className="p-1 rounded hover:bg-teal-800 hover:text-teal-100">Lista de Regalos</Link></li>
          <li><Link to="/rsvp" className="p-1 rounded hover:bg-teal-800 hover:text-teal-100">Reservar</Link></li>
        </ul>
      </nav>
    )
  }
}

export default NavBar
