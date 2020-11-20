import axios from 'axios'
import styled from 'styled-components'
import React from 'react'

export default class Playlists extends React.Component {

    state={

    }


    render() {
        return (
            <div>
                <h2>Playlists</h2>
                {this.props.list.map(element => {
                    return <p>{element.name}</p>
                })}
            </div>
        )
    }
}
