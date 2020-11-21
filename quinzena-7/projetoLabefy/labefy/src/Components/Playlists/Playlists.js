import axios from 'axios'
import styled from 'styled-components'
import React from 'react'
import PlaylistCard from '../PlaylistCard/PlaylistCard.js'

export default class Playlists extends React.Component {

    state={
        list: this.props.list
    }


    componentDidUpdate() {
        if (this.state.list !== this.props.list) {
            this.setState({list: this.props.list})
        }   
    }


    render() {
        return (
            <div>
                <h2>Playlists</h2>
                {this.state.list.map(element => {
                    return <PlaylistCard
                            playlistName={element.name}
                            playlistId={element.id}
                            key={element.id}
                            onClickX={() => this.props.onClickX(element)}
                            />
                })}
            </div>
        )
    }
}
