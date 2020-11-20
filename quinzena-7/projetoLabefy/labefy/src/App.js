import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import NewPlaylistComponent from './Components/NewPlaylistComponent/NewPlaylistComponent'
import Playlists from './Components/Playlists/Playlists.js'

export default class App extends Component {
 
  state = {
    inputValue: '',
    errorMessage: '',
    list: []
  }

  componentDidMount() {
    this.getAllPlaylists()
  }

  onChangeInput = (event) => {
      this.setState({inputValue: event.target.value,
          errorMessage: ''})
      console.log(this.state.inputValue)
  }

  onClickButton = () =>{
      this.createPlaylist(this.state.inputValue)
      this.setState({inputValue: ''})
      this.getAllPlaylists()
  }

  createPlaylist = async (playlistName) => {
    const body = {
        "name": playlistName
    }

      try { 
              const response = await axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', body, {
                  headers : {
                      Authorization: "david-mello-tang"
                  }
              }) 

              console.log(response.data)
      }  catch(error) {
          console.log(error.response.data.message)
          this.setState({errorMessage: error.response.data.message})
      }
  }

  getAllPlaylists = async () =>  {
    try { 
        const response = await axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', {
            headers : {
            Authorization: "david-mello-tang"
            }
        })
        console.log(response.data)

        this.setState({list: response.data.result.list})
    } catch(error) {
        console.log(error.reponse)
    }
  }

  render() {
    return (
      <div>
        <NewPlaylistComponent 
          onClickButton={this.onClickButton}
          errorMessage={this.state.errorMessage}
          onChangeInput={this.onChangeInput}
          inputValue={this.state.inputValue}/>
        <div>
          <Playlists 
          list={this.state.list}
          teste={"teste"}
          />
        </div>
      </div>
    )
  }
}
