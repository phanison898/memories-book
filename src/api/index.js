import axios from "axios";

//const url = process.env.REACT_APP_API_URL;

const url = "http://localhost:5000";

// POSTS

export const FetchPosts = () => axios.get(`${url}/posts`);

export const CreatePost = (newPostData) => axios.post(`${url}/posts`, newPostData);

export const UpdatePost = (id, post) => axios.patch(`${url}/posts/${id}`, post);

export const DeletePost = (id) => axios.delete(`${url}/posts/${id}`);

// USERS

export const SignUp = (signUpData) => axios.post(`${url}/users/sign-up`, signUpData);

export const SignIn = (signInData) => axios.post(`${url}/users/sign-in`, signInData);
