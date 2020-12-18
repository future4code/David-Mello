import { makeStyles } from '@material-ui/core'
import React from 'react'
import RouteButton from '../Components/RouteButton'

const useStyles = makeStyles({

})

export default function LoginPage() {

    const classes = useStyles();
        
    return (
        <div>
            <header>

            <RouteButton type="goBack"/>
            </header>
            
            <RouteButton name="Entrar" route='/admin'/>
        </div>
    )
}
