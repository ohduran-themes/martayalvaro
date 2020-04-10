import React from "react"

import "../styles/global.css"
import DefaultLayout from "../layouts/Default"

export class Home extends React.Component{

  render(){

    return(
      <DefaultLayout>
        <main className="mt-3">
          <section>
            <h1 className="text-center text-xl sm:text-2xl md:text-3xl font-bold text-teal-800">
              ¡Confirma tu asistencia!
            </h1>
            <form className="grid mt-2 sm:mt-3 md:mt-4 text-sm sm:text-base" style={{ justifyItems: 'center'}}>
              <input className="text-center rounded-lg max-w-md mt-2" type="text" name="name" id="name" placeholder="Nombre" required/>
              <input className="text-center rounded-lg max-w-md mt-2" type="email" name="email" id="email" placeholder="Email"/>
              <input className="text-center rounded-lg max-w-md mt-2" type="number" name="number" id="number" placeholder="¿Cuántos sois?" required/>
              <input className="text-center rounded-lg w-7/12 max-w-screen-sm h-16 mt-5" type="text" name="alergias" id="alergias" placeholder="¿Tienes alguna petición para tu menú?"/>

              <button id="submit" className="mt-6 mb-3 submit px-2 py-3 bg-teal-800 rounded-lg shadow-lg text-white font-semibold">Enviar</button>
            </form>
          </section>

        </main>

      </DefaultLayout>
    )
  }
}

export default Home
