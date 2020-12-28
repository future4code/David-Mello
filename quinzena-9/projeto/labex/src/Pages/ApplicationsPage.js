import React from 'react'
import RouteButton from '../Components/RouteButton'
import useProtectedPage from '../CustomHooks/useProtectedPage'
import { makeStyles } from '@material-ui/core'
import SelectDropdown from '../Components/SelectDropdown'

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
        width: '100vw',
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
    titleDiv: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    labels: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0 8px',
    }
    
})


export default function ApplicationsPage() {


       
    useProtectedPage();
    const classes = useStyles();


    return (
        <div>
            <header className={classes.header}>
                <h1 className={classes.headerLabexH1}>LABEX</h1>
                <h1 className={classes.headerAdminH1}>ÁREA ADMINISTRATIVA</h1>
                <RouteButton type="goBack"/>
            </header>

            <content className={classes.content}>
                <aside className={classes.sidebar}>
                    <RouteButton type={'adminSelected'} name="Administrar candidaturas" route="applications"/>
                    <RouteButton type={'admin'} name="Criar Nova Viagem" route="newtrip"/>
                    <RouteButton type={'admin'} name="Remover Viagens" route="removetrip"/>
                    <div className={classes.homeButtonDiv}>
                        <RouteButton type={'admin'} name="Voltar para a Home" route="/"/>
                    </div>
                </aside>
                <section className={classes.section}>

                    <div className={classes.titleDiv}>
                        <h2>Inscrições</h2>
                        <SelectDropdown name={'Destinos'} optionsList={['default', 'teste']}/>
                        <SelectDropdown name={'Ordem'} optionsList={['Nome', 'Mais Recente', 'Mais antigo', 'Idade']}/>
                    </div>

                    <div className={classes.labels}>
                        <p>nome</p>
                        <p>idade</p>
                        <p>destino</p>
                        <p>data de envio</p>
                        <p>aprovar</p>
                        <p>remover</p>
                    </div>

                    <div className={classes.applicationsList} >

                    </div>
                </section>
            </content>    
        </div>
    )
}
