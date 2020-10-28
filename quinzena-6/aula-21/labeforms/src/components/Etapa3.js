import React from 'react'
import styled from "styled-components"
import PerguntaAberta from './PerguntaAberta.js'
import PerguntaFechada from './PerguntaFechada.js'

const DivMae = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;

`

export default class Etapa1 extends React.Component {
    render() {
        return (
            <DivMae>
                <h3>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h3>
                <PerguntaAberta 
                pergunta={"5. Por que você não terminou um curso de graduação?"} 
                valor={this.props.valorPergunta5}
                 onChangeValor={this.props.onChangePergunta5Etapa3}
                 mensagemDeErro={this.props.mensagemDeErro5}
                />
                <PerguntaFechada pergunta={"6. Você fez algum curso complementar?"}
                 opcoes={[
                    "Nenhum",
                    "Curso técnico ",
                    "Curso de inglês"
                  ]} 
                  valor={this.props.valorPergunta6}
                  onChangeValor={this.props.onChangePergunta6Etapa3}
                  />
            </DivMae>
        )
    }
}
