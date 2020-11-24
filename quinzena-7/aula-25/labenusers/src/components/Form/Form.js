import React from 'react'
import styled from 'styled-components'

const Content = styled.div `
display: flex;
flex-direction: column;
align-items:center;
width: 500px;
`

export default class List extends React.Component {
    render() {
        return (
            <div>
                <Content>
                    <label for={"nome"}>Nome:</label>
                    <input id={"nome"}
                    onChange={(e) => this.props.onChangeNome(e)}/>
                    <label for={"email"}>E-mail:</label>
                    <input id={"email"}
                    onChange={(e) => this.props.onChangeEmail(e)}/>
                    <button onClick={this.props.onClickSalvar}>SALVAR</button>
                </Content>
            </div>
        )
    }
}
