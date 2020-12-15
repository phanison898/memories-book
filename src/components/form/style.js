import {makeStyles} from '@material-ui/core/styles';
import {blue} from '@material-ui/core/colors';

const Style = makeStyles((theme)=>({
    root:{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        marginTop:theme.spacing(2),
        marginLeft:theme.spacing(6),
        marginRight:theme.spacing(6),
        borderRadius:theme.spacing(2),
        boxShadow:"none",
        //backgroundColor:"transparent",
    },
    heading:{
        width:"100%",
        height:"8vh",
        fontFamily:"",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        color:"white",
        backgroundColor:blue[900],
        marginBottom:theme.spacing(1),
        borderTopRightRadius:theme.spacing(2),
        borderTopLeftRadius:theme.spacing(2),
        borderBottomLeftRadius:theme.spacing(0),
        borderBottomRightRadius:theme.spacing(0),
        boxShadow:"none",
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
        marginBottom:theme.spacing(2),
        '& > *':{
            marginRight:theme.spacing(1),
            marginLeft:theme.spacing(1),
        }
    },
    upload:{
        '& > *':{
        }
    }
}))

export default Style;
