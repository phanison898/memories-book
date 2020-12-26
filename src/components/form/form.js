import { TextField, Paper, Button, Typography, Tooltip } from "@material-ui/core";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddAPhoto, PhonelinkSetup } from "@material-ui/icons";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import * as Joi from "yup";
import { SendPostData, UpdatePostById } from "../../actions/posts";
import Style from "./style";
import { useHistory, useParams } from "react-router-dom";

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const Form = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const history = useHistory();
  let { id } = useParams();
  const classes = Style();

  const [data, setData] = useState({
    title: "",
    description: "",
    tags: [],
    selectedFile: "",
  });

  useEffect(() => {
    if (id !== undefined) {
      const [{ title, description, tags, selectedFile }] = posts.filter((post) => post._id === id);
      setData({ ...data, title: title, description: description, tags: tags, selectedFile: selectedFile });
    }
  }, []);

  const schema = Joi.object().shape({
    title: Joi.string().min(1).max(255).required(),
    description: Joi.string().min(1).max(1024),
    tags: Joi.array(),
    selectedFile: Joi.string().required(),
  });

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      let error;
      const flag = await schema.isValid(data);
      schema.validate(data).catch((e) => {
        error = e.message;
        console.log(error);
      });
      if (flag) {
        if (id === undefined) {
          try {
            dispatch(SendPostData(data));
          } catch (error) {
            return;
          }
          setTimeout(() => {
            onResetHandler();
            history.push("/");
          }, 3000);
        } else {
          dispatch(UpdatePostById(id, data));
          setTimeout(() => {
            onResetHandler();
            history.push("/");
          }, 3000);
        }
      } else {
        console.log(id);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onResetHandler = (e) => {
    setData({
      title: "",
      description: "",
      tags: [],
      selectedFile: "",
    });
    setImagedata("");
  };

  const [imageData, setImagedata] = useState("");

  const handleUpload = (e) => {
    const image = e.target.files[0];
    const file = new FileReader();
    if (image) {
      file.onloadend = (fle) => {
        const base64 = fle.target.result;
        setImagedata(base64);
        setData({ ...data, selectedFile: base64 });
      };
      file.readAsDataURL(image);
    } else {
      console.log("error");
    }
  };

  const handleTags = (e) => {
    const data = e.target.value;
    const tags = data ? data : [];
    console.log(data);
    console.log(tags);
    setData({ ...data, tags: tags });
  };

  return (
    <Paper className={classes.root}>
      <form noValidate autoComplete="off" className={classes.form} onSubmit={onSubmitHandler}>
        <Typography variant="subtitle1" className={classes.heading}>
          {id === undefined ? "Add Memory" : "Update Memory"}
        </Typography>
        <TextField variant="filled" required id="title" label="Title" size="small" multiline value={data.title} onChange={(e) => setData({ ...data, title: e.target.value })} />
        <Paper className={classes.upload}>
          <input type="file" id="file" hidden onChange={handleUpload} />
          <label htmlFor="file" className={classes.uploadIcon}>
            <Tooltip title="upload" placement="right" color="secondary">
              <AddAPhoto />
            </Tooltip>
          </label>
          {data.selectedFile ? <img src={data.selectedFile} /> : null}
        </Paper>
        <TextField required id="description" label="Description" variant="filled" multiline rows={5} value={data.description} onChange={(e) => setData({ ...data, description: e.target.value })} />

        <TextField id="tags" label="Tags" variant="filled" size="small" multiline value={data.tags} onChange={handleTags} />

        <div className={classes.button}>
          <Button variant="contained" color="primary" fullWidth type="submit">
            {id === undefined ? "Upload" : "Update"}
          </Button>
          <Button variant="contained" color="secondary" fullWidth onClick={onResetHandler}>
            Reset
          </Button>
        </div>
      </form>
    </Paper>
  );
};

export default Form;
