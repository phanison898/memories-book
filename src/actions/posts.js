import * as api from "../api";

export const GetPostCount = () => async (dispatch) => {
  try {
    const { data } = await api.FetchPostCount();
    window.localStorage.setItem("posts-count", data);

    dispatch({ type: "COUNT", payload: data });
  } catch (error) {
    console.log(error.message);
    return;
  }
};

export const GetPostData = () => async (dispatch) => {
  try {
    const { data } = await api.FetchPosts();
    dispatch({ type: "GET", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const SendPostData = (userPostData) => async (dispatch) => {
  try {
    const { data } = await api.CreatePost(userPostData);
    const { status, message, post } = data;

    const count = parseInt(window.localStorage.getItem("posts-count"));
    console.log("local storage count : " + count);
    window.localStorage.setItem("posts-count", count + 1);

    dispatch({
      type: "CREATE",
      payload: {
        create: {
          status: status,
          message: message,
        },
        postData: post,
      },
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const UpdatePostById = (id, userPostData) => async (dispatch) => {
  try {
    const { data } = await api.UpdatePost(id, userPostData);
    const { status, message, post } = data;
    dispatch({
      type: "UPDATE",
      payload: {
        update: {
          status: status,
          message: message,
        },
        postData: post,
      },
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const DeletePostData = (id) => async (dispatch) => {
  try {
    const { data } = await api.DeletePost(id);

    const count = window.localStorage.getItem("posts-count");
    const newCount = parseInt(count) - 1;
    window.localStorage.setItem("posts-count", newCount);

    dispatch({
      type: "DELETE",
      payload: {
        delete: {
          status: data.status,
          message: data.message,
        },
        postId: id,
      },
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const CleanCreate = () => async (dispatch) => {
  dispatch({
    type: "CLEAN_CREATE",
    payload: {
      status: false,
      message: "",
    },
  });
};

export const CleanUpdate = () => async (dispatch) => {
  dispatch({
    type: "CLEAN_UPDATE",
    payload: {
      status: false,
      message: "",
    },
  });
};

export const CleanDelete = () => async (dispatch) => {
  dispatch({
    type: "CLEAN_DELETE",
    payload: {
      status: false,
      message: "",
    },
  });
};
