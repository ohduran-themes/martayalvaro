import React from "react"
import { useTranslation } from "react-i18next"

import "../styles/global.css"
import DefaultLayout from "../layouts/Default"
import santaAgnes from "../images/staagnes.jpg"
import masDeSantLlei from "../images/masdesantllei.jpeg"
import InformacionSection from "../components/InformacionSection"
import SectionTitle from "../components/SectionTitle"

const Informacion = () => {
  const { t } = useTranslation()
  return (
    <DefaultLayout>
      <main className="mt-3 mb-32">
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
          <SectionTitle>{t("Ceremonia")}</SectionTitle>
          <h2 className="mt-2 px-1 text-center">
            {t(
              'Todo empezará a las 12.30 en la iglesia de Santa Agnès de Malanyanes en la que nos daremos el "Sí, quiero".'
            )}
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
          <SectionTitle>{t("Convite")}</SectionTitle>
          <h2 className="mt-2 px-1 text-center">
            {t(
              "Acto seguido, iremos a celebrarlo por todo lo alto en el Mas de Sant Lleí."
            )}
          </h2>
          <h2 className="mt-2 px-1 text-center">
            {t(
              "Allí disfrutaremos de una gran fiesta con nuestra familia y amigos."
            )}
          </h2>
        </InformacionSection>

        <section>
          <p className="text-center sm:text-lg">
            {t("Os esperamos a todos para lo que será")}
            <br />
            {t("una velada fantástica.")}
          </p>
        </section>
      </main>
    </DefaultLayout>
  )
}

export default Informacion
