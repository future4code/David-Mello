import React from 'react'
import {useHistory} from 'react-router-dom'
import {makeStyles} from '@material-ui/core'
import testImage from '../images/labexHeader.jpg'


const useStyles = makeStyles({
    mainDiv:{
        position: 'relative',
        textAlign: 'center',
        color: 'white',
        backgroundColor: 'black',
        cursor: 'pointer'

    },
    image: {
        width: '100%',
        filter: 'opacity(0.5)',
    },
    text: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }
});

export default function HighlightedTrip(props) {

    const classes = useStyles()

    const tripId = props.id
    const history = useHistory();

    const onClickButton = () => {
        history.push(`/form/${tripId}`)
    }

    return (
        <div onClick={onClickButton} className={classes.mainDiv}>
            <img className={classes.image} alt="Terra" src={testImage}/>
            <h1 className={classes.text}>{props.name}</h1>
        </div>
    )
}
