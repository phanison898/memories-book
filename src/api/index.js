import axios from 'axios';

const url = "http://localhost:5000/posts";

export const FetchPosts = () => axios.get(url);

export const CreatePost = (newPostData) => axios.post(url,newPostData);

export const DeletePost = (id) => axios.delete(`${url}/${id}`);