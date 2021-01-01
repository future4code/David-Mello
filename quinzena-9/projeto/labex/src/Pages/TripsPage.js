import React from 'react'
import RouteButton from '../Components/RouteButton'
import SelectDropdown from '../Components/SelectDropdown'
import {makeStyles} from '@material-ui/core'
import useRequestData from '../CustomHooks/useRequestData'
import LoadingScreen from '../Components/LoadingScreen'
import HighlightedTrip from '../Components/HighlightedTrip'

    const useStyles = makeStyles({
        header: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 8px',
            minHeight: '100px', 
            borderBottom: '1px solid black',

        },
        logoDiv: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minWidth: '200px',
        },
        logoH1: { 
            margin: 0,
        },
        logoP: {
            margin: 0,
            paddingLeft: '4px',
            alignSelf:'flex-end'
        },
        tripHighlights: {
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            padding: '24px 8px',
        },
        highlightedTripsDiv: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gridTemplateRows: '1fr 1fr',
            gap: '8px 8px',
            padding: '24px'
        },
        highlightedTrip: {
            maxWidth: '100px'
        },
        filtersDiv: {
            display: 'flex',
            backgroundColor: '#daa520',
            justifyContent: 'space-around',

        },
        tripDiv: {
        },
        even: {
            backgroundColor: 'ghostwhite',
            padding: '8px',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
        },
        odd: {
            backgroundColor: '#e0e0e0',
            padding: '8px',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
        }
    });



export default function TripsPage() {

    const classes = useStyles()
    const trips = useRequestData('https://us-central1-labenu-apis.cloudfunctions.net/labeX/davidMelloTang/trips',{} , {})
    console.log(trips)
    const tripsList = trips.trips

    return (
        <div>
        {tripsList ? <div>
            <header className={classes.header}>
                <div className={classes.logoDiv}>
                    <h1 className={classes.logoH1}>Labex</h1>
                    <p className={classes.logoP}>Viagens Espaciais</p>
                </div>
                <RouteButton type="goBack"/>
            </header>

            <content>
                
                <section className={classes.tripHighlights}>
                    <h2>Destinos em Alta</h2>
                    <div className={classes.highlightedTripsDiv}>
                        <HighlightedTrip classeName={classes.highlightedTrip} name={tripsList[0].name} id={tripsList[0].id}/>
                        <HighlightedTrip classeName={classes.highlightedTrip} name={tripsList[1].name} id={tripsList[1].id}/>
                        <HighlightedTrip classeName={classes.highlightedTrip} name={tripsList[2].name} id={tripsList[2].id}/>
                        <HighlightedTrip classeName={classes.highlightedTrip} name={tripsList[3].name} id={tripsList[3].id}/>
                    </div>
                </section>
                
                <section>

                    <div className={classes.filtersDiv}>
                        <h3>Todas as Viagens</h3>
                        <SelectDropdown optionsList={['teste']}></SelectDropdown>
                        <SelectDropdown optionsList={['teste']}></SelectDropdown>
                    </div>

                    <div className={classes.tripsListDiv}>
                        {tripsList.map((e,index) => {
                            return <div className={classes.tripDiv, (index%2 === 0 ? classes.even : classes.odd)} key={e.id}>
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
