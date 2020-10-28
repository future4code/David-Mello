import React from 'react'
import styled from "styled-components"

const DivMae = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;

`

export default class PerguntaFechada extends React.Component {
  

     listaDeOpcoes = this.props.opcoes.map(elemento => {
        return (
            <option value={elemento}> {elemento} </option>
        )

     });
   
    render() {
        return (
            <DivMae>
                <p>{this.props.pergunta}</p>
                {this.props.mensagemDeErro}
                <select value={this.props.valor} onChange={this.props.onChangeValor}>
                    {this.listaDeOpcoes}
                </select>
            </DivMae>
        )
    }
}
