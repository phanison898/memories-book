import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

// POSTS

export const FetchPosts = () => axios.get("/posts");

export const CreatePost = (newPostData) => axios.post("/posts", newPostData);

export const UpdatePost = (id, post) => axios.patch(`/posts/${id}`, post);

export const DeletePost = (id) => axios.delete(`/posts/${id}`);

// USERS

export const SignUp = (signUpData) => axios.post("/users/sign-up", signUpData);

export const SignIn = (signInData) => axios.post("/users/sign-in", signInData);

export const GetUser = () => axios.get("/users");
