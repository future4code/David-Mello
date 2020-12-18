import { makeStyles } from '@material-ui/core'
import React, {useEffect} from 'react'
import axios from 'axios'
import RouteButton from '../Components/RouteButton'
import {Button} from '@material-ui/core'
import useForm from '../CustomHooks/useForm'
import { useHistory } from 'react-router'

const useStyles = makeStyles({
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent:'space-between',
    },
    headerLabexH1: {
        marginLeft: '1em',
        paddingRight:'1em',
        borderRight: '2px solid black',
    }
})

export default function LoginPage() {
    const {form, onChange} = useForm({'email':'', 'password': ''});
    const classes = useStyles();
    const history = useHistory();
    const BASEURL = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/davidMelloTang/'


    const login = async () => {
        try {
           const response = await axios.post(`${BASEURL}login`, form)
           localStorage.setItem("token", response.data.token);
           history.push("/admin");
        } catch(error) {
           console.log(error.data) 
        }
    }

    const handleInputChange = (event) => {
        const {value, name} = event.target
        onChange(value, name)

    }

    const onSubmitForm = (event) => {
        event.preventDefault();
        login();
    
    }

    return (
        <div>
            <header className={classes.header}>
                <h1 className={classes.headerLabexH1}>LABEX</h1>
                <h1 className={classes.headerAdminH1}>ÁREA ADMINISTRATIVA</h1>
                <RouteButton type="goBack"/>
            </header>
            <form onSubmit={onSubmitForm}>
                <input
                    placeholder={'E-mail'}
                    value={form.email}
                    name={'email'}
                    onChange={handleInputChange}
                    type={'email'}
                    required
                    />
                <input
                    placeholder={'Senha'}
                    value={form.password}
                    name={'password'}
                    onChange={handleInputChange}
                    type={'password'}
                    required
                    />
                <Button
                type='submit'
                variant="contained">
                    Entrar
                </Button>
            </form>          
        </div>
    )
}
