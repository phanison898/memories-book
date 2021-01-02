import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
//--------------------local-imports--------------------//
import { SendPostData, CleanCreate } from "../../actions/posts";
import PostForm from "./postForm";

const Form = ({ url }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { create } = useSelector((state) => state.posts);
  const { status, message } = create;

  const [isLoading, setIsLoading] = useState(false);
  const [isWarning, setIsWarning] = useState(false);
  const [isMessage, setIsMessage] = useState(message);

  const [data, setData] = useState({
    title: "",
    description: "",
    tags: "",
    selectedFile: "",
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
      dispatch(CleanCreate());
    };
  }, [message]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    dispatch(SendPostData(data));
  };

  const postProps = {
    isLoading: isLoading,
    isWarning: isWarning,
    setIsWarning: setIsWarning,
    message: isMessage,
    heading: "Create Memory",
    submitButtonText: "Post",
    data: data,
    setData: setData,
    onSubmitHandler: onSubmitHandler,
  };

  return <PostForm props={postProps} />;
};

export default Form;
