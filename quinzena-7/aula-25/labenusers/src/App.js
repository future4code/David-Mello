import React from 'react'
import './App.css';
import Form from './components/Form/Form.js'
import List from './components/List/List.js'
import axios from 'axios'

export default class App extends React.Component {
  state = {
    page: "form",
    textoBotao: "Ir para a página de lista",
    nomeInput: "",
    emailInput: ""
  };


  onClickPage = () => {
    if ("form" === this.state.page) {
      this.setState({
        page: "list",
        textoBotao:" Voltar"
      })
    } else if ( "list" === this.state.page) {
        this.setState({
          page: "form",
          textoBotao:" Ir para a página de lista"
        })
      }
  }

  onChangeNome = (event) => {
    this.setState({nomeInput: event.target.value})
  }

  onChangeEmail = (event) => {
    this.setState({emailInput: event.target.value})
  }

  onClickSalvar = () => {
    const body = {
      name: this.state.nomeInput,
      email: this.state.emailInput
    }
 

    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",body,{headers : { 
      Authorization : "david-mello-tang"}
     }).then(resposta => {
       console.log(resposta.data)
       alert("Usuário Criado com Sucesso")
     }).catch(error =>{
       console.log(error.mensage)
       alert("Erro:", error.mensage)
     })

     this.setState({nomeInput: "", emailInput: ""})
  }


render () {
 let pagina = this.state.page === "form"? <Form onChangeNome={(e) => this.onChangeNome(e)} onChangeEmail={(e) => this.onChangeEmail(e)} onClickSalvar={this.onClickSalvar}/> : <List/>
  return (
    <div>
      <button onClick={this.onClickPage}>{this.state.textoBotao}</button>
      {pagina}  

    </div>
  );
}
}

