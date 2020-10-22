import React, {Component} from 'react'
import './SecaoCompartilhar.css'
import iconeInstagram from '../../img/002-instagram.svg'
import iconeFacebook from '../../img/001-facebook.svg'
import iconeTwitter from '../../img/003-twitter.svg'


export class SecaoCompartilhar extends Component {

    render() {
        return <div className={'share-container'}>
           <div>
            <img onClick={this.props.onClickInstagram} src={iconeInstagram} alt="" />
            <img onClick={this.props.onClickFacebook} src={iconeFacebook} alt="" />
            <img onClick={this.props.onClickTwitter} src={iconeTwitter} alt=""/>
           </div>
           <input
				className={'input-compartilhar'}
				placeholder={'Comentário'}
				value={this.props.valorCompartilhamento}
				onChange={this.props.onChangeCompartilhamento}
			/>
        </div>
    }
}