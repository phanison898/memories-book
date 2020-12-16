import Form from './form';
import {Divider} from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import RemoveIcon from '@material-ui/icons/Remove';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import {useState, useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {connect} from 'react-redux';

const styles = makeStyles((theme)=>({
    root:{
        width:"100%",
        margin:theme.spacing(2),
        borderRadius:theme.spacing(2),
    },
    summary:{
        display:"flex",
        justifyContent:"center",
        //backgroundColor:theme.palette.primary.main,
    },
    heading:{
        flex:1,
        fontFamily:"",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        color:theme.palette.primary.main,
    },
}));

const FormHolder = ({currentPostId, setCurrentPostId, EditBtn})=>{

    const classes = styles();
    const [isExpanded,setIsExpanded] = useState(false);
    const [toggleFormHeading,setToggleFormHeading] = useState(false);

    useEffect(() => {
        if(currentPostId){
            setIsExpanded(true);
        }
    }, [currentPostId]);

    useEffect(() => {
        if(EditBtn !== 1){
            console.log("edit button: "+EditBtn);
            setIsExpanded(true);
            setToggleFormHeading(true);
        }
    }, [EditBtn])

    return(
        <div className={classes.root}>

            <Accordion expanded={isExpanded} onChange={()=>setIsExpanded(!isExpanded)}>

                <AccordionSummary className={classes.summary} color="primary" aria-controls="panel1a-content" id="panel1a-header"
                    expandIcon={isExpanded ? <RemoveIcon /> : <AddCircleIcon />}>

                    <Typography variant="h6" className={classes.heading}>
                        {toggleFormHeading ? "Edit Memory" : "Add Memory"}
                    </Typography>

                </AccordionSummary>

                <Divider variant="fullWidth" />

                <AccordionDetails>
                    <Form 
                    currentPostId={currentPostId} 
                    setCurrentPostId={setCurrentPostId} 
                    toggleFormHeading={toggleFormHeading}
                    setToggleFormHeading={setToggleFormHeading}/>
                </AccordionDetails>

            </Accordion>

        </div>
    )
}
const mapStateToProps = (state) => ({EditBtn : state.utils});

export default connect(mapStateToProps)(FormHolder);