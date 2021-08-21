import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    buttonGroup: {
      flexDirection:'row'
    },
    buttonContainer: {
      margin:3
    },
    textContainer: {
      marginTop:5,
      marginBottom:5
    },
    space:{
      height:15
    }
  }));