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
                <InputLabel htmlFor={'form'}>{props.name}</InputLabel>
                <Select
                 native
                 inputProps={{
                    name: 'form',
                    id: 'form',
                  }}
                  >
                    <option aria-label="None" value="" />
                    {props.optionsList.map(e => {
                        return <option key={e} value={e}>{e}</option>
                    })}
                </Select>
            </FormControl>
        </div>
    )
}
 