import axios from 'axios'
import styled from 'styled-components'
import React, { Component } from 'react'
import AddMusicComponent from '../AddMusicComponent/AddMusicComponent'

const MusicDiv = styled.div ` 
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 100px;
    @media(max-width: 425px) {
    
        padding: 0;
        width: 90%;
    
   }

   audio {
       width: 70%;
   }

   .artist{
       width: 15%;
       text-align: end;
   }

   .trackName{
       width:15%;
   }


`
const AddMusicButton = styled.button `
    margin: 16px;
`

const EmptyPlaylist = styled.p `
    font-weight: bold;
    text-align:center;
`


export default class PlaylistDetails extends Component {
    state = {
        tracks: [],
        add: false
    }
    componentDidMount() {
        this.getPlaylistTracks(this.props.playlistId)
    }

    getPlaylistTracks = async(id) => {
        try { 
            const response = await axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`, {
                headers: {
                    Authorization: "david-mello-tang"
                }
            })
            this.setState({tracks: response.data.result.tracks})
        } catch(error){
            console.log(error.response.data)
        }

    }

    onClickAdd = () => {
        this.setState({add: !this.state.add})
    }

    render() {
        return (
            <div>
                <h3>Músicas:</h3>
                <MusicDiv>
                    <h4>Título</h4>
                    <span/>
                    <h4 className={"artist"}>Artista</h4>
                </MusicDiv>
                {!this.state.tracks[0]? <EmptyPlaylist>Adicione uma música na sua playlist para vê-la aqui!</EmptyPlaylist> :
                this.state.tracks.map(element => {
                    return  (<MusicDiv key={element.id}>
                                <p className={"trackName"}>{element.name}</p>
                    <audio controls><source src={element.url}/></audio>
                                <p className={"artist"}>{element.artist}</p>
                            </MusicDiv>)
                })}
                <AddMusicButton onClick={this.onClickAdd}>Adicionar Música</AddMusicButton>
                {this.state.add? <AddMusicComponent
                playlistId={this.props.playlistId}
                getPlaylistTracks={this.getPlaylistTracks}
                 />: null}
                
            </div>
        )
    }
}
