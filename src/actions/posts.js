import * as api from '../api';

export const GetPostData = () => async (dispatch) => {
    try {
        const {data} = await api.FetchPosts();
        dispatch({type:"FETCH_ALL", payload:data});
    } catch (error) {
        console.log(error.message);
    }
}

export const SendPostData = (post) => async (dispatch) => {
    try{
        const {data} = await api.CreatePost(post);
        dispatch({type:"CREATE", payload:data});
    }catch (error) {
        console.log(error.message);
    }
}

export const DeletePostData = (id,post) => async(dispatch)=>{
    try{
        await api.DeletePost(id);
        dispatch({type:"DELETE",payload:id});
    } catch(error){
        console.log(error.message);
    }
}