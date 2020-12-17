import React from 'react'
import {useParams} from 'react-router-dom'

export default function TripFormPage() {
    const pathParams = useParams();

    return (
        <div>
            <h1>{pathParams.trip} </h1>
        </div>
    )
}
