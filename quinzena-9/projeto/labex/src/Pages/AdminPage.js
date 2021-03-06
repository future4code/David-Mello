import React from 'react'
import RouteButton from '../Components/RouteButton'
import useProtectedPage from '../CustomHooks/useProtectedPage'
import { makeStyles } from '@material-ui/core'

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
        width: '21%',display: "grid",
        gridTemplateColumns: '1fr',
        gridTemplateRows: '1fr 1fr 1fr 6fr',
    },
    routeButton: {
        width: '100%',
        height: '6em',
    },
    homeButtonDiv: {
        alignSelf: "end",
    },
    section: {
        border: '1px solid black',
        borderRight: '2px solid black',
        width: '79%',
        textAlign: 'center'
    },
    message: {
        fontSize: 'xx-large',
    }
})

export default function AdminPage() {
    
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
                    <RouteButton className={classes.routeButton} type={'admin'} name="Administrar candidaturas" route="admin/applications"/>
                    <RouteButton className={classes.routeButton} type={'admin'} name="Criar Nova Viagem" route="admin/newtrip"/>
                    <RouteButton className={classes.routeButton} type={'admin'} name="Remover Viagens" route="admin/removetrip"/>
                    <div className={classes.homeButtonDiv}>
                        <RouteButton type={'admin'} name="Voltar para a Home" route="/"/>
                    </div>
                </aside>
                <section className={classes.section}>
                    <p className={classes.message}>
                        Bem vindo à área administrativa
                        <br/>
                        <br/>
                        Selecione uma tarefa no menu ao lado para começar
                    </p>
                    {/* Aqui eu tinha pensado originalmente em fazer com renderização condicional,
                     mas fiz com React Router como pedido no exercício*/}
                </section>
            </content>    
        </div>
    )
}
