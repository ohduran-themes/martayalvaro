import React, { Component } from "react"
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react"

const mapStyles = {
  width: "50%",
  height: "16rem",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: "1rem",
}

class InformacionSection extends Component {
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
      <section className={this.props.className}>
        <div className="w-1/2 mx-auto">{this.props.children}</div>

        <article className="mt-3">
          <figure className="mx-auto w-1/2">
            <img
              className="w-full h-full object-cover"
              src={this.props.src}
              alt="Santa Agnès de Malanyanes"
            />
          </figure>

          <aside className="">
            <Map
              google={this.props.google}
              className="google-map"
              style={mapStyles}
              zoom={12}
              initialCenter={this.props.initialCenter}
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

          <p
            className="py-5 grid-row-start-2 col-span-2 text-center text-sm"
            style={{
              marginTop: "18rem",
            }}
          >
            {this.props.direccion()}
          </p>
        </article>
      </section>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBdkOJUA6ibeRYJ1m2lT3p5XRlB75ePE7A",
})(InformacionSection)
