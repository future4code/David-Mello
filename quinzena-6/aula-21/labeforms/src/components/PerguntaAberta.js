import React from 'react'
import styled from "styled-components"

const DivMae = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;

`


export default class PerguntaAberta extends React.Component {
    render() {
        return (
            <DivMae>
                <p>{this.props.pergunta}</p>
                {this.props.mensagemDeErro}
                <input type="text" value={this.props.valor} onChange={this.props.onChangeValor} />
            </DivMae>
        )
    }
}
