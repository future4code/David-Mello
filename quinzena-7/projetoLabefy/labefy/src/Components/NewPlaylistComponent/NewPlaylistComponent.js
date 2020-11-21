import styled from 'styled-components'
import React, { Component } from 'react'

const ErrorMessage = styled.p `
    color: red;
`
const NewPlaylistDiv = styled.div `
    text-align: center;
    
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    input {
        margin: 8px;
    }

    button {
        width: 50%
    }
`

export default class NewPlaylistComponent extends Component {
   

    render() {
        return (
            <NewPlaylistDiv>
                <h2>Nova Playlist</h2>
                <ErrorMessage>{this.props.errorMessage !== '' ? this.props.errorMessage : '' }</ErrorMessage>
                <div>
                    <label htmlFor={"nome"}>Nome:</label>
                    <input id={"nome"} type="text" value={this.props.inputValue} onChange={this.props.onChangeInput} />
                    <button onClick={this.props.onClickButton}>Criar</button>
                </div>
            </NewPlaylistDiv>
        )
    }
}
