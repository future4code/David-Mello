import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    div: {
        display:'flex',
        alignItems: 'center'
    },
    img: {
        width:50,
        height:50,
        borderRadius: '50%',
        margin:'4px 8px 4px 8px',
    },
    name: {
        fontWeight: 600,
    },
})

export default function Match(props) {
    const classes = useStyles();

    return (
        <div className={classes.div}>
            <img className={classes.img} alt={'profile'} src={props.img}/>
            <p className={classes.name}>{props.name}</p>
        </div>
    )
}
