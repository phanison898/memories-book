import {makeStyles} from '@material-ui/core/styles';
import {blue} from '@material-ui/core/colors';

const Style = makeStyles((theme)=>({
    root:{
        width:"100%",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        boxShadow:"none",
        marginTop:theme.spacing(2),
        //backgroundColor:"transparent",
    },
    form:{
        width:"80%",
        display:"flex",
        flexDirection:"column",
        alignContent:"center",
        '& > *':{
            width:"100%",
            marginTop:theme.spacing(1),
            marginBottom:theme.spacing(1),
            fontWeight:"600",
            transition:"ease 0.5s",
        }
    },
    button:{
        display:"flex",
        flexDirection:"row",
        alignItems:"space-between",
        justifyContent:"space-between",
        marginBottom:theme.spacing(2),
        '& > *':{
            width:"48%"
        }
    },
    upload:{
        '& > *':{
        }
    }
}))

export default Style;
