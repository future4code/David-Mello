import axios from 'axios';
import {useState, useEffect} from 'react'
import Favorite from "@material-ui/icons/Favorite"
import NotInterested from '@material-ui/icons/NotInterested'
import Button from '@material-ui/core/Button'
import { Card, CardContent} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  card: {
    marginTop: 8,
    width: "90%",
    height: '80%',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
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
    marginTop: 8,
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
});



export default function FirstPage(props) {
    const classes = useStyles();
    const [profile, setProfile] = useState({});
    
    useEffect(() => {
        getProfileToChoose()
    }, [])

    const getProfileToChoose = async () => {

            try {
                const response = await axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/davidMelloTang/person')
                setProfile(response.data.profile)
            } catch (error) {
                console.log(error.response.message)
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
            console.log(error.response.message)
        }
    }

    const onClickFavoriteButton = () => {
        choosePerson()
        getProfileToChoose()
    }

    return (
        <div className={classes.firstPage}>
            <Card className={classes.card}>
                <div style={{backgroundImage: `url(${profile.photo})`}} className={classes.cardBackground}></div>
                <img className={classes.image} src={profile.photo}/>
                <CardContent className={classes.cardContent}>
                <div className={classes.nameDiv}>
                    <h1>{profile.name}</h1>
                    <p>{`,    ${profile.age}`}</p>
                </div>
                <p className={classes.bio}>{profile.bio}</p>
                </CardContent>
          </Card>
          
          <div className={classes.buttonsDiv}>
            <Button 
            variant="contained" 
            color="secondary"
            onClick={getProfileToChoose}>
              <NotInterested />
            </Button>
            <Button 
            variant="contained" 
            color="primary"
            onClick={onClickFavoriteButton}>
              <Favorite />
            </Button>
          </div>

        </div>
    )
}
