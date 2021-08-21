import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'        
    },
}));