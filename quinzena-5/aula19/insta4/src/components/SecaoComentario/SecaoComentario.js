import React, {Component} from 'react'
import './SecaoComentario.css'

export class SecaoComentario extends Component {

	render() {
		return <div className={'comment-container'}>
			<input
				className={'input-usuario'}
				placeholder={'Usuario'}
				value={this.props.inputUsuario}
				onChange={this.props.onChangeUsuario}
			/>
			<input
				className={'input-comentario'}
				placeholder={'Comentário'}
				value={this.props.inputComentario}
				onChange={this.props.onChangeComentario}
			/>
			<button onClick={this.props.aoEnviar}>Enviar</button>
		</div>
	}
}
