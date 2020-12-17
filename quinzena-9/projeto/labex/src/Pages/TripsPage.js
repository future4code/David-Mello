import React from 'react'
import RouteButton from '../Components/RouteButton'

export default function TripsPage() {
    return (
        <div>
            <RouteButton name="Marte" route="/form/Marte"/>
            <RouteButton name="Terminus" route="/form/Terminus"/>
            <RouteButton name="Arrakis" route="/form/Arrakis"/>
            <RouteButton name="Miller" route="/form/Miller"/>
        </div>
    )
}
