import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import NewPlaylistComponent from './Components/NewPlaylistComponent/NewPlaylistComponent'
import Playlists from './Components/Playlists/Playlists.js'

const AppDiv = styled.div ` 
  display:flex;
  flex-direction:column;
  align-items: center;
  width: 100%;
`

export default class App extends Component {
 
  state = {
    inputValue: '',
    errorMessage: '',
    list: [],
    newPlaylistComponent: false
  }

  componentDidMount() {
    this.getAllPlaylists()
  }

  onChangeInput = (event) => {
      this.setState({inputValue: event.target.value,
          errorMessage: ''})
  }

  onClickButton = () =>{
      this.createPlaylist(this.state.inputValue)
      this.setState({inputValue: ''})
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
              this.getAllPlaylists()
      }  catch(error) {
          console.log(error.response.data.message)
          this.setState({errorMessage: error.response.data.message})
      }
  }

  onClickRemovePlaylist = async (element) => {
    console.log(element)
    try {
        const response = await axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${element.id}`, {
            headers : {
                Authorization: "david-mello-tang"
            }
        })
    } catch(error) {
        console.log(error.response.data)
    }

    this.getAllPlaylists()
}

  getAllPlaylists = async () =>  {
    try { 
        const response = await axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', {
            headers : {
            Authorization: "david-mello-tang"
            }
        })
        this.setState({list: response.data.result.list})
    } catch(error) {
        console.log(error.reponse)
    }
  }

  onClickOpenNewPlaylist = () => {
    this.setState({newPlaylistComponent: !this.state.newPlaylistComponent})
  }

  render() {
    return (
      <AppDiv>
        <header><h1>Labefy</h1> <button onClick={this.onClickOpenNewPlaylist}>Nova Playlist</button></header>
        { this.state.newPlaylistComponent? <NewPlaylistComponent className={"newPlaylistComponent"}
          onClickButton={this.onClickButton}
          errorMessage={this.state.errorMessage}
          onChangeInput={this.onChangeInput}
          inputValue={this.state.inputValue}/> : ""}
        <div>
          <Playlists
          list={this.state.list}
          onClickX={(element) => this.onClickRemovePlaylist(element)}
          />
        </div>
      </AppDiv>
    )
  }
}
