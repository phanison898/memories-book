import {TextField,Paper,Typography,ButtonBase,Button} from '@material-ui/core';
import FileBase from 'react-file-base64';
import Style from './style';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {SendPostData} from '../../actions/posts';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const Form = () =>{
    const classes = Style();

    const [data, setData] = useState({
        title:"",
        description:"",
        tags:"",
        selectedFile:"",
    });

    const dispatch = useDispatch();

    const onSubmitHandler = (e) =>{
        e.preventDefault();
        try{
            dispatch(SendPostData(data));
            onResetHandler();
        } catch(error){
            console.log(error.message);
        }
    }

    const onResetHandler = (e)=>{
        setData({
            title:"",
            description:"",
            tags:"",
            selectedFile:"",
        });
    }


    return(
        <Paper className={classes.root}>
            
            <form noValidate autoComplete="off" className={classes.form} onSubmit={onSubmitHandler}>

                <TextField required id="title" label="Title" variant="outlined" size="small" multiline 
                    value={data.title} onChange={(e) => setData({...data, title: e.target.value})} />

                <TextField required id="description" label="Description" variant="outlined" multiline rows={5} 
                    value={data.description} onChange={(e) => setData({...data, description: e.target.value})} />

                <TextField id="tags" label="Tags" variant="outlined" size="small" multiline 
                    value={data.tags} onChange={(e) => setData({...data, tags: e.target.value})} />

                <div className={classes.upload}>
                    <FileBase type="file" multiline={false} 
                    onDone={({base64})=>{setData({...data, selectedFile: base64})}} />
                </div>

                <div className={classes.button}>
                    <Button variant="contained" color="primary" fullWidth type="submit">Submit</Button>
                    <Button variant="contained" color="secondary" fullWidth onClick={onResetHandler}>Reset</Button>
                </div>

            </form>
        </Paper>
    )
}

const Success = ()=>{

    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
      }
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }

        setOpen(false);
    };

    return(
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
                This is a success message!
            </Alert>
      </Snackbar>
    )
}

export default Form;