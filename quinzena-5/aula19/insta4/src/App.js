import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import styled from 'styled-components';

const FormularioDiv = styled.div `
  display: flex;
  flex-direction: column;
  margin: 16px;
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
  align-items:center;
`

const InputFormulario = styled.input`
  border: solid 1px black;
  margin: 4px;
`
const BotaoEnviar = styled.button `
  border: solid 1px black;
  color: black;
  background-color: white;
  margin: 4px;
`

class App extends React.Component {
  state = {
      arrayDeInputs: [
          {
          nomeUsuario: 'paulinha',
          fotoUsuario:'https://picsum.photos/50/50?a=1',
          fotoPost:'https://picsum.photos/200/150?a=1'
          },
          {
          nomeUsuario: 'davbio',
          fotoUsuario: 'https://picsum.photos/50/50?a=2',
          fotoPost: 'https://picsum.photos/200/150?a=2'
          },
          {
            nomeUsuario: 'valnicorn',
          fotoUsuario: 'https://picsum.photos/50/50?a=3',
          fotoPost: 'https://picsum.photos/200/150?a=3'
          }
      ],
      valorInputUsuario: "",
      valorInputFotoDePerfil: "",
      valorInputFotoDoPost: ""
  }

  onChangeUsuario = (event) => {
    this.setState({
      valorInputUsuario: event.target.value
    })
  }

  onChangeFotoDePerfil = (event) => {
    this.setState({
      valorInputFotoDePerfil: event.target.value
    })
  }

  onChangeFotoDoPost = (event) => {
    this.setState({
      valorInputFotoDoPost: event.target.value
    })
  }

  onClickBotaoEnviar = () => {
    const novoPost = {
      nomeUsuario: this.state.valorInputUsuario,
      fotoUsuario: this.state.valorInputFotoDePerfil,
      fotoPost: this.state.valorInputFotoDoPost
    };

    const novoArrayDeInputs = [ ...this.state.arrayDeInputs, novoPost ];

    this.setState({
      arrayDeInputs: novoArrayDeInputs,
      valorInputUsuario: "",
      valorInputFotoDePerfil: "",
      valorInputFotoDoPost: "",
    });

    
  }

  render() {
    const listaDePosts = this.state.arrayDeInputs.map(element => {
      return ( <Post
          nomeUsuario={element.nomeUsuario}
          fotoUsuario={element.fotoUsuario}
          fotoPost={element.fotoPost}
        />
      );
    });

    return (
      <div className={'app-container'}>
        {listaDePosts}
        <FormularioDiv>
          <h3><u> Adicione um novo Post!</u></h3>
          
          <InputFormulario 
          placeholder={"Usuário"}
          onChange={this.onChangeUsuario}
          value={this.state.valorInputUsuario}
          ></InputFormulario>
          
          <InputFormulario 
          placeholder={"Foto de Perfil"}
          onChange={this.onChangeFotoDePerfil}
          value={this.state.valorInputFotoDePerfil}
          ></InputFormulario>
          
          <InputFormulario 
          placeholder={"Foto do Post"}
          onChange={this.onChangeFotoDoPost}
          value={this.state.valorInputFotoDoPost}
          ></InputFormulario>
          
          
          <BotaoEnviar onClick={this.onClickBotaoEnviar}>Enviar</BotaoEnviar>
        </FormularioDiv>
      </div>
    );
  }
}

export default App;
