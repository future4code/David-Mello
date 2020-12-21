import React from 'react'
import RouteButton from '../Components/RouteButton'
import AdminDropdownFilter from '../Components/AdminDropdownFilter'
import {makeStyles} from '@material-ui/core'
import useRequestData from '../CustomHooks/useRequestData'
import LoadingScreen from '../Components/LoadingScreen'

    const useStyles = makeStyles({
        header: {
            display: 'flex',

        },
        filtersDiv: {
            display: 'flex',
        },
        tripDiv: {
            display: 'flex',
            justifyContent: 'space-around',
        }
    });



export default function TripsPage() {

    const classes = useStyles()
    const trips = useRequestData('https://us-central1-labenu-apis.cloudfunctions.net/labeX/davidMelloTang/trips', {})
    console.log(trips)
    const tripsList = trips.trips

    return (
        <div>
        {tripsList ? <div>
            <header className={classes.header}>
                <h1>Labex</h1>
                <p>Viagens Espaciais</p>
                <RouteButton type="goBack"/>
            </header>

            <content>
                
                <section>
                    <RouteButton name="Marte" route="/form/Marte"/>
                    <RouteButton name="Terminus" route="/form/Terminus"/>
                    <RouteButton name="Arrakis" route="/form/Arrakis"/>
                    <RouteButton name="Miller" route="/form/Miller"/>
                </section>
                
                <section>

                    <div className={classes.filtersDiv}>
                        <h3>Todas as Viagens</h3>
                        <AdminDropdownFilter optionsList={['teste']}></AdminDropdownFilter>
                        <AdminDropdownFilter optionsList={['teste']}></AdminDropdownFilter>
                    </div>

                    <div className={classes.tripsListDiv}>
                        {tripsList.map(e => {
                            return <div className={classes.tripDiv} key={e.id}>
                                        <p>
                                            {e.name}
                                        </p>

                                        <RouteButton
                                        name={e.name} 
                                        route={`/form/${e.id}`}/>
                                    </div>
                        })}
                    </div>
                </section>
            </content> 
        </div> : <LoadingScreen />}
        </div>
    )
}
