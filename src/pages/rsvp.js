import React from "react"
import { useTranslation } from "react-i18next"

import "../styles/global.css"
import DefaultLayout from "../layouts/Default"
import SectionTitle from "../components/SectionTitle"

import fayeda from "../images/fayeda.jpg"

const RSVP = () => {
  const { t } = useTranslation()
  return (
    <DefaultLayout>
      <main className="mt-3">
        <section>
          <SectionTitle>¡{t("Confirma tu asistencia")}!</SectionTitle>
          <h2 className="mt-2 md:mt-5 w-11/12 max-w-md mx-auto sm:text-lg lg:text-xl leading-loose">
            <p className="text-center">
              {t("Si aún no nos has confirmado tu asistencia,")}
              <br />
              <span className="font-semibold">¡{t("este es el momento")}!</span>
            </p>
            <p className="mt-1">
              {t(
                "Completa este formulario y te incluiremos en la newsletter, donde iremos informando de horarios y mandaremos alguna que otra foto"
              )}
              .
            </p>
            <p className="mt-1">
              {t(
                "Además, si tienes alguna alergia, nos aseguraremos de que tengas un menú específico"
              )}
              .
            </p>
            <p className="mt-1 text-center">¡{t("Muchas gracias")}!</p>
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
                placeholder={t("Nombre")}
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
                placeholder={t("¿Cuántos?")}
                required
              />
            </div>
            <div className="w-11/12 mx-auto">
              <input
                className="outline-none text-center rounded-lg w-full h-16 mt-5"
                type="text"
                name="alergias"
                id="alergias"
                placeholder={t("¿Tienes alguna petición para tu menú?")}
              />
              <input type="hidden" name="form-name" value="rsvp" />
            </div>
            <div className="mt-6 mb-3 w-1/4 mx-auto">
              <button
                id="submit"
                className="submit px-2 py-3 w-full mx-auto bg-teal-800 rounded-lg shadow-lg text-white text-lg md:text-xl lg:text-2xl font-semibold"
              >
                {t("Enviar")}
              </button>
            </div>
          </form>
        </section>
        <figure className="antialiased">
          <img
            className="w-2/3 md:w-1/2 mx-auto my-5 object-cover object-bottom shadow-xl rounded-lg"
            src={fayeda}
            alt="Marta & Álvaro"
          />
        </figure>
      </main>
    </DefaultLayout>
  )
}

export default RSVP
