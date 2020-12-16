import {TextField,Paper,Button} from '@material-ui/core';
import FileBase from 'react-file-base64';
import Style from './style';
import {useState, useEffect} from 'react';
import {useDispatch, connect} from 'react-redux';
import {SendPostData, UpdatePostById} from '../../actions/posts';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const Form = ({currentPostId, setCurrentPostId, posts}) =>{
    const classes = Style();

    const postById = currentPostId ? posts.find((p) => p._id === currentPostId) : null;

    const [data, setData] = useState({
        title:"",
        description:"",
        tags:"",
        selectedFile:"",
    });

    useEffect(() =>{
        if(postById){
            setData(postById);
        }
    },[postById]);

    const dispatch = useDispatch();

    const onSubmitHandler = (e) =>{
        e.preventDefault();
        
        if(currentPostId){
            dispatch(UpdatePostById(currentPostId, data));
            onResetHandler();
        }else{
            dispatch(SendPostData(data));
            onResetHandler();
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
const mapStateToProps = (state) => ({posts: state.posts});

export default connect(mapStateToProps)(Form);