import React from "react"

import "../styles/global.css"
import DefaultLayout from "../layouts/Default"

import home_hero_image from "../images/home-hero.jpg"

export class Home extends React.Component {
  render() {
    return (
      <DefaultLayout>
        <main className="mt-3">
          {/* Hero Image */}
          <figure className="antialiased">
            <img
              className="w-2/3 md:w-1/2 mx-auto my-5 object-cover object-top shadow-xl rounded-lg"
              src={home_hero_image}
              alt="Marta & Álvaro"
            />
          </figure>

          {/* Hero Text */}
          <section className="mt-3">
            <p className="p-1 text-sm sm:text-base md:text-md lg:text-lg text-center font-semibold">
              Celebra con nosotros el inicio de esta viaje el día
            </p>
          </section>

          {/* Wedding Date */}
          <section className="pt-3 pb-4 text-header">
            <h1>
              3 de Octubre
              <br className="md:hidden" /> 2020
            </h1>
          </section>
          <section>
            <h2 className="text-center text-sm sm:text-base md:text-md lg:text-lg text-center font-semibold">
              Porque toda aventura empieza con un SÍ.
            </h2>
          </section>
        </main>
      </DefaultLayout>
    )
  }
}

export default Home
