import { useLocation, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
//---------------local-imports--------------//
import { UpdatePostById, CleanUpdate } from "../../actions/posts";
import PostForm from "./postForm";

const EditPost = ({ url }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { update, get: posts } = useSelector((state) => state.posts);

  const { status, message } = update;
  const { search } = useLocation();
  const postId = new URLSearchParams(search).get("postId") || undefined;

  const postById = posts.find((post) => post._id === postId);

  const [isLoading, setIsLoading] = useState(false);
  const [isWarning, setIsWarning] = useState(false);
  const [isMessage, setIsMessage] = useState(message);

  const [data, setData] = useState({
    title: postById.title || "",
    description: postById.description || "",
    tags: postById.tags || "",
    selectedFile: postById.selectedFile || "",
  });

  useEffect(() => {
    setIsLoading(false);
    if (status) {
      history.push(`${url}`);
    } else {
      message && setIsWarning(true);
    }
    return () => {
      setIsMessage(message);
      dispatch(CleanUpdate());
    };
  }, [message]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    dispatch(UpdatePostById(postId, data));
  };

  const postProps = {
    isLoading: isLoading,
    isWarning: isWarning,
    setIsWarning: setIsWarning,
    message: isMessage,
    heading: "Update Memory",
    submitButtonText: "Update",
    data: data,
    setData: setData,
    onSubmitHandler: onSubmitHandler,
  };

  return <PostForm props={postProps} />;
};

export default EditPost;
