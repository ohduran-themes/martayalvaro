import React from "react"
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react"

import "../styles/global.css"
import DefaultLayout from "../layouts/Default"
import santaAgnes from "../images/staagnes.jpg"
import masDeSantLlei from "../images/masdesantllei.jpeg"

const mapStyles = {
  width: "48vw",
  height: "16rem",
}

export class Informacion extends React.Component {
  state = {
    showingInfoWindow: false, //Hides or the shows the infoWindow
    activeMarker: {}, //Shows the active marker upon click
    selectedPlace: {}, //Shows the infoWindow to the selected place upon a marker
  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    })

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      })
    }
  }

  render() {
    return (
      <DefaultLayout>
        <main className="mt-3 mb-32">
          {/* Ceremonia */}
          <section>
            <h1 className="text-center text-xl font-bold text-teal-800">
              Ceremonia
            </h1>
            <h2 className="mt-2 px-1 text-center">
              Tendrá lugar en la iglesia de
              <br className="sm:hidden" /> Santa Agnès de Malanyanes
              <br className="sm:hidden" /> a las{" "}
              <span className="text-teal-900 font-bold">12 del mediodía</span>.
            </h2>

            <article
              className="grid grid-cols-2 gap-1 mt-3 mx-3 h-64"
              style={{
                gridTemplateRows: "16rem 1fr",
              }}
            >
              <figure>
                <img
                  className="w-full h-full object-cover"
                  src={santaAgnes}
                  alt="Santa Agnès de Malanyanes"
                />
              </figure>

              <aside>
                <Map
                  google={this.props.google}
                  className="google-map"
                  style={mapStyles}
                  zoom={12}
                  initialCenter={{ lat: 41.6047438, lng: 2.353613 }}
                >
                  <Marker
                    onClick={this.onMarkerClick}
                    name={"Santa Agnès de Malanyanes"}
                  />
                  <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}
                    onClose={this.onClose}
                  >
                    <div>
                      <h4>{this.state.selectedPlace.name}</h4>
                    </div>
                  </InfoWindow>
                </Map>
              </aside>

              <p className="py-5 grid-row-start-2 col-span-2 text-center text-sm">
                Plaza Del Obispado, Santa Agnès de Malanyanes
                <br />
                La Roca del Vallès, Barcelona
              </p>
            </article>
          </section>

          {/* Banquete */}
          <section className="mt-32">
            <h1 className="text-center text-xl font-bold text-teal-800">
              Convite
            </h1>
            <h2 className="mt-2 px-1 text-center">
              Tendrá lugar en el
              <br className="sm:hidden" /> Mas de Sant Lleí, un lugar increíble
              donde disfrutaremos de buena comida y la mejor compañía.
              <br className="sm:hidden" />
              Empezará alrededor de las{" "}
              <span className="text-teal-900 font-bold">2 de la tarde</span>.
            </h2>

            <article
              className="grid grid-cols-2 gap-1 mt-3 mx-3 h-64"
              style={{
                gridTemplateRows: "16rem 1fr",
              }}
            >
              <figure>
                <img
                  className="w-full h-full object-cover"
                  src={masDeSantLlei}
                  alt="Santa Agnès de Malanyanes"
                />
              </figure>

              <aside>
                <Map
                  google={this.props.google}
                  style={mapStyles}
                  zoom={12}
                  initialCenter={{ lat: 41.547561, lng: 2.299448 }}
                >
                  <Marker
                    onClick={this.onMarkerClick}
                    name={"Mas de Sant Lleí"}
                  />
                  <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}
                    onClose={this.onClose}
                  >
                    <div>
                      <h4>{this.state.selectedPlace.name}</h4>
                    </div>
                  </InfoWindow>
                </Map>
              </aside>

              <p className="py-5 grid-row-start-2 col-span-2 text-center text-sm">
                Camí de la Casa Alta, s/n
                <br />
                Ctra. Granollers a Masnou, km.10
                <br />
                08410, Barcelona
              </p>
            </article>
          </section>

          <section className="mt-32 sm:mt-48">
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

export default GoogleApiWrapper({
  apiKey: "AIzaSyBdkOJUA6ibeRYJ1m2lT3p5XRlB75ePE7A",
})(Informacion)
