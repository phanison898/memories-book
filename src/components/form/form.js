import { TextField, Paper, Button, Typography, Tooltip } from "@material-ui/core";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AddAPhoto, PhonelinkSetup } from "@material-ui/icons";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import * as Joi from "yup";
import { SendPostData } from "../../actions/posts";
import Style from "./style";
import { useHistory } from "react-router-dom";

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const Form = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = Style();

  const [data, setData] = useState({
    title: "",
    description: "",
    tags: "",
    selectedFile: "",
  });

  const schema = Joi.object().shape({
    title: Joi.string().min(6).max(255).required(),
    description: Joi.string().min(6).max(1024).required(),
    tags: Joi.string(),
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
        dispatch(SendPostData(data));
        setTimeout(() => {
          onResetHandler();
          history.push("/");
        }, 3000);
      } else {
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onResetHandler = (e) => {
    setData({
      title: "",
      description: "",
      tags: "",
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
  return (
    <Paper className={classes.root}>
      <form noValidate autoComplete="off" className={classes.form} onSubmit={onSubmitHandler}>
        <Typography variant="subtitle1" className={classes.heading}>
          Add Memory
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

        <TextField id="tags" label="Tags" variant="filled" size="small" multiline value={data.tags} onChange={(e) => setData({ ...data, tags: e.target.value })} />

        <div className={classes.button}>
          <Button variant="contained" color="primary" fullWidth type="submit">
            Submit
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
