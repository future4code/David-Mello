import React from 'react'
import {useParams} from 'react-router-dom'
import RouteButton from '../Components/RouteButton'

export default function TripFormPage() {
    const pathParams = useParams();

    return (
        <div>
            <RouteButton type="goBack"/>
            <h1>{pathParams.trip} </h1>
        </div>
    )
}
