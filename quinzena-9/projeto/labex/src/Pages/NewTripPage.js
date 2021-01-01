import React from 'react'
import RouteButton from '../Components/RouteButton'
import useProtectedPage from '../CustomHooks/useProtectedPage'
import { Button, makeStyles } from '@material-ui/core'
import useForm from '../CustomHooks/useForm'
import axios from 'axios'

const useStyles = makeStyles({
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent:'space-between',
        border: '2px solid black'
    },
    headerLabexH1: {
        margin: 0,
        padding:'1em 0em',
        borderRight: '2px solid black',
        width: '21%',
    },
    content: {
        display: 'flex',
        height: '90vh',

    },
    sidebar:  {
        border: '1px solid black',
        borderLeft: '2px solid black',
        width: '21%',
        display: "grid",
        gridTemplateColumns: '1fr',
        gridTemplateRows: '1fr 1fr 1fr 6fr',
    },
    homeButtonDiv: {
        alignSelf: "end",
    },
    section: {
        border: '1px solid black',
        borderRight: '2px solid black',
        width: '79%',
    },
    message: {
        fontSize: 'xx-large',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '50vh' 
    },
    input: {
        width: '50%'
    }
})

export default function NewTripPage() {
    
    useProtectedPage();
    const classes = useStyles();
    const  {form, onChange} = useForm({'name': '', 'planet': '', 'date': '', 'description': '', 'durationInDays': 0})
    const BASEURL = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/davidMelloTang/'
    const token = localStorage.getItem('token');
    const header = {
        "Content-Type": "application/json",
        'auth': token
    }
    const handleInputChange = (event) => {
        const {value, name} = event.target
        onChange(value, name)

    }

    const createTrip = async () => {
        try {
           const response = await axios.post(`${BASEURL}trips`,
           {...form, 'durationInDays': Number(form.durationInDays)},
           {"headers" : {
            "Content-Type": "application/json",
            'auth': token}})
           alert('Viagem criada com sucesso!')
        } catch(error) {
           console.log(error.response) 
           console.log(header,{...form, 'durationInDays': Number(form.durationInDays)})
        }
    }

    const onSubmitForm = (event) => {
        event.preventDefault();
        createTrip()
    }

    return (
        <div>
            <header className={classes.header}>
                <h1 className={classes.headerLabexH1}>LABEX</h1>
                <h1 className={classes.headerAdminH1}>ÁREA ADMINISTRATIVA</h1>
                <RouteButton type="goBack"/>
            </header>

            <content className={classes.content}>
                <aside className={classes.sidebar}>
                    <RouteButton type={'admin'} name="Administrar candidaturas" route="applications"/>
                    <RouteButton type={'adminSelected'} name="Criar Nova Viagem" route="newtrip"/>
                    <RouteButton type={'admin'} name="Remover Viagens" route="removetrip"/>
                    <div className={classes.homeButtonDiv}>
                        <RouteButton type={'admin'} name="Voltar para a Home" route="/"/>
                    </div>
                </aside>
                <section className={classes.section}>
                    <p className={classes.message}>
                        CRIAR VIAGEM
                    </p>

                    <div className={classes.formDiv}>

                        <form onSubmit={onSubmitForm} className={classes.form}>
                            <label htmlFor={'name'}>Nome:</label>
                            <input 
                                placeholder={'Nome'} 
                                className={classes.input} 
                                value={form.name}
                                onChange={handleInputChange}
                                required
                                name={'name'}></input>

                            <label htmlFor={'planet'}>Planeta:</label>
                            <input 
                                placeholder={'Planeta'} 
                                className={classes.input} 
                                value={form.planet}
                                onChange={handleInputChange}
                                required
                                name={'planet'}></input>

                            <label htmlFor={'date'}>Data:</label>
                            <input 
                                className={classes.input} 
                                value={form.date}
                                onChange={handleInputChange}
                                required
                                name={'date'} type={"date"}></input>

                            <label htmlFor={'description'}>Descrição:</label>
                            <input
                                placeholder={'Descrição'} 
                                className={classes.input} 
                                value={form.description}
                                onChange={handleInputChange}
                                required
                                name={'description'}></input>

                            <label htmlFor={'durationInDays'}>Duração em dias:</label>
                            <input  
                                placeholder={'Duração em dias'}
                                className={classes.input} 
                                value={form.durationInDays}
                                onChange={handleInputChange}
                                required
                                name={'durationInDays'} type={'number'} min={0}></input>

                            <Button
                                type='submit'
                                variant="contained">
                                    Enviar
                                </Button>
                        </form>

                    </div>
                    
                </section>
            </content>    
        </div>
    )
}
