import React from 'react'
import './Post.css'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import iconeMarcacaoBranco from '../../img/bookmark_border-24px.svg'
import iconeMarcacaoPreto from '../../img/bookmark-24px.svg'
import iconeCompartilhar from '../../img/share-24px.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import {SecaoCompartilhar } from '../SecaoCompartilhar/SecaoCompartilhar'

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    marcado: false,
    compartilhando: false,
    valorCompartilhamento: ""
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
    this.setState({
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
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
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

    return <div className={'post-container'}>
      <div className={'post-header'}>
        <img className={'user-photo'} src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </div>

      <img className={'post-photo'} src={this.props.fotoPost} alt={'Imagem do post'}/>

      <div className={'post-footer'}>
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
      </div>
      {componenteComentario}
      {componenteCompartilhar}
    </div>
  }
}

export default Post