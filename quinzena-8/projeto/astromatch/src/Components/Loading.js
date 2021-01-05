import React from 'react'
import Favorite from "@material-ui/icons/Favorite"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    loading: {
        '-webkit-animation': 'scale-up-center 1s cubic-bezier(0.645, 0.045, 0.355, 1.000) infinite alternate both',
	        animation: 'scale-up-center 1s cubic-bezier(0.645, 0.045, 0.355, 1.000) infinite alternate both',
    },
    '@global' : {
        '@keyframes scale-up-center': {
            '0%' :{
              '-webkit-transform': 'scale(0.5)',
                      'transform': 'scale(0.5)',
                      color: 'rgb(50, 11, 134)',
                        
            },
            '100%': {
              '-webkit-transform': 'scale(1)',
                      'transform': 'scale(1)',
                      color: '#00c853', 
            },
          }
    }
});

export default function Loading() {
    const classes = useStyles();
    return (
        
            <Favorite style={{ fontSize: 150 }} className={classes.loading}/>
        
    )
}
