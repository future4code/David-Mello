import {useState, useEffect} from 'react'
import Match from './Match'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    matchesPage :{
        height: '95%',
        overflowY: 'auto',
        '&::-webkit-scrollbar': {
            width: '0.8em'
          },
          '&::-webkit-scrollbar-track': {
            boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
            webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(0,0,0,.1)',
          }
    }
})


export default function MatchesPage() {
    const classes = useStyles();
    const [matchList, setMatchList] = useState([])
    useEffect(() => {
        getMatches()
    
    }, []);

    const getMatches = async () => {
        try {
            const response = await axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/davidMelloTang/matches');
            setMatchList(response.data.matches)
        } catch(error) {
            console.log(error.response.data)
        }
    }

    return (
        <div className={classes.matchesPage}>
        <div className={classes.matchesList}>
            {matchList.map(element => {
                return <Match 
                key={element.id}
                img={element.photo}
                name={element.name}
                />
            })}
        </div>
        </div>
    )
}
