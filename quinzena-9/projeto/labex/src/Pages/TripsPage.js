import React from 'react'
import RouteButton from '../Components/RouteButton'
import SelectDropdown from '../Components/SelectDropdown'
import {makeStyles} from '@material-ui/core'
import useRequestData from '../CustomHooks/useRequestData'
import LoadingScreen from '../Components/LoadingScreen'
import HighlightedTrip from '../Components/HighlightedTrip'
import useForm from '../CustomHooks/useForm'
import {useHistory} from 'react-router-dom'


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
            cursor: 'pointer'
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
            padding: '24px',
            
        },
        highlightedTrip: {
            maxWidth: '100px'
        },
        filtersDiv: {
            display: 'flex',
            backgroundColor: '#daa520',
            justifyContent: 'space-around',

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
        },
        tripListInfo: {
            width: '150px'
        }
    });



export default function TripsPage() {

    const classes = useStyles()
    const trips = useRequestData('https://us-central1-labenu-apis.cloudfunctions.net/labeX/davidMelloTang/trips',{} , {})
    const tripsList = trips.trips
    const {form, onChange} = useForm({'form': ''})
    const history = useHistory();


    const handleInputChange = (event) => {
        const {value, name} = event.target
        onChange(value,name) 
    }

    const filter = tripsList !== undefined ? [...tripsList] : ["Loading"]
    
        filter.sort((a, b) => {
            switch(form.form){
                case "Nome":
                    if(a.name < b.name) {
                        return -1; 
                    } else if(a.name > b.name) { 
                        return 1; }
                break;
                case "Planeta":
                    if(a.planet < b.planet) {
                        return -1; 
                    } else if(a.planet > b.planet) { 
                        return 1; }
                break;
                case "Maior Duração":
                    if(a.durationInDays > b.durationInDays) {
                        return -1; 
                      } else if(a.durationInDays < b.durationInDays) { 
                        return 1; }
                break;
                case "Menor Duração":
                    if(a.durationInDays < b.durationInDays) {
                        return -1; 
                      } else if(a.durationInDays > b.durationInDays) { 
                        return 1; }
                        break;
                default: 
                    return 0;
                }
            return 0;
        })
    

   
    return (
        <div>
        {tripsList ? <div>
            <header className={classes.header}>
                <div className={classes.logoDiv}  onClick={() => {history.push('/')}}>
                    <h1 className={classes.logoH1}>Labex</h1>
                    <p className={classes.logoP}>Viagens Espaciais</p>
                </div>
                <RouteButton type="goBack"/>
            </header>

            <content>
                
                <section className={classes.tripHighlights}>
                    <h2>Destinos em Alta</h2>
                    <div className={classes.highlightedTripsDiv}>
                        <HighlightedTrip classeName={classes.highlightedTrip}  name={tripsList[0].name} id={tripsList[0].id}/>
                        <HighlightedTrip classeName={classes.highlightedTrip}  name={tripsList[1].name} id={tripsList[1].id}/>
                        <HighlightedTrip classeName={classes.highlightedTrip} name={tripsList[2].name} id={tripsList[2].id}/>
                        <HighlightedTrip classeName={classes.highlightedTrip}  name={tripsList[3].name} id={tripsList[3].id}/>
                    </div>
                </section>
                
                <section>

                    <div className={classes.filtersDiv}>
                        <h3>Todas as Viagens</h3>
                        <SelectDropdown 
                            name={'form'}
                            placeholder={'Ordem'}
                            type={'filter'} 
                            optionsList={['Nome', 'Planeta','Maior Duração', 'Menor Duração']} 
                            onChange={handleInputChange}/>
                    </div>

                    <div className={classes.tripsListDiv}>
                        {filter.map((e,index) => {
                            return <div className={(index%2 === 0 ? classes.even : classes.odd)} key={e.id}>
                                        <p className={classes.tripListInfo}>
                                            {e.name}
                                        </p>
                                        <p className={classes.tripListInfo}>
                                            {e.planet}
                                        </p>
                                        <p className={classes.tripListInfo}>
                                            {e.durationInDays} dias
                                        </p>
                                        <RouteButton
                                        name={'Inscreva-se'} 
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
