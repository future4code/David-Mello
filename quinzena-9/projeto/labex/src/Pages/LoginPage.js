import React from 'react'
import RouteButton from '../Components/RouteButton'

export default function LoginPage() {
    return (
        <div>
            <RouteButton type="goBack"/>
            <RouteButton name="Entrar" route='/admin'/>
        </div>
    )
}
