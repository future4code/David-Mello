import React from 'react'
import {makeStyles} from '@material-ui/core'
import axios from  'axios'


const useStyles = makeStyles({
    reprove: {
        backgroundColor: '#f44336',
        border: 'none',
        width: 25,
        height: 25,
        borderRadius: '50%',
        cursor: 'pointer',
        marginLeft: '1em',
    }

})

export default function RemoveTripButton(props) {
    const classes = useStyles()
    const onClickButton = () => {
        removeTrip()
    }

    const removeTrip = async () => {
        try { 
           const response = await axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/davidMelloTang/trips/${props.tripId}`,
             {'headers': {'Content-Type': 'application/json'}});
            
            props.onClick()
            console.log(response)
        } catch(error) {
            console.log(error.response)
        }
    }

    
    return (
        <div>
            <button className={classes.reprove} onClick={onClickButton}></button>
        </div>
    )
}
