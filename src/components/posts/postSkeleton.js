import {Skeleton} from '@material-ui/lab';
import {makeStyles} from '@material-ui/core/styles';

const styles = makeStyles((theme)=>({
    root:{
    },
    body:{
    }
}));

const PostSkeleton = ()=>{
    const classes = styles();
    return(
        <>
            <Skeleton variant="rect" className={classes.root} width={500} height={400}>
                <Skeleton variant="circle" width={100} height={100} component="span">P</Skeleton>
            </Skeleton>
        </>
    )
}

export default PostSkeleton;