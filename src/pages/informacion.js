import React from "react"

import "../styles/global.css"
import DefaultLayout from "../layouts/Default"
import santaAgnes from "../images/staagnes.jpg"
import masDeSantLlei from "../images/masdesantllei.jpeg"
import InformacionSection from "../components/InformacionSection"
import SectionTitle from "../components/SectionTitle"

export default class Informacion extends React.Component {
  render() {
    return (
      <DefaultLayout>
        <main className="mt-3 mb-32">
          {/* Ceremonia */}
          <InformacionSection
            src={santaAgnes}
            initialCenter={{ lat: 41.6047438, lng: 2.353613 }}
            direccion={() => {
              return (
                <span>
                  Plaza Del Obispado, Santa Agnès de Malanyanes
                  <br />
                  La Roca del Vallès, Barcelona
                </span>
              )
            }}
          >
            <SectionTitle>Ceremonia</SectionTitle>
            <h2 className="mt-2 px-1 text-center">
              Todo empezará a las 12.30 en la iglesia de Santa Agnès de
              Malanyanes en la que nos daremos el "Sí, quiero".
              {/*               
              Tendrá lugar en la iglesia de
              <br className="sm:hidden" /> Santa Agnès de Malanyanes
              <br className="sm:hidden" /> a las{" "}
              <span className="text-teal-900 font-bold">12.30</span>. */}
            </h2>
          </InformacionSection>

          {/* Convite */}
          <InformacionSection
            src={masDeSantLlei}
            initialCenter={{ lat: 41.547561, lng: 2.299448 }}
            direccion={() => {
              return (
                <span>
                  Camí de la Casa Alta, s/n
                  <br />
                  Ctra. Granollers a Masnou, km.10
                  <br />
                  08410, Barcelona
                </span>
              )
            }}
          >
            <SectionTitle>Convite</SectionTitle>
            <h2 className="mt-2 px-1 text-center">
              Acto seguido, iremos a celebrarlo por todo lo alto en el Mas de
              Sant Lleí.
            </h2>
            <h2 className="mt-2 px-1 text-center">
              Allí disfrutaremos de una gran fiesta con nuestra familia y
              amigos.
              {/*               
              Una vez seamos marido y mujer, tendrá lugar en el
              <br className="sm:hidden" /> Mas de Sant Lleí,
              <br className="sm:hidden" /> a las{" "}
              <span className="text-teal-900 font-bold">2 de la tarde</span>. */}
            </h2>
          </InformacionSection>

          <section>
            <p className="text-center sm:text-lg">
              Os esperamos a todos para lo que será
              <br />
              una velada fantástica.
            </p>
          </section>
        </main>
      </DefaultLayout>
    )
  }
}
