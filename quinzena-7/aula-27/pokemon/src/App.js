import React from 'react'
import axios from "axios"
import PokemonCard from "./Components/PokemonCard.js"
import Lista from './StyledApp.js'




export default class App extends React.Component {
  state = {
    listaPokemon: [],
    arrayDados: [],
    valorBusca: ""
  }
  
  componentDidMount() {
    this.pegarListaPokemon()
  
  }
  
  pegarListaPokemon = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=151").then(response => {
      this.setState({ listaPokemon: response.data.results})  
      this.state.listaPokemon.map(element => { this.pegarDadosPokemon(element)})
    }).catch(error => {
      console.log(error.message)
    })
  }
  
  pegarDadosPokemon = (element) => {
  
   
     
      axios.get(`https://pokeapi.co/api/v2/pokemon/${element.name}`).then(response => {
        
        let novoPokemon = {id: response.data.id,
            nome: response.data.forms[0].name,
            imagem: response.data.sprites.front_default,
            tipo: [response.data.types[0].type.name,  response.data.types[1] ? response.data.types[1].type.name : ""  ]
          }  

        let newArray = [...this.state.arrayDados, novoPokemon].sort((a, b) => { return a.id - b.id})
        this.setState({arrayDados: newArray})
        
        }).catch(error => {
          console.log(error.message)
        })
  }

  onChangeBusca = (e) => {
    this.setState({valorBusca: e.target.value})
   
  }

  

  render() {
    const listaFiltrada = this.state.arrayDados.filter( element => {
      if (element.nome.includes(this.state.valorBusca)) {
        return element
      } 
    })

    return (
      <div>

        <header><h1>Pokedex</h1></header>
        <input placeholder={'Digite nome do Pokémon'} onChange={(e) => this.onChangeBusca(e)}/>
        <Lista>{listaFiltrada.map(element => {

                return <PokemonCard 
                key={element.nome}
                nomePokemon={element.nome}
                imagemPokemon={element.imagem}
                numeroPokemon={element.id}
                tipoPokemon={element.tipo.map(tipo => {
                  return <div key={element.name + tipo} className={tipo}>{tipo}</div>
                })}
                />
                })}</Lista>
      </div>
    )
  }
}

