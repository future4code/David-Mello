import axios from 'axios'
import styled from 'styled-components'
import React from 'react'
import PlaylistCard from '../PlaylistCard/PlaylistCard.js'

export default class Playlists extends React.Component {

    state={
        list: this.props.list,
        teste: this.props.teste
    }

    onClickX = async (element) => {
        try {
            const response = await axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${element.id}`, {
                headers : {
                    Authorization: "david-mello-tang"
                }
            })
            console.log(response.data)
            this.updatePlaylists(element.id)
        } catch(error) {
            console.log(error.response.data)
        }
    }

    updatePlaylists = (id) => {
      const updatedList = this.state.list.filter(element => {
            return element.id !== id ? element : null
        })

        this.setState({list: updatedList})
        console.log(updatedList)
    }

    componentDidUpdate() {
        if (this.state.list !== this.props.list) {
            this.setState({list: this.props.list})
        }   
    }


    render() {
        console.log(this.state.list, this.props.list, this.state.teste)   
        return (
            <div>
                <h2>Playlists</h2>
                {this.state.list.map(element => {
                    return <PlaylistCard
                            playlistName={element.name}
                            playlistId={element.id}
                            key={element.id}
                            onClickX={() => this.onClickX(element)}
                            />
                })}
            </div>
        )
    }
}
