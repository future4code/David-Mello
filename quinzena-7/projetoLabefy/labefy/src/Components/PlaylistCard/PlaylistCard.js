import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import dropDown from '../../img/drop-down-arrow.svg'
import dropUp from '../../img/drop-up-arrow.svg'

const PlaylistDiv = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:8px 24px;
    border: 1px solid grey;

    .arrowIcon {
        max-width: 16px;
    }

`

export default class PlaylistCard extends Component {

    
    render() {
        return (
            <PlaylistDiv>
                {/* <img className={"arrowIcon"} src={this.state.open ? dropUp : dropDown}></img> */}
            <p>{this.props.playlistName}</p>
            <button onClick={this.props.onClickX}>X</button>
            </PlaylistDiv>
        )
    }
}
