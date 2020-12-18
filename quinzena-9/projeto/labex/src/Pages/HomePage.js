import React from 'react'
import RouteButton from '../Components/RouteButton'
import { makeStyles } from '@material-ui/styles';
import labexHeader from '../images/labexHeader.jpg'

const useStyles = makeStyles({
    header: {
        background: 'black',
        color: 'ghostwhite',
        position: 'relative',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerImage: {
        width: '100%',
        opacity: '0.8',
    },
    h1: {
        fontSize: 'xxx-large',
        position: 'absolute',
         top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    },
    tripsSection: {
        minHeight: '70vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'ghostwhite',
        alignItems: 'center',
        justifyContent: 'space-evenly',

    },
    tripTitle: {
        alignSelf: 'flex-start',
        marginLeft: '2em',
        fontSize: 'xx-large',
    },
    tripP: {
        width: '70%',
    },
    adminSection: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#daa520',
        height: '20vh',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    h4: {
        margin:0,

    },


});

export default function HomePage() {

    const classes = useStyles();


    return (
        <div>
            <header className={classes.header}>
                <img className={classes.headerImage} src={labexHeader}></img>
                <h1 className={classes.h1}>LabeX</h1>
            </header>
            <content>
                <section className={classes.tripsSection}>
                    <h2 className={classes.tripTitle}>Escolha sua viagem</h2>
                    
                    <p className={classes.tripP}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut hendrerit mauris at enim tempus, id semper ex blandit. Nam nec sodales orci, eu pulvinar justo. Proin consequat mauris a sodales lacinia. Vestibulum sed tellus vitae turpis iaculis dignissim. Morbi interdum et diam a auctor. Morbi id facilisis nisi. Fusce fermentum ultrices elit, a interdum lacus commodo condimentum. In ac nulla quis neque mattis ultrices eget et lorem. Sed sed leo quis nisi vestibulum ultricies.

Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean sed efficitur velit, in finibus arcu. Vivamus fermentum tellus nec luctus lobortis. Ut commodo elementum ex, vel condimentum sem pretium ut. Nulla luctus odio eu tellus maximus vulputate in ut nibh. Aenean fringilla quis tortor quis luctus. Vivamus eu justo elit.</p>
                    
                    <RouteButton name="Ver Destinos" route="/trips"/>
                </section>
                <section className={classes.adminSection}>
                    <h4 className={classes.h4}>Acessar àrea administrativa</h4>
                    <RouteButton color={'secondary'} className={classes.loginButton}  name="Login" route="/login"/>
                </section>
            </content>
            <footer></footer>
        </div>
    )
}
