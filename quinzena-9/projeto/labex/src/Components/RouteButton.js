import React from 'react'
import Button from '@material-ui/core/Button'
import {useHistory} from 'react-router-dom'
import {useState, useEffect} from 'react'
import ArrowBackIos from '@material-ui/icons/ArrowBackIos'

export default function RouteButton(props) {

    const [type, setType] = useState("normal")
    const history = useHistory();
    
    const onClickButton = () => {
        history.push(props.route)
    }

    const goBack = () => {
        history.goBack()
    }

    useEffect(() => {
        if (props.type === "goBack") 
        { setType(props.type) } 
        return () => {
            
        }
    }, [])
    

    return (
        <div>
            { type === "goBack" ? <Button variant='default' onClick={goBack}><ArrowBackIos/></Button> :  
            <Button variant="contained" onClick={onClickButton}>{props.name}</Button> }
        </div>
    )
}
