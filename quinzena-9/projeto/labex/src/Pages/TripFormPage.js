import React from 'react'
import {useParams} from 'react-router-dom'
import RouteButton from '../Components/RouteButton'
import useRequestData from '../CustomHooks/useRequestData';
import LoadingScreen from '../Components/LoadingScreen'

export default function TripFormPage() {
    const pathParams = useParams();
    const tripsList = useRequestData('https://us-central1-labenu-apis.cloudfunctions.net/labeX/davidMelloTang/trips', {})
    const tripData = tripsList.trips && tripsList.trips.filter(e => {

        return e.id === pathParams.trip })
    return (
        <div>
            { tripData ? (<div>
                <RouteButton type="goBack"/>
            <h1>{tripData[0].name}</h1>
            <p>{tripData[0].planet}</p>
            <p>{tripData[0].date}</p>
            </div>) : <LoadingScreen/>}
        </div>
    )
}
