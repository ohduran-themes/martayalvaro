import React from "react"

import "../styles/global.css"
import DefaultLayout from "../layouts/Default"

import regalosIconDatosBancarios from '../images/regalos-icon-datos-bancarios.jpeg'

export class Home extends React.Component{

  render(){

    return(
      <DefaultLayout>
        <main className="mt-3">
          <section>
            <h1 className="text-center text-xl sm:text-2xl md:text-3xl font-bold text-teal-800">
              Nuestra Luna de Miel
            </h1>
            <article className="px-1 mx-auto mt-5 text-center text-sm sm:text-base">
              <p className="">Vuestra compañía en nuestro día más especial<br className="sm:hidden"/> <span className="font-semibold">es el mejor regalo</span>.</p>
              <p className="mt-2">Si además queréis contribuir con un donativo,<br/>podéis hacerlo con los siguientes datos:</p>
            </article>
            <section className="mt-5 mb-6 mx-auto w-10/12 md:w-2/3 px-1 py-3 grid grid-rows-3 rounded-lg bg-teal-800 shadow-lg md:shadow-xl" style={{
                gridTemplateCols: "min-content 1fr",
                alignItems: 'center'
              }}>
              <img src={regalosIconDatosBancarios}
                   className="col-start-1 row-span-3 h-16 sm:h-20 md:h-24 lg:h-32 rounded-full outline-none" style={{ justifySelf: 'center'}}
                   alt="Nosotros siendo nosotros" />

              <p className="col-start-2 row-start-1 text-xs sm:text-sm md:text-base lg:text-lg text-teal-100">Marta Hurtado Sabate y Álvaro Durán Barata</p>
              <p className="col-start-2 row-start-2 text-xs sm:text-sm md:text-base lg:text-lg text-white font-semibold">ES56 2100 0813 6702 0099 8515</p>
              <p className="col-start-2 row-start-3 text-xs sm:text-sm md:text-base lg:text-lg text-teal-100">CaixaBank, S.A.</p>
            </section>
          </section>

        </main>

      </DefaultLayout>
    )
  }
}

export default Home
