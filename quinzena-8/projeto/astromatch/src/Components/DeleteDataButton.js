import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'

const useStyles = makeStyles({
 deleteDataButton: {
    position: 'absolute',
    right: 8,
    bottom: 8,
    cursor: 'pointer',
  },
})

export default function DeleteDataButton() {
    const classes = useStyles();

    const clear = async () => {
        try {
          const response = await axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/davidMelloTang/clear',{headers: {'Content-Type': 'application/json'}})
        } catch(error) {
          console.log(error.response.data)
        }
      }
    
      const deleteData = () => {
        clear()
      }
 
    return (
        
        <Button 
            onClick={deleteData}
            variant="contained" 
            size="small" 
            className={classes.deleteDataButton}>
                Limpar Dados
        </Button>
        
    )
}
