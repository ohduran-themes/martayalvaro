import React from "react"
import axios from 'axios'

import "../styles/global.css"
import DefaultLayout from "../layouts/Default"

export class PlayList extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      songs: []
    }
  }



  componentDidMount() {
    axios.get('http://localhost:5000/martayalvaro-5eba0/us-central1/getSongs')
    .then(res => {
      console.log('pasa por el primer then')
      return res.data
    })
    .then(data => {
      console.log('pasa por el segundo then')
      console.log(data)
      this.setState({ songs: data })
    })
    .catch(error =>{
      console.log('pasa por el error')
      console.log(error)
    })
  }

  render(){

    return(
      <DefaultLayout>
        <main className="mt-3">
          <section className="p-3 text-center">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-teal-800">
              Play List
            </h1>
            <p className="mt-2 text-sm sm:text-base">¡Ayúdanos a configurar la lista de canciones que sonarán en nuestra boda!</p>
          </section>

          <section className="mt-3 p-5 bg-gray-200 w-11/12 mx-auto grid grid-cols-2 sm:grid-cols-3 gap-3 rounded-lg shadow-lg font-semibold" style={{ justifyItems: 'center'}}>
            {this.state.songs.map(song=>{
              return <h3 className="text-center text-xs sm:text-sm">{song.title}<br className="md:hidden" /><span className="hidden md:inline"> - </span>{song.artist}</h3>
            })}
          </section>

          <section className="mt-5 p-5 bg-gray-200 w-3/4 md:bg-green-600 mx-auto rounded-lg shadow-lg font-semibold text-center">
            <h2 className="text-sm sm:text-base">Añade la que tú quieras</h2>
            <form className="mt-2 grid text-xs sm:text-sm" style={{
              gridTemplateRows: 'min-content min-content 1fr'
            }}>
              <input className="text-center rounded-lg h-5 sm:h-6 md:h-8 w-6/12 mx-auto mt-2 md:mt-3" type="text" name="title" id="title" placeholder="Título" required/>
              <input className="text-center rounded-lg h-5 sm:h-6 md:h-8 w-6/12 mx-auto mt-2 md:mt-3" type="text" name="artist" id="artist" placeholder="Artista" required/>

              <button id="submit" className="mt-6 mb-3 h-8 w-4/12 mx-auto submit bg-teal-800 rounded-lg shadow-lg text-white font-semibold">Añadir</button>
            </form>
          </section>
        </main>

      </DefaultLayout>
    )
  }
}

export default PlayList
