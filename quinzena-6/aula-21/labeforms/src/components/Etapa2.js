import React from 'react'
import styled from "styled-components"
import PerguntaAberta from './PerguntaAberta.js'

const DivMae = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;

`

export default class Etapa2 extends React.Component {
    render() {
        return (
            <DivMae>
                <h3>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h3>
                <PerguntaAberta
                 pergunta={"5. Qual curso?"}
                 valor={this.props.valorPergunta5}
                 onChangeValor={this.props.onChangePergunta5Etapa2}
                 mensagemDeErro={this.props.mensagemDeErro5}
                 />
                <PerguntaAberta 
                pergunta={"6. Qual a unidade de ensino?"}
                valor={this.props.valorPergunta6}
                 onChangeValor={this.props.onChangePergunta6Etapa2}
                 mensagemDeErro={this.props.mensagemDeErro6}
                />
            </DivMae>
        )
    }
}
