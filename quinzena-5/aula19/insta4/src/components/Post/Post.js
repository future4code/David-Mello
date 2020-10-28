import React from 'react'
import styled from 'styled-components'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import iconeMarcacaoBranco from '../../img/bookmark_border-24px.svg'
import iconeMarcacaoPreto from '../../img/bookmark-24px.svg'
import iconeCompartilhar from '../../img/share-24px.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import {SecaoCompartilhar } from '../SecaoCompartilhar/SecaoCompartilhar'

const PostContainer = styled.div `
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`
const PostHeader = styled.div `
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`
const PostFooter = styled.div `
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img `
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`
const PostPhoto = styled.img `
  width: 100%;
`
const ComentarioContainer = styled.div `
  display:flex;
  flex-direction:column;
  border-top: 1px solid grey;
  padding:1px;
  justify-content:stretch;

`
const Comentario = styled.p `
  margin: 0.5px 1px;
  display: flex;
`


class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    marcado: false,
    compartilhando: false,
    valorCompartilhamento: "",
    arrayDeComentarios: [],
    inputComentario: "",
		inputUsuario: ""
  }

  onClickCurtida = () => {
    console.log('Curtiu!');
    if (this.state.curtido === false) {
      this.setState({ curtido: true,
      numeroCurtidas: this.state.numeroCurtidas +1
     })
    } else {
      this.setState({ curtido: false,
        numeroCurtidas: this.state.numeroCurtidas -1
      })
    }
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    const novoComentario = {
      comentario: this.state.inputComentario,
      usuario: this.state.inputUsuario
    }
    
    const novoArrayDeComentarios = [...this.state.arrayDeComentarios, novoComentario];

    this.setState({
      arrayDeComentarios: novoArrayDeComentarios,
      inputComentario: "",
		  inputUsuario: "",
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1,
    })
  }

  onClickMarcacao = () => {
    console.log("Marcado!");
    this.setState({
      marcado: !this.state.marcado
    })
  }

  onClickCompartilhar = () => {
    this.setState({
      compartilhando: !this.state.compartilhando
    })
  }

  onClickInstagram = () => {
    console.log(`Post compartilhado no Instagram com a mensagem: ${this.state.valorCompartilhamento}`);
    this.setState({
      valorCompartilhamento: ""
    })
  }

  onClickFacebook = () => {
    console.log(`Post compartilhado no Facebook com a mensagem: ${this.state.valorCompartilhamento}`);
    this.setState({
      valorCompartilhamento: ""
    })
  }

  onClickTwitter = () => {
    console.log(`Post compartilhado no Twitter com a mensagem: ${this.state.valorCompartilhamento}`);
    this.setState({
      valorCompartilhamento: ""
    })
  }

  onChangeCompartilhamento = (event) => {
    this.setState({
        valorCompartilhamento: event.target.value
    })
  }

  onChangeComentario = (event) => {
    this.setState({ inputComentario: event.target.value});
  }

  onChangeUsuario = (event) => {
    this.setState({ inputUsuario: event.target.value});
  }

  render() {
    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let iconeMarcacao

    if(this.state.marcado) {
      iconeMarcacao = iconeMarcacaoPreto
    } else {
      iconeMarcacao = iconeMarcacaoBranco
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario 
      aoEnviar={this.aoEnviarComentario}
      onChangeUsuario={this.onChangeUsuario}
      onChangeComentario={this.onChangeComentario}
      inputUsuario={this.state.inputUsuario}
      inputComentario={this.state.inputComentario}
      />
    }
    
    let componenteCompartilhar
    
    if(this.state.compartilhando) {
      componenteCompartilhar = <SecaoCompartilhar  
        onClickFacebook={this.onClickFacebook}
        onClickInstagram={ this.onClickInstagram}
        onClickTwitter={this.onClickTwitter}
        valorCompartilhamento={this.state.valorCompartilhamento}
        onChangeCompartilhamento={this.onChangeCompartilhamento}
      />
    }

    const listaDeComentarios = this.state.arrayDeComentarios.map((element, index) => {
      return (
        <Comentario key={index}><b>{element.usuario}: </b> {element.comentario}</Comentario>
      );
    });
    
    let componenteComentarioContainer

    if(this.state.numeroComentarios > 0) {
      componenteComentarioContainer = <ComentarioContainer> 
      <b>Comentários:</b> 
      {listaDeComentarios}
      </ComentarioContainer>
    }

    return <PostContainer>
      <PostHeader>
        <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />

        <IconeComContador 
        icone={iconeMarcacao}
        onClickIcone={this.onClickMarcacao}
        />

        <IconeComContador 
        icone={iconeCompartilhar}
        onClickIcone={this.onClickCompartilhar}
        />
      </PostFooter>
      {componenteComentario}
      {componenteCompartilhar}
      {componenteComentarioContainer}
    </PostContainer>
  }
}

export default Post