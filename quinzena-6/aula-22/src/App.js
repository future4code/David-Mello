import React from 'react'
import styled from 'styled-components'
import './styles.css'
import EditarInput from './components/EditarInput.js'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
  display:flex;
  flex-direction: column;
  align-items:center;
  justify-content: space-evenly;
  margin: 4px;
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`
const VisualizadorSeparado = styled.div `
  display:flex;
  justify-content:space-evenly;
  width: 100%;
`

class App extends React.Component {
    state = {
      tarefas: [],
      inputValue: '',
      filtro: '',
      inputValueEditar: ''
    }

  componentDidUpdate() {
    const arrayDeTarefas = [...this.state.tarefas];

    localStorage.setItem("tarefas", JSON.stringify(arrayDeTarefas))
  };

  componentDidMount() {
    const tarefasString = localStorage.getItem("tarefas");
    const tarefasArray = JSON.parse(tarefasString)

    this.setState({tarefas: tarefasArray})
  };

  onChangeInput = (event) => {
    this.setState({ inputValue: event.target.value})
  }

  criaTarefa = () => {
   const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false,
      editar: false
    };

    const copiaDoEstado = [...this.state.tarefas, novaTarefa]
    this.setState({ tarefas: copiaDoEstado,
                    inputValue: ""})
  }

  selectTarefa = (id) => {
    this.state.tarefas.map(tarefa => {
      if (id === tarefa.id) {
       tarefa.completa = true;
      }
      this.setState({tarefas: this.state.tarefas})
    })
  }

  onChangeFilter = (event) => {
      this.setState({filtro: event.target.value});
  }

  removerTarefa = (id) => {
    this.state.tarefas.map((tarefa, index) => {
      if (tarefa.id === id) {
          this.state.tarefas.splice(index,1);
      }
    });

    this.setState({tarefas: this.state.tarefas})
  }

  editarTarefa = (id) => {
    this.state.tarefas.map(tarefa => {
      if (id === tarefa.id) {
       tarefa.editar = !tarefa.editar;
      }
      this.setState({tarefas: this.state.tarefas})
    })
  }

  onChangeEditar = (event) => {
    this.setState({ inputValueEditar: event.target.value})
  }

  onClickEnviar = (id) => {
    console.log(id)
    this.state.tarefas.map(tarefa => {
      if (this.state.inputValueEditar !== "" && id === tarefa.id) {
       tarefa.texto = this.state.inputValueEditar;
       tarefa.editar = false;
      } else if (this.state.inputValueEditar === "" && id === tarefa.id) {
        alert("Por favor digite algo")
      }

      this.setState({tarefas: this.state.tarefas,
                      inputValueEditar: ''
                    })
    })

  }

  limparTarefas = () => {
    this.setState({tarefas: []})
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    const listaPendentes = this.state.tarefas.filter(tarefa => {
      switch (tarefa.completa) {
        case false:
          return tarefa
        case true:
            return null
        default:
          return true
      }
    })

    const listaCompletas = this.state.tarefas.filter(tarefa => {
      switch (tarefa.completa) {
        case true:
          return tarefa
        case false:
            return null
        default:
          return true
      }
    })

    

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <button onClick={this.limparTarefas}>Limpar Tarefas</button>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <div>
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
              {tarefa.editar === true ? <EditarInput onChangeEditar={this.onChangeEditar} onClickEnviar={() => this.onClickEnviar(tarefa.id)}/> : null}
              <button onClick={() => this.removerTarefa(tarefa.id)}>Remover</button>
              <button onClick={() => this.editarTarefa(tarefa.id)}>Editar Tarefa</button>
              </div>
            )
          })}
        </TarefaList>
        <VisualizadorSeparado>
        <div>
          <h3>Pendentes</h3>
            {listaPendentes.map(tarefa => {
              return (
                <div>
                <Tarefa
                  completa={tarefa.completa}
                  onClick={() => this.selectTarefa(tarefa.id)}
                >
                  {tarefa.texto}                
                </Tarefa>
                <button onClick={() => this.removerTarefa(tarefa.id)}>Remover</button>
                </div>
              )
            })}
          </div>
          <div>
            <h3>Completas</h3>
            {listaCompletas.map(tarefa => {
              return (
                <div>
                <Tarefa
                  completa={tarefa.completa}
                  onClick={() => this.selectTarefa(tarefa.id)}
                >
                  {tarefa.texto}            
                </Tarefa>
                <button onClick={() => this.removerTarefa(tarefa.id)}>Remover</button>
                </div>
              )
            })}
         </div> 
        </VisualizadorSeparado>

      </div>
    )
  }
}

export default App
