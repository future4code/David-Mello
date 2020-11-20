import axios from 'axios'
import styled from 'styled-components'
import React, { Component } from 'react'

const ErrorMessage = styled.p `
    color: red;
`

export default class NewPlaylistComponent extends Component {
   

    render() {
        return (
            <div>
                <h2>Nova Playlist</h2>
                <ErrorMessage>{this.props.errorMessage !== '' ? this.props.errorMessage : '' }</ErrorMessage>
                <div>
                    <label for={"nome"}>Nome:</label>
                    <input id={"nome"} type="text" value={this.props.inputValue} onChange={this.props.onChangeInput} />
                    <button onClick={this.props.onClickButton}>Criar</button>
                </div>
            </div>
        )
    }
}
