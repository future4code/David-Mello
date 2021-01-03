import React from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import RouteButton from '../Components/RouteButton'
import useRequestData from '../CustomHooks/useRequestData';
import LoadingScreen from '../Components/LoadingScreen'
import {makeStyles} from '@material-ui/core'
import useForm from '../CustomHooks/useForm'
import SelectDropdown from '../Components/SelectDropdown'
import {TextField} from '@material-ui/core' 
import {Button} from '@material-ui/core' 
import countriesArray from '../Components/countriesArray'
import {useHistory} from 'react-router-dom'
import Marte from '../images/Marte.jpg'
import Netuno from '../images/Netuno.jpg'
import Jupiter from '../images/Jupiter.jpg'
import Plutao from '../images/Plutão.webp'
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
    tripInfo:{
        display:'flex',
        backgroundColor: 'black',
        margin: '0 0 24px 0',

    },
    tripInfoText: {
        display: 'flex',
        flexDirection: 'column',
        color: 'ghostwhite'
    },
    planetImage: {
        width: '50vw'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    formInput: {
        width: '50vw' ,
        margin: '18px 0'
    },
    formButton: {
        margin: 18
    }
})



export default function TripFormPage() {
    const pathParams = useParams();
    const classes = useStyles();
    const {form, onChange} = useForm({'name': '', 'age': '', 'applicationText': '', 'profession': '', 'country': ''})
    const tripsList = useRequestData('https://us-central1-labenu-apis.cloudfunctions.net/labeX/davidMelloTang/trips', {},{})
    const BASEURL = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/davidMelloTang/'
    const countries = countriesArray();
    const history = useHistory();
   
    const tripData = tripsList.trips && tripsList.trips.filter(e => {

        return e.id === pathParams.trip })

    const handleInputChange = (event) => {
        const {value, name} = event.target
        onChange(value, name)
    }
        
    const postApplyToTrip = async () => {
        try {
            const response = await axios.post(`${BASEURL}trips/${pathParams.trip}/apply`, form)
            alert('inscrição feita com sucesso!')
            console.log(response)
        } catch(error) {
            console.log(error.response)
        }
    }

    const onSubmitForm = (event) => {
        event.preventDefault();
        postApplyToTrip();
    }

    let planetImage = Marte;
    switch(tripData? tripData[0].planet : null) {
        case 'Marte':
            planetImage = Marte;
        break;
        case 'Netuno':
            planetImage = Netuno;
        break;
        case 'Jupiter':
            planetImage = Jupiter;
        break;
        case 'Plutão':
            planetImage = Plutao;
        break; 
        default: 
            return 0;
    }

    return (
        <div>
            <header className={classes.header}>
                <div className={classes.logoDiv} onClick={() => {history.push('/')}}>
                    <h1 className={classes.logoH1}>Labex</h1>
                    <p className={classes.logoP}>Viagens Espaciais</p>
                </div>
                <RouteButton type="goBack"/>
            </header>

            { tripData ? (
                
            <content className={classes.content}>
                <section className={classes.tripInfo}>
                    <img src={planetImage} alt={tripData[0].planet} className={classes.planetImage}/>
                    <div className={classes.tripInfoText}>
                        <h1>{tripData[0].name}</h1>
                        <p>{tripData[0].description}</p>
                        <p>{tripData[0].planet}</p>
                        <p>{tripData[0].date}</p>
                    </div>
                </section>
                <section className={classes.formSection}>
                    <form  className={classes.form} onSubmit={onSubmitForm}>
                        <TextField  
                        label="Nome:" 
                        variant="filled"
                        value={form.name}
                        name={'name'} 
                        className={classes.formInput} 
                        onChange={handleInputChange}></TextField>

                        <TextField 
                        label="Idade:" 
                        variant="filled"
                        value={form.age}
                        type='number' 
                        name={'age'} 
                        className={classes.formInput} 
                        onChange={handleInputChange}></TextField>

                        <TextField
                        id="outlined-multiline-static"
                        label="Texto de Inscrição:"
                        multiline
                        rows={4}
                        defaultValue="Default Value"
                        variant="filled" 
                        value={form.applicationText}
                        name={'applicationText'} 
                        className={classes.formInput} 
                        onChange={handleInputChange}></TextField>

                        <TextField  
                        label="Profissão:" 
                        variant="filled"
                        value={form.profession}
                        name={'profession'}
                        className={classes.formInput} 
                        onChange={handleInputChange}></TextField>

                        <SelectDropdown 
                        value={form.country}
                        optionsList={countries}
                        type={'filter'}
                        name={'country'}
                        placeholder={'País'} 
                        className={classes.formInput}
                        onChange={handleInputChange}></SelectDropdown>


                        <Button variant={'contained'  } type={'submit'} className={classes.formButton}>Enviar</Button>
                    </form>

                </section>
            </content>
            
            ) 
            
            
            
            
            
            
            : <LoadingScreen/>}

            
        </div>
    )
}
