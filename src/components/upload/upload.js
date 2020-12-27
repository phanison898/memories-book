import React from "react";
import { Paper, Tooltip, InputAdornment, TextField, IconButton } from "@material-ui/core";
import style from "./style";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import PublishIcon from "@material-ui/icons/Publish";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import AddCommentIcon from "@material-ui/icons/AddComment";
import bg from "../../images/auth_bg.jpg";
import { useDispatch } from "react-redux";
import { useState } from "react";
import * as Joi from "yup";
import { SendPostData } from "../../actions/posts";

const Upload = () => {
  const classes = style();
  const dispatch = useDispatch();

  // input post data
  const [data, setData] = useState({
    title: "",
    description: "",
    tags: [],
    selectedFile: "",
  });

  const [imageData, setImagedata] = useState("");

  const schema = Joi.object().shape({
    title: Joi.string().min(1).max(255).required(),
    description: Joi.string().min(1).max(1024),
    tags: Joi.array(),
    selectedFile: Joi.string().required(),
  });

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

  const onResetHandler = (e) => {
    setData({
      title: "",
      description: "",
      tags: [],
      selectedFile: "",
    });
    setImagedata("");
  };

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
        try {
          dispatch(SendPostData(data));
        } catch (error) {
          console.log(error.message);
          return;
        }
      }
      onResetHandler();
    } catch (err) {
      console.log(err);
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
      {/* add memory box */}
      <div className={classes.box}>
        {/* image icon */}
        <div className={classes.icon}>
          <input type="file" id="file" hidden onChange={handleUpload} />
          <label htmlFor="file">
            <Tooltip title="upload" placement="top" color="secondary">
              <AddPhotoAlternateIcon />
            </Tooltip>
          </label>
        </div>

        {/* memory input */}
        <div className={classes.form}>
          <input autoComplete="off" id="title" label="title" name="title" placeholder="Add a memory..." value={data.title} onChange={(e) => setData({ ...data, title: e.target.value })} />
        </div>

        {/* add memory submit button */}
        <div className={classes.uploadButton}>
          <IconButton type="submit" onClick={onSubmitHandler}>
            <PublishIcon />
          </IconButton>
        </div>
      </div>
      {data.selectedFile && (
        <>
          <div className={classes.image}>
            <img src={data.selectedFile} />
          </div>
          <div className={classes.textFields}>
            <TextField
              autoComplete="off"
              id="description"
              label="Description"
              fullWidth
              required
              multiline
              value={data.description}
              onChange={(e) => setData({ ...data, description: e.target.value })}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AddCommentIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              autoComplete="off"
              id="tags"
              label="Tags"
              fullWidth
              value={data.tags}
              onChange={(e) => setData({ ...data, tags: e.target.value })}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LocalOfferIcon />
                  </InputAdornment>
                ),
              }}
            />
          </div>
        </>
      )}
    </Paper>
  );
};

export default Upload;
