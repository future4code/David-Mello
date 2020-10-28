import React from 'react'
import styled from "styled-components"
import Etapa1 from "./components/Etapa1.js"
import Etapa2 from "./components/Etapa2.js"
import Etapa3 from "./components/Etapa3.js"
import Final from "./components/Final.js"

const DivMae = styled.div `
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
`

const Botao = styled.button `
  margin-top: 16px;
  width: 20%;
` 
const Erro = styled.p `
  color: red;
`

export default class App extends React.Component {
  
  state = {
    etapa: "etapa1",
    escolaridade: "Ensino médio incompleto",
    valoresEtapa1: {pergunta1: "",
            pergunta2: "",
            pergunta3: ""},
    valoresEtapa2: {pergunta5: "",
                    pergunta6: ""},
    valoresEtapa3: {pergunta5: "",
                    pergunta6: "Nenhum"},
    mensagemDeErro: false
  }

  onClickBotao = () => {
    console.log(this.state.escolaridade, this.state.etapa)

    switch (this.state.etapa) {
      case "etapa1": 
        if ( this.state.valoresEtapa1.pergunta1 === "" || this.state.valoresEtapa1.pergunta2 === "" || this.state.valoresEtapa1.pergunta3 === "" ) {
          this.setState({mensagemDeErro: true})
          return alert("Você deve preencher todas as perguntas antes de continuar" ); 
        }
        break;
      case "etapa2": 
        if (this.state.valoresEtapa2.pergunta5 === "" || this.state.valoresEtapa2.pergunta6 === "" ) {
          this.setState({mensagemDeErro: true})
          return alert("Você deve preencher todas as perguntas antes de continuar" );
        }
        break;
      case "etapa3":
        if (this.state.valoresEtapa3.pergunta5 === "" || this.state.valoresEtapa3.pergunta6 === "") {
          this.setState({mensagemDeErro: true})
          return alert("Você deve preencher todas as perguntas antes de continuar" );
        }
        break;
      default: 
      return alert("erro");

    }

    if ( this.state.etapa === "etapa2" || this.state.etapa === "etapa3") {
      this.setState({ etapa: "final"})
     } else if (this.state.escolaridade === "Ensino superior completo" || this.state.escolaridade === "Ensino superior incompleto") {
      this.setState({ etapa: "etapa2"});
    } else if (this.state.escolaridade === "Ensino médio completo" || this.state.escolaridade ===  "Ensino médio incompleto") {
      this.setState({ etapa: "etapa3"});
    }
    console.log(this.state.escolaridade, this.state.etapa)
  }

  onChangeEscolaridade = (event) => {
  this.setState({ escolaridade: event.target.value})

  }

  onChangePergunta1 = (event) => {
    let novoObjeto = {...this.state.valoresEtapa1, pergunta1: event.target.value }
    this.setState({ valoresEtapa1: novoObjeto})
    }

  onChangePergunta2 = (event) => {
    let novoObjeto = {...this.state.valoresEtapa1, pergunta2: event.target.value }      
    this.setState({ valoresEtapa1: novoObjeto})
    }

  onChangePergunta3 = (event) => {
    let novoObjeto = {...this.state.valoresEtapa1, pergunta3: event.target.value }
    this.setState({ valoresEtapa1: novoObjeto})
    }

  onChangePergunta5Etapa2 = (event) => {
    let novoObjeto = {...this.state.valoresEtapa2, pergunta5: event.target.value }
    this.setState({ valoresEtapa2: novoObjeto})
    }

  onChangePergunta6Etapa2 = (event) => {
    let novoObjeto = {...this.state.valoresEtapa2, pergunta6: event.target.value }      
    this.setState({ valoresEtapa2: novoObjeto})
    }
    
  onChangePergunta5Etapa3 = (event) => {
    let novoObjeto = {...this.state.valoresEtapa3, pergunta5: event.target.value }
    this.setState({ valoresEtapa3: novoObjeto})
    }

  onChangePergunta6Etapa3 = (event) => {
    let novoObjeto = {...this.state.valoresEtapa3, pergunta6: event.target.value }
    this.setState({ valoresEtapa3: novoObjeto})
    }

    


  render() {
   
    const mensagemDeErro = (<Erro>Por favor preencha esta pergunta.</Erro>)

    const telaAtual = () => {
      switch (this.state.etapa) {
        case "etapa1":
          return <Etapa1 
                  valorPergunta4={this.state.escolaridade}
                  onChangeEscolaridade={this.onChangeEscolaridade}
                  opcoes={[
                    "Ensino médio incompleto",
                    "Ensino médio completo",
                    "Ensino superior incompleto",
                    "Ensino superior completo"
                  ]}
                  mensagemDeErro1={this.state.valoresEtapa1.pergunta1 === "" && this.state.mensagemDeErro === true && mensagemDeErro}
                  mensagemDeErro2={this.state.valoresEtapa1.pergunta2 === "" && this.state.mensagemDeErro === true && mensagemDeErro}
                  mensagemDeErro3={this.state.valoresEtapa1.pergunta3 === "" && this.state.mensagemDeErro === true && mensagemDeErro}
                  onChangePergunta1={this.onChangePergunta1}
                  onChangePergunta2={this.onChangePergunta2}
                  onChangePergunta3={this.onChangePergunta3}                  
                  />;
        case "etapa2":
          return <Etapa2
                  mensagemDeErro5={this.state.valoresEtapa2.pergunta5 === "" && this.state.mensagemDeErro === true && mensagemDeErro}
                  mensagemDeErro6={this.state.valoresEtapa2.pergunta6 === "" && this.state.mensagemDeErro === true && mensagemDeErro}
                  onChangePergunta5Etapa2={this.onChangePergunta5Etapa2}
                  onChangePergunta6Etapa2={this.onChangePergunta6Etapa2}
                />;
        case "etapa3": 
          return <Etapa3
                  mensagemDeErro5={this.state.valoresEtapa3.pergunta5 === "" && this.state.mensagemDeErro === true && mensagemDeErro}
                  onChangePergunta5Etapa3={this.onChangePergunta5Etapa3}
                  onChangePergunta6Etapa3={this.onChangePergunta6Etapa3}
                />;
        case "final":
          return <Final />; 
        default:
          return <div>Erro! Página não encontrada</div>;
        }
      } 

    const renderBotao = this.state.etapa !== "final" ? (<Botao onClick={this.onClickBotao}>Próxima etapa</Botao>) : null;

    return (
      <DivMae>
        {telaAtual()}
        {renderBotao}
      </DivMae>
    )
  }
}

