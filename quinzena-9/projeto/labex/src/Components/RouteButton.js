import React from 'react'
import Button from '@material-ui/core/Button'
import {useHistory} from 'react-router-dom'
import {useState, useEffect} from 'react'
import ArrowBackIos from '@material-ui/icons/ArrowBackIos'
import { ThemeProvider, makeStyles, createMuiTheme } from '@material-ui/core/styles';

const customTheme = createMuiTheme({
    pallete: {
        primary: {
            main: '#e0e0e0',
            light:'ghostwhite',
            dark:'#aeaeae',
        },
        secondary: {
            main: '#daa520',
            light:'#ffd656',
            dark:'#a47700',
        }
    }
  })

const useStyles = makeStyles(theme => ({ 
    default: {
        backgroundColor: customTheme.pallete.primary.main
    },
    secondary: {
        backgroundColor: customTheme.pallete.secondary.light,
    }



}))


export default function RouteButton(props) {

    const [type, setType] = useState("normal")
    const history = useHistory();
    const classes = useStyles();
    const color = props.color && props.color === 'secondary' ? classes.secondary : classes.default;
    
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
            <ThemeProvider theme={customTheme}>
                { type === "goBack" ? <Button variant='default' onClick={goBack}><ArrowBackIos/></Button> :  
                <Button variant="contained" className={color} onClick={onClickButton}>{props.name}</Button> }
            </ThemeProvider>
        </div>
    )
}
