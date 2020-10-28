import React from 'react'
import styled from "styled-components"

const DivMae = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;

`

export default class Etapa1 extends React.Component {
    render() {
        return (
            <DivMae>
                <h3>O FORMULÁRIO ACABOU</h3>
                <p>Muito obrigado por participar! Entraremos em contato!</p>
            </DivMae>
        )
    }
}
