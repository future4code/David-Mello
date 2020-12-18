import React from 'react'
import RouteButton from '../Components/RouteButton'
import useProtectedPage from '../CustomHooks/useProtectedPage'

export default function AdminPage() {
    useProtectedPage();
    return (
        <div>
            <RouteButton type="goBack"/>
            <RouteButton name="Administrar candidaturas" route="admin/applications"/>
            <RouteButton name="Remover Viagens" route="admin/removetrip"/>
            <RouteButton name="Criar Viagens" route="admin/newtrip"/>
        </div>
    )
}
