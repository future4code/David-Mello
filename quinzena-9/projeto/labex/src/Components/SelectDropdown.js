import React from 'react'
import {Select, InputLabel, FormControl} from '@material-ui/core'
import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    formControl: {
      minWidth: 120,
    },
    }));


export default function AdminDropdownFilter(props) {
    
    const classes = useStyles();

    return (
        <div>
            <FormControl variant='filled' className={classes.formControl}>
                <InputLabel htmlFor={props.name}>{props.placeholder}</InputLabel>
                <Select
                    native
                    inputProps={{
                        name: props.name,
                        id: 'form',
                  }}
                  onChange={props.onChange}
                  >
                    <option aria-label="None" value="" />
                    {props.optionsList.map(e => {
                        if (props.type === 'admin') {
                            return <option key={e.name} value={e.id}>{e.name}</option>
                        } else if (props.type === 'filter') {
                            return <option key={e} value={e}>{e}</option>
                        }
                    return null;
                    })}
                </Select>
            </FormControl>
        </div>
    )
}
 