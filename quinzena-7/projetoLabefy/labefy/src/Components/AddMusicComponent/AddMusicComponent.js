import axios from 'axios'
import React, { Component } from 'react'
import styled from 'styled-components'

const FormDiv = styled.div `

    display:flex;
    justify-content:space-around;
    margin: 8px 0;

    @media(max-width: 425px) {
        flex-direction: column;
        div{
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        input{
            margin: 16px 0;
        }
    }
`



export default class AddMusicComponent extends Component {
    state={
        title:"",
        artist:"",
        audio:""
    }

    onChangeTitle = (event) => {
        this.setState({title: event.target.value})
        
    }

    onChangeArtist = (event) => {
        this.setState({artist: event.target.value})
        
    }

    onChangeAudio = (event) => {
        this.setState({audio: event.target.value})
        
    }

    onClickButton = () => {
        const body = {
            "name": this.state.title, 
            "artist": this.state.artist,
            "url": this.state.audio
        }
        this.addTrackToPlaylist(body)

    }

    addTrackToPlaylist = async (body) => {
        try {
            const response = await axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlistId}/tracks`,body, {
                headers : {
                    Authorization: "david-mello-tang"
                }
            })
            console.log(response.data)
            this.setState({
                title:"",
                artist:"",
                audio:""
            })
            this.props.getPlaylistTracks(this.props.playlistId)
        } catch(error){ 
            console.log(error.response)
        }
    }

    render() {
        return (
            <FormDiv>
                <div>
                    <label htmlFor={`title${this.props.playlistId}`}>Título:</label>
                    <input type="text" id={`title${this.props.playlistId}`} onChange={this.onChangeTitle} value={this.state.title}/>
                </div>
                <div>
                    <label htmlFor={`artist${this.props.playlistId}`}>Artista:</label>
                    <input type="text" id={`artist${this.props.playlistId}`} onChange={this.onChangeArtist} value={this.state.artist}/>
                </div>
                <div>
                    <label htmlFor={`audio${this.props.playlistId}`}>Link para o Arquivo de Áudio:</label>
                    <input type="text" id={`audio${this.props.playlistId}`} onChange={this.onChangeAudio} value={this.state.audio}/>
                </div>
                <div><button onClick={this.onClickButton}>+</button></div>
            </FormDiv>
        )
    }
}
