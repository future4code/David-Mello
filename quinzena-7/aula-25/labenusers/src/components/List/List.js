import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const Usuario = styled.li `
    border-bottom: 1px black dashed;
    padding:4px 0;
    list-style:none;
    display:flex;
    align-items: center;
`

const DeleteButton = styled.span `
    margin: 0 8px;
    color: red;

`
export default class List extends React.Component {
   state = {
    usersList: []
   }
   componentDidMount() {
    const getAllUsers = axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",{headers: {
       authorization: "david-mello-tang"
     }})
     
     getAllUsers.then(resposta => {
       this.setState({usersList: resposta.data})
     }).catch(error => { 
       console.log(error.message)
     })
   }

   componentDidUpdate() {
    const getAllUsers = axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",{headers: {
        authorization: "david-mello-tang"
      }})
      
      getAllUsers.then(resposta => {
        this.setState({usersList: resposta.data})
      }).catch(error => { 
        console.log(error.message)
      })
   }

   onClickDelete = (element) => {
       const deleteUser = axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${element.id}`, {headers: {
           authorization: "david-mello-tang"
       }})

        deleteUser.then( resposta => {
            alert(`Usuario "${element.name}" deletado com sucesso`)
        }).catch(error => {
            alert("Erro")
            console.log("teste", error.message)
        
   })
   }
 
    render() {

        let listaDeUsuarios = this.state.usersList.map(element => {
           return <Usuario key={element.id}><p>{element.name}</p><DeleteButton onClick={() => this.onClickDelete(element)}>X</DeleteButton></Usuario>
        })

        return (
            <div>
                <h1>Usuários Cadastrados:</h1>
                <ul>{listaDeUsuarios}</ul>
            </div>
        )
    }
}
