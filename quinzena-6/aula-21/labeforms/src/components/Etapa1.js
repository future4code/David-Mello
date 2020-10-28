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
                <h3>ETAPA 1 - DADOS GERAIS</h3>
                <PerguntaAberta
                 pergunta={"1. Qual o seu nome?"}
                 valor={this.props.valorPergunta1}
                 onChangeValor={this.props.onChangePergunta1}
                 mensagemDeErro={this.props.mensagemDeErro1}
                />
                <PerguntaAberta
                 pergunta={"2. Qual sua idade?"}
                 valor={this.props.valorPergunta2}
                 onChangeValor={this.props.onChangePergunta2}
                 mensagemDeErro={this.props.mensagemDeErro2}
                  />
                <PerguntaAberta 
                pergunta={"3. Qual seu e-mail?"}
                valor={this.props.valorPergunta2}
                onChangeValor={this.props.onChangePergunta3}
                mensagemDeErro={this.props.mensagemDeErro3}
                 />
                <PerguntaFechada pergunta={"4. Qual a sua escolaridade? "}
                onChangeValor={this.props.onChangeEscolaridade}
                valorEtapa1={this.props.valorPergunta4}
                 opcoes={this.props.opcoes} />
            </DivMae>
        )
    }
}
