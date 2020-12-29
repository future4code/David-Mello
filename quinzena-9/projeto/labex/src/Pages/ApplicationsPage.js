import React, {useEffect} from 'react'
import RouteButton from '../Components/RouteButton'
import useProtectedPage from '../CustomHooks/useProtectedPage'
import { makeStyles } from '@material-ui/core'
import SelectDropdown from '../Components/SelectDropdown'
import useRequestData from '../CustomHooks/useRequestData'
import useForm from '../CustomHooks/useForm'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DecideCandidateButton from '../Components/DecideCandidateButton'

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
    titleDiv: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    labels: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0 8px',
    },
    candidateEven: {
        backgroundColor: '#e0e0e0',
    },
    candidateOdd: {
        backgroundColor: 'ghostwhite'
    }
    
})

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];


export default function ApplicationsPage() {

    const token = localStorage.getItem('token');

       
    useProtectedPage();
    const classes = useStyles();
    const {form, onChange} = useForm({'form':''});
    const tripsData = useRequestData('https://us-central1-labenu-apis.cloudfunctions.net/labeX/davidMelloTang/trips',{}, {'trips': ['teste',1]})
    const tripsOptionsList = tripsData !== {'trips':['teste',1]} && tripsData.trips.map(e => {
        return {'id': e.id, 'name': e.name}
    })

    const selectedTrip = useRequestData(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/davidMelloTang/trip/${form.form}`, {'headers': {
        'auth': token}} ,false)
    console.log(form,token, selectedTrip !=={} && selectedTrip)
    const handleInputChange = (event) => {
        const {value, name} = event.target
        onChange(value,name)
        console.log(value,name) 
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
                        <SelectDropdown name={'Destinos'} optionsList={tripsOptionsList} onChange={handleInputChange}/>
                        <SelectDropdown name={'Ordem'} optionsList={['Nome', 'Mais Recente', 'Mais antigo', 'Idade']}/>
                    </div>

                    <TableContainer component={Paper}>
                        <Table className={classes.table} size="small" aria-label="a dense table">
                            <TableHead>
                            <TableRow>
                                <TableCell align='left' >Nome</TableCell>
                                <TableCell align='left' >Idade</TableCell>
                                <TableCell align='left' >Profissão</TableCell>
                                <TableCell align='left' >Destino</TableCell>
                                <TableCell align='left' >Data</TableCell>
                                <TableCell align='left' >Aprovar</TableCell>
                                <TableCell align='left' >Remover</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                                {form.form === "" ? <TableRow component="th" scope="row"><TableCell>Selecione um Destino</TableCell></TableRow>
                                : selectedTrip && selectedTrip.trip.candidates.map((e,index) => {

                                    return (
                                        <TableRow key={e.name} className={index%2===0? classes.candidateEven : classes.candidateOdd}>
                                            <TableCell component="th" scope="row">{e.name}</TableCell>
                                            <TableCell align='left'>{e.age}</TableCell>
                                            <TableCell align='left'>{e.profession}</TableCell>
                                            <TableCell align='left'>{selectedTrip.trip.name}</TableCell>
                                            <TableCell align='left'>{selectedTrip.trip.date}</TableCell>
                                            <TableCell align='left'><DecideCandidateButton>V</DecideCandidateButton></TableCell>
                                            <TableCell align='left'><DecideCandidateButton>X</DecideCandidateButton></TableCell>
                                        </TableRow>
                                            )
                                    })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </section>
            </content>    
        </div>
    )
}
