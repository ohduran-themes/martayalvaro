import React from "react"

import "../styles/global.css"
import DefaultLayout from "../layouts/Default"
import SectionTitle from "../components/SectionTitle"

export class Home extends React.Component {
  render() {
    return (
      <DefaultLayout>
        <main className="mt-3">
          <section>
            <SectionTitle>¡Confirma tu asistencia!</SectionTitle>
            <h2 className="w-11/12 max-w-md mx-auto text-center sm:text-lg lg:text-xl leading-loose">
              <p>
                Si aún no nos has confirmado tu asistencia,
                <br />
                <span className="font-semibold">¡este es el momento!</span>
              </p>
              <p className="mt-1">
                Completa este formulario con tus datos y te mantendremos
                informado.
              </p>
              <p className="mt-1">
                Además, si tienes alguna alergia, nos encargaremos de tener un
                menú específico para ti.
              </p>
              <p>¡Muchas gracias!</p>
            </h2>
            <form
              action="/rsvp"
              name="rsvp"
              method="POST"
              data-netlify="true"
              className="w-11/12 max-w-md mx-auto mt-2 sm:mt-3 md:mt-4 text-sm sm:text-base"
            >
              <div className="flex justify-around">
                <input
                  className="outline-none text-center rounded-lg mt-2 w-24 sm:w-30"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Nombre"
                  required
                />
                <input
                  className="outline-none text-center rounded-lg ml-2 mt-2 w-24 sm:w-30"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
                <input
                  className="outline-none text-center rounded-lg ml-2 mt-2 w-24 sm:w-30"
                  type="number"
                  name="number"
                  id="number"
                  placeholder="¿Cuántos?"
                  required
                />
              </div>
              <div className="w-11/12 mx-auto">
                <input
                  className="outline-none text-center rounded-lg w-full h-16 mt-5"
                  type="text"
                  name="alergias"
                  id="alergias"
                  placeholder="¿Tienes alguna petición para tu menú?"
                />
                <input type="hidden" name="form-name" value="rsvp" />
              </div>
              <div className="mt-6 mb-3 w-1/4 mx-auto">
                <button
                  id="submit"
                  className="submit px-2 py-3 w-full mx-auto bg-teal-800 rounded-lg shadow-lg text-white text-lg md:text-xl lg:text-2xl font-semibold"
                >
                  Enviar
                </button>
              </div>
            </form>
          </section>
        </main>
      </DefaultLayout>
    )
  }
}

export default Home
