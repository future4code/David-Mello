import React, { Component } from 'react'
import styled from 'styled-components'
import dropDown from '../../img/drop-down-arrow.svg'
import dropUp from '../../img/drop-up-arrow.svg'
import PlaylistDetails from '../PlaylistDetails/PlaylistDetails'

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
    state={
        open: false
    }

onClickCard = () => {
    this.setState({open: !this.state.open})
}
    
    render() {
        return (
            <div>
            <PlaylistDiv onClick={this.onClickCard}>
                <img className={"arrowIcon"} alt={"arrowIcon"} src={this.state.open ? dropUp : dropDown}></img>
            <p>{this.props.playlistName}</p>
            <button onClick={this.props.onClickX}>X</button>
            </PlaylistDiv>
            {this.state.open ? <PlaylistDetails playlistId={this.props.playlistId}></PlaylistDetails> : null}
            </div>
        )
    }
}
