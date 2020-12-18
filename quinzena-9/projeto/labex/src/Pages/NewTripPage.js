import React from 'react'
import RouteButton from '../Components/RouteButton'
import useProtectedPage from '../CustomHooks/useProtectedPage'

export default function NewTripPage() {
    useProtectedPage();
    return (
        <div>
            <RouteButton type="goBack"/>
        </div>
    )
}
