import React from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import RouteButton from '../Components/RouteButton'
import useRequestData from '../CustomHooks/useRequestData';
import LoadingScreen from '../Components/LoadingScreen'
import {makeStyles} from '@material-ui/core'
import useForm from '../CustomHooks/useForm'
import SelectDropdown from '../Components/SelectDropdown'
import countriesArray from '../Components/countriesArray'

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
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    formInput: {
        width: '50vw' ,
    }
})



export default function TripFormPage() {
    const pathParams = useParams();
    const classes = useStyles();
    const {form, onChange} = useForm({'name': '', 'age': '', 'applicationText': '', 'profession': '', 'country': ''})
    const tripsList = useRequestData('https://us-central1-labenu-apis.cloudfunctions.net/labeX/davidMelloTang/trips', {})
    const BASEURL = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/davidMelloTang/'
    const countries = countriesArray();
   
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
        } catch(error) {
            console.log(error.data)
        }
    }

    const onSubmitForm = (event) => {
        event.preventDefault();
        postApplyToTrip();
    }


    return (
        <div>
            <header className={classes.header}>
                <div className={classes.logoDiv}>
                    <h1 className={classes.logoH1}>Labex</h1>
                    <p className={classes.logoP}>Viagens Espaciais</p>
                </div>
                <RouteButton type="goBack"/>
            </header>

            { tripData ? (
            <content className={classes.content}>
            <section className={classes.tripInfo}>
                <h1>{tripData[0].name}</h1>
                <p>{tripData[0].planet}</p>
                <p>{tripData[0].date}</p>
            </section>
            <section className={classes.formSection}>
                <form className={classes.form} onSubmit={onSubmitForm}>
                    <label htmlFor={'name'}>Nome:</label>
                    <input 
                    value={form.name}
                    name={'name'} className={classes.formInput} onChange={handleInputChange}></input>

                    <label htmlFor={'age'}>Idade:</label>
                    <input 
                    value={form.age}
                    type='number' name={'age'} min='18' className={classes.formInput} onChange={handleInputChange}></input>

                    <label htmlFor={'applicationText'}>Texto de Inscrição:</label>
                    <textarea 
                    value={form.applicationText}
                    rows='15' cols='45' name={'applicationText'} className={classes.formInput} onChange={handleInputChange}></textarea>

                    <label htmlFor={'profession'}>Profissão:</label>
                    <input 
                    value={form.profession}
                    name={'profession'} className={classes.formInput} onChange={handleInputChange}></input>

                    <label htmlFor={'country'}>País:</label>
                    <SelectDropdown 
                    value={form.country}
                    optionsList={countries}
                    name={'country'} className={classes.formInput} onChange={handleInputChange}></SelectDropdown>


                    <button>Enviar</button>
                </form>

            </section>
            </content>
            
            ) 
            
            
            
            
            
            
            : <LoadingScreen/>}

            
        </div>
    )
}
