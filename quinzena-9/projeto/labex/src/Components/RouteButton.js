import React from 'react'
import Button from '@material-ui/core/Button'
import {useHistory} from 'react-router-dom'

export default function RouteButton(props) {

    const history = useHistory();
    const onClickButton = () => {
        history.push(props.route)
    }

    return (
        <div>
            <Button variant="contained" onClick={onClickButton}>{props.name}</Button>
        </div>
    )
}
