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
        textAlign: 'center'
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
                <img className={classes.headerImage} alt="Terra" src={labexHeader}></img>
                <h1 className={classes.h1}>LabeX</h1>
            </header>
            <content>
                <section className={classes.tripsSection}>
                    <h2 className={classes.tripTitle}>Escolha sua viagem</h2>
                    
                    <p className={classes.tripP}>
                        Tenha incríveis experiências interplanetárias com todo conforto e segurança. <br/>
                        Na LabeX você encontra pacotes com passagem aérea, hotel, passeios e serviços que garantem uma viagem mais tranquila! 
                        Também temos as naves mais modernas da galáxia, tecnologia de ponta para te levar para qualquer lugar dentro e fora do sistema solar.<br/><br/>
                        Realize a viagem dos seus sonhos com condições que só a Labex oferece para você! Suas compras podem ser realizadas em até 10x sem juros, no cartão de crédito, transferência bancária ou à vista. Além de benefícios exclusivos que você pode encontrar numa loja LabeX.
                    </p>
                    
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
