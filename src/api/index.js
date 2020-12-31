import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

// POSTS

export const FetchPostCount = () => axios.get("/posts/count", Header());

export const FetchPosts = () => axios.get("/posts", Header());

export const CreatePost = (newPostData) => axios.post("/posts", newPostData, Header());

export const UpdatePost = (id, post) => axios.patch(`/posts/${id}`, post, Header());

export const DeletePost = (id) => axios.delete(`/posts/${id}`, Header());

// USERS

export const SignUp = (signUpData) => axios.post("/users/sign-up", signUpData);

export const SignIn = (signInData) => axios.post("/users/sign-in", signInData);

export const GetUser = () => axios.get("/users", Header());

// HEADER

const Header = () => {
  return { headers: { "auth-token": window.localStorage.getItem("auth-token") } };
};
