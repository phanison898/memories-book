import { useLocation, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
//---------------local-imports--------------//
import { UpdatePostById, CleanUpdate } from "../../actions/posts";
import PostForm from "./postForm";

const EditPost = ({ url }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);

  const postId = searchParams.get("postId") || undefined;
  const { update, get } = useSelector((state) => state.posts);

  const posts = get;
  const postById = posts.find((post) => post._id === postId);

  const { status, message } = update;

  const [data, setData] = useState({
    title: postById.title || "",
    description: postById.description || "",
    tags: postById.tags || "",
    selectedFile: postById.selectedFile || "",
  });

  useEffect(() => {
    if (status) {
      history.push(`${url}`);
    } else {
      console.log("there is some problem :- [ " + message + " ]");
    }
    return () => {
      if (status) {
        console.log("cleaning/resetting update state");
        dispatch(CleanUpdate());
      }
      console.log("are you sure ...????");
    };
  }, [status]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    dispatch(UpdatePostById(postId, data));
  };

  return <PostForm data={data} setData={setData} onSubmitHandler={onSubmitHandler} />;
};

export default EditPost;
