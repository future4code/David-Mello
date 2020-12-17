import React from 'react'
import RouteButton from '../Components/RouteButton'

export default function AdminPage() {
    return (
        <div>
            <RouteButton name="Administrar candidaturas" route="admin/applications"/>
            <RouteButton name="Remover Viagens" route="admin/removetrip"/>
            <RouteButton name="Criar Viagens" route="admin/newtrip"/>
        </div>
    )
}
