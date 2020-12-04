import {useState, useEffect} from 'react'
import Match from './Match'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({

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
            console.log(error.response.message)
        }
    }

    return (
        <div>
            {matchList.map(element => {
                return <Match 
                key={element.id}
                img={element.photo}
                name={element.name}
                />
            })}
        </div>
    )
}
