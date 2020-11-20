import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const PlaylistDiv = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:8px 24px;

`

export default class PlaylistCard extends Component {
    render() {
        return (
            <PlaylistDiv>
            <p>{this.props.playlistName}</p>
            <button onClick={this.props.onClickX}>X</button>
            </PlaylistDiv>
        )
    }
}
