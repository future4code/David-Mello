import axios from 'axios';
import {useState, useEffect} from 'react'
import Favorite from "@material-ui/icons/Favorite"
import NotInterested from '@material-ui/icons/NotInterested'
import Button from '@material-ui/core/Button'
import { Card, CardContent} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx'
import Loading from './Loading'


const useStyles = makeStyles({
  card: {
    marginTop: 8,
    width: "90%",
    height: '80%',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },
  rotateout2brcw: {
    '-webkit-animation': 'rotate-out-2-br-cw 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
            animation: 'rotate-out-2-br-cw 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
  },
  rotateout2blccw: {
    '-webkit-animation': 'rotate-out-2-bl-ccw 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
            animation: 'rotate-out-2-bl-ccw 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
  },
  image: {
    width: "100%",
    zIndex: 1,
    maxHeight: 500,
  },
  cardContent: {
    position: 'absolute',
    bottom: 0,
    color: 'ghostwhite',
    backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent)',
    zIndex: 2,
    width:'100%'
  },
  cardBackground: {
    filter: 'blur(30px)',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  nameDiv: {
    display: 'flex',
    alignItems: 'baseline',
  },
  bio: {
    margin: 0,
    lineBreak: 'auto',
    width: '80%',
  },
  buttonsDiv: {
    marginTop: 16,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around'
  },
  firstPage: {
    width:  '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  "@global": {
    '@keyframes rotate-out-2-br-cw': {
      '0%': {
        '-webkit-transform': 'rotate(0)',
                'transform': 'rotate(0)',
        '-webkit-transform-origin': '100% 100%',
                'transform-origin': '100% 100%',
        'opacity': 1,
      },
      '100%': {
        '-webkit-transform': 'rotate(45deg)',
                'transform': 'rotate(45deg)',
        '-webkit-transform-origin': '100% 100%',
                'transform-origin': '100% 100%',
        'opacity': 0,
      },
    },
    '@keyframes rotate-out-2-bl-ccw': {
      '0%': {
        '-webkit-transform': 'rotate(0)',
                'transform': 'rotate(0)',
        '-webkit-transform-origin': '0 100%',
                'transform-origin': '0 100%',
        'opacity': 1,
      },
      '100%': {
        '-webkit-transform': 'rotate(-45deg)',
                'transform': 'rotate(-45deg)',
        '-webkit-transform-origin': '0 100%',
                'transform-origin': '0 100%',
        'opacity': 0,
      }
    }
    
}

});



export default function FirstPage(props) {
    const classes = useStyles();
    const [profile, setProfile] = useState({});
    const [like, setLike] = useState(false);
    const [dislike, setDislike] = useState(false);
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        getProfileToChoose()
    }, [])

    const getProfileToChoose = async () => {

            try {
                const response = await axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/davidMelloTang/person')
                setProfile(response.data.profile)
                setLike(false)
                setDislike(false)
                setLoading(false)
            } catch (error) {
                console.log(error.response)
            }
        
    }

    const choosePerson = async () => {
        try {
            const response = await axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/davidMelloTang/choose-person',
            {
                "id": profile.id,
                "choice": true
            },
             {headers: {'Content-Type': 'application/json'}}
            )
        } catch(error) {
            console.log(error.response)
        }
    }

    const onClickFavoriteButton = () => {
        choosePerson()
        setLike(true)
        setLoading(true)
        getProfileToChoose()
    }

    const onClickDislikeButton = () => {
        setDislike(true)
        setLoading(true)
        getProfileToChoose()
    }

    return (
        <div className={classes.firstPage}>
           
           {loading? <Loading/> :
            profile ?  <Card className={clsx(classes.card, like ? classes.rotateout2brcw : null, dislike ? classes.rotateout2blccw : null)}>
                <div style={{backgroundImage: `url(${profile.photo})`}} className={classes.cardBackground}></div>
                <img className={classes.image} alt={'profile'} src={profile.photo}/>
                <CardContent className={classes.cardContent}>
                <div className={classes.nameDiv}>
                    <h1>{profile.name}</h1>
                    <p>{`,    ${profile.age}`}</p>
                </div>
                <p className={classes.bio}>{profile.bio}</p>
                </CardContent>
          </Card>
          : <Card className={classes.card} style={{justifyContent: 'center'}}><p>Você já viu todos os perfis na sua área</p></Card>}
          

        {loading ? <div/> : <div className={classes.buttonsDiv}>
            <Button 
            variant="contained" 
            color="secondary"
            onClick={onClickDislikeButton}>
              <NotInterested />
            </Button>
            <Button 
            variant="contained" 
            style={{backgroundColor: '#00c853', color: 'white'}}
            onClick={onClickFavoriteButton}>
              <Favorite />
            </Button>
          </div>}
        </div>
    )
}
