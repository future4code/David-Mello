import React, { Component } from 'react'
import styled from 'styled-components'

const Card = styled.li `
    padding: 8px;
    margin: 4px;
    border: 1px solid black;
    background: repeating-radial-gradient(white, rgb(255,0,0,0.2) 150px);
    min-width: 150px;
    text-align:center;

`

export default class PokemonCard extends Component {
    render() {
        return (
            <Card>
                <img alt={this.props.nomePokemon} src={this.props.imagemPokemon} />
                <p id={"nomePokemon"}><b>{this.props.nomePokemon}</b></p>
                <p id={"numeroPokemon"}>#{this.props.numeroPokemon}</p>
                {this.props.tipoPokemon}
            </Card>
        )
    }
}
