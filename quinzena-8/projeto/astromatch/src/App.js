import {useState} from 'react'
import FirstPage from './Components/FirstPage'
import MatchesPage from './Components/MatchesPage'
import HeaderButton from './Components/HeaderButton'
import HowToReg from '@material-ui/icons/HowToReg'
import PersonAdd from '@material-ui/icons/PersonAdd'
import {Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DeleteDataButton from './Components/DeleteDataButton';

const useStyles = makeStyles({
  root:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  header: {
    display: 'flex',
    justifyContent:'center',
    width: '100%',
    borderBottom: '1px solid grey',
  },
  headerTitle: {
    textAlign: 'center',
    flexGrow: 2,
    fontWeight: 'bolder',
  },
  displayMatchesButton: {
    border:'none',
    borderTopRightRadius:10,
    backgroundColor:'white',
    cursor: 'pointer',
    width: 40,
  },
  astromatch: {
    marginTop:16,
    border: '1px solid black',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: "white",
    width: 400,
    height: 600,
  },
  content: {
    width: '100%',
    height: '100%',
  },
});

function App() {
  const classes = useStyles();
  const [matchesPage, setMatchesPage] = useState(false)

  const onClickMatchesPage = () => {
    setMatchesPage(!matchesPage)
  }
  

  return (
    <div className={classes.root}>
      <div className={classes.astromatch}>

        <header className={classes.header}>
          <Typography 
           variant='h4'
           className={classes.headerTitle}>
            <span style={{color: '#66bb6a'}}>astro</span>
            <span style={{color: '#320b86'}}>match</span>
          </Typography>
          
          {matchesPage ? <HeaderButton 
                            class={classes.personAddButton}
                            onClickHeaderButton={onClickMatchesPage}
                            icon={<PersonAdd color='secondary'/>} /> :
                        <HeaderButton 
                            class={classes.displayMatchesButton}
                            onClickHeaderButton={onClickMatchesPage}
                            icon={<HowToReg color='primary'/>}
                            />}
        </header>

        <content className={classes.content}>
          {matchesPage ? <MatchesPage /> : <FirstPage />}
        </content>

      </div>
      <DeleteDataButton/>
    </div>
  );
}

export default App;
