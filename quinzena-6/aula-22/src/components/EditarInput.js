import React from 'react'
import styled from 'styled-components'

const EditarDiv = styled.div `
    display: flex;
    flex-direction: column;
    margin: 4px;
    border: 1px solid lightgray;
`

export default class EditarInput extends React.Component {
    render() {
        return (
            <EditarDiv>
                <input value={this.props.valorEditar} onChange={this.props.onChangeEditar} />
                <button onClick={this.props.onClickEnviar}>Enviar</button>
            </EditarDiv>
        )
    }
}
