import React from 'react'
import {makeStyles} from '@material-ui/core'
import axios from  'axios'


const useStyles = makeStyles({
    approve: { 
        backgroundColor: '#00c853',
        border: 'none',
        width: 25,
        height: 25,
        borderRadius: '50%',
        cursor: 'pointer'
    },
    reprove: {
        backgroundColor: '#f44336',
        border: 'none',
        width: 25,
        height: 25,
        borderRadius: '50%',
        cursor: 'pointer'
    }

})

export default function DecideCandidateButton(props) {
    const classes = useStyles()
    const token = localStorage.getItem('token');
    const onClickButton = () => {
        decideCadidate()
    }

    const decideCadidate = async () => {
        try { 
           const response = await axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/davidMelloTang/trips/${props.tripId}/candidates/${props.candidateId}/decide`,
             {
                "approve": props.type === 'approve'? true : false
            },{'headers': {'Content-Type': 'application/json', 'auth': token}});
            
            props.onClick()
        } catch(error) {
            console.log(error.response)
        }
    }

    
    return (
        <div>
            <button className={props.type === 'approve' ? classes.approve : classes.reprove} onClick={onClickButton}></button>
        </div>
    )
}
