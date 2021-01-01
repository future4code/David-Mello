import React from 'react'
import RouteButton from '../Components/RouteButton'
import useProtectedPage from '../CustomHooks/useProtectedPage'
import { makeStyles } from '@material-ui/core'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import useForm from '../CustomHooks/useForm'
import useRequestData from '../CustomHooks/useRequestData'
import RemoveTripButton from '../Components/RemoveTripButton'

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
    }
})

export default function RemoveTripPage() {
    
    useProtectedPage();
    const classes = useStyles();
    const {form, onChange} = useForm();
    const tripsData = useRequestData('https://us-central1-labenu-apis.cloudfunctions.net/labeX/davidMelloTang/trips',{}, {'trips': ['teste',1]})

    const refreshAfterRemoveTrip = () => {
        window.location.reload(false);
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
                    <RouteButton type={'admin'} name="Criar Nova Viagem" route="newtrip"/>
                    <RouteButton type={'adminSelected'} name="Remover Viagens" route="removetrip"/>
                    <div className={classes.homeButtonDiv}>
                        <RouteButton type={'admin'} name="Voltar para a Home" route="/"/>
                    </div>
                </aside>
                <section className={classes.section}>
                    <p className={classes.message}>
                       REMOVER VIAGENS
                    </p>

                    <div  className={classes.removeTripDiv}>
                        <TableContainer component={Paper}>
                            <Table className={classes.table} size="small" aria-label="a dense table">
                                <TableHead>
                                <TableRow>
                                    <TableCell align='left' >Nome</TableCell>
                                    <TableCell align='left' >Planeta</TableCell>
                                    <TableCell align='left' >Data</TableCell>
                                    <TableCell align='left' >Remover</TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                    {tripsData && tripsData.trips.map((e,index) => {

                                        return (
                                            <TableRow key={e.id} className={index%2===0? classes.tripEven : classes.tripOdd}>
                                                <TableCell component="th" scope="row">{e.name}</TableCell>
                                                <TableCell align='left'>{e.planet}</TableCell>
                                                <TableCell align='left'>{e.date}</TableCell>
                                                <TableCell align='left'><RemoveTripButton type={'reprove'} tripId={e.id} onClick={refreshAfterRemoveTrip}></RemoveTripButton></TableCell>
                                            </TableRow>
                                                )  
                                        })}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </section>
            </content>    
        </div>
    )
}
