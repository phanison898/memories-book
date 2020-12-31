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

  const [data, setData] = useState({
    title: "",
    description: "",
    tags: [],
    selectedFile: "",
  });

  useEffect(() => {
    if (status) {
      history.push(`${url}`);
    } else {
      console.log("there is some problem :- [ " + message + " ]");
    }
    return () => {
      if (status) {
        console.log("cleaning/resetting create state");
        dispatch(CleanCreate());
      }
    };
  }, [status]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    dispatch(SendPostData(data));
  };

  return <PostForm data={data} setData={setData} onSubmitHandler={onSubmitHandler} />;
};

export default Form;
