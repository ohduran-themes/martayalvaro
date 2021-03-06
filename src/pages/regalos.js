import React from "react"
import { useTranslation } from "react-i18next"

import "../styles/global.css"
import DefaultLayout from "../layouts/Default"

import regalosIconDatosBancarios from "../images/regalos-icon-datos-bancarios.jpeg"

const Regalos = () => {
  const { t } = useTranslation()
  return (
    <DefaultLayout>
      <main className="mt-3">
        <section className="mx-auto w-10/12 sm:w-3/4 md:w-2/3 lg:w-7/12 max-w-2xl">
          <article className="px-1 mx-auto mt-5 text-center text-sm sm:text-base md:text-lg lg:text-xl leading-loose">
            <p className="">
              {t(
                "Que estés presente en el día más importante de nuestras vidas"
              )}
              <br />
              <span className="font-semibold">{t("es el mejor regalo")}</span>.
            </p>
            <p className="mt-2">
              {t("Si además quieres ayudarnos a que nuestra luna de miel")}
              <br />
              {t("sea inolvidable, podéis hacerlo con estos datos")}:
            </p>
          </article>
          <section
            className="mt-5 mb-6 mx-auto w-11/12 sm:w-full p-2 sm:flex sm:justify-around rounded-lg bg-teal-800 shadow-lg md:shadow-xl font-family-fira-sans"
            style={{
              gridTemplateCols: "auto 1fr",
              alignItems: "center",
            }}
          >
            <img
              src={regalosIconDatosBancarios}
              className="mx-auto sm:ml-5 h-32 object-cover sm:h-40 md:h-48 lg:h-56 rounded-full outline-none"
              style={{ justifySelf: "center" }}
              alt="Nosotros siendo nosotros"
            />
            <div className="mx-auto text-center sm:text-left sm:mx-3 sm:mr-5 text-xs sm:text-sm md:text-base lg:text-lg text-teal-100">
              <p>Marta Hurtado Sabaté {t("y")} Álvaro Durán Barata</p>
              <p className="text-white font-semibold">
                ES56 2100 0813 6702 0099 8515
              </p>
              <p>CaixaBank, S.A.</p>
            </div>
          </section>
        </section>
      </main>
    </DefaultLayout>
  )
}

export default Regalos
