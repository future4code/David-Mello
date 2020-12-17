import React from 'react'
import RouteButton from '../Components/RouteButton'

export default function HomePage() {

    return (
        <div>
            <h1>Home</h1>
            <RouteButton name="Login" route="/login"/>
            <RouteButton name="Ver Destinos" route="/trips"/>
        </div>
    )
}
