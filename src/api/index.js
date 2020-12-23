import axios from "axios";

const url = process.env.REACT_APP_API_URL;

// POSTS

export const FetchPosts = () => axios.get(`${url}/posts`, { headers: { "auth-token": window.localStorage.getItem("auth-token") } });

export const CreatePost = (newPostData) => axios.post(`${url}/posts`, newPostData);

export const UpdatePost = (id, post) => axios.patch(`${url}/posts/${id}`, post);

export const DeletePost = (id) => axios.delete(`${url}/posts/${id}`, { headers: { "auth-token": window.localStorage.getItem("auth-token") } });

// USERS

export const SignUp = (signUpData) => axios.post(`${url}/users/sign-up`, signUpData);

export const SignIn = (signInData) => axios.post(`${url}/users/sign-in`, signInData);

export const GetUser = () => axios.get(`${url}/users`, { headers: { "auth-token": window.localStorage.getItem("auth-token") } });
