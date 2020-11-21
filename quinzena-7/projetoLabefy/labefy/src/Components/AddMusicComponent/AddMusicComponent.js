import React, { Component } from 'react'
import styled from 'styled-components'

const FormDiv = styled.div `

    display:flex;
    justify-content:space-around;
    margin: 8px 0;
`

export default class AddMusicComponent extends Component {
    render() {
        return (
            <FormDiv>
                <div>
                    <label for={"title"}>Título:</label>
                    <input type="text" id={"title"} />
                </div>
                <div>
                    <label for={"artist"}>Artista:</label>
                    <input type="text" id={"artist"} />
                </div>
                <div>
                    <label for={"audio"}>Link para o Arquivo de Áudio:</label>
                    <input type="text" id={"audio"} />
                </div>
                <div><button>+</button></div>
            </FormDiv>
        )
    }
}
