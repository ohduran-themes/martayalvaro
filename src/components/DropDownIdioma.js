import React, { useState } from "react"
import { useTranslation } from "react-i18next"

const DropDownIdioma = () => {
  const { t, i18n } = useTranslation()
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false)

  const toggleDropdown = () => {
    setDropdownIsOpen(!dropdownIsOpen)
  }

  const changeLanguage = lng => {
    i18n.changeLanguage(lng)
    setDropdownIsOpen(false)
  }
  return (
    <div className="relative">
      <button
        onClick={() => toggleDropdown()}
        className="px-1 md:mx-5 rounded hover:bg-teal-800 hover:text-teal-100 text-center text-sm sm:text-base md:text-lg text-teal-800 font-black"
      >
        {t("Idioma")}
      </button>
      {dropdownIsOpen ? (
        <div className="absolute left-0 mt-1 bg-gray-200 rounded-lg py-2 shadow-lg">
          <button
            className="block pl-4 pr-3 py-2 hover:bg-teal-800 hover:text-teal-100"
            onClick={() => changeLanguage("es")}
          >
            Español
          </button>
          <button
            className="block pl-4 pr-3 py-2 hover:bg-teal-800 hover:text-teal-100"
            onClick={() => changeLanguage("en")}
          >
            English
          </button>
          <button
            className="block pl-4 pr-3 py-2 hover:bg-teal-800 hover:text-teal-100"
            onClick={() => changeLanguage("ca")}
          >
            Català
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  )
}

export default DropDownIdioma
