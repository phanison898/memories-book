import { TextField, Paper, Button, Typography, Tooltip, Divider, Input } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { useTheme } from "@material-ui/core/styles";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddAPhoto, PhonelinkSetup } from "@material-ui/icons";
import Snackbar from "@material-ui/core/Snackbar";
import GestureIcon from "@material-ui/icons/Gesture";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import ImageIcon from "@material-ui/icons/Image";
import VideocamOffIcon from "@material-ui/icons/VideocamOff";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import * as Joi from "yup";
import imageCompression from "browser-image-compression";
import { SendPostData, UpdatePostById } from "../../actions/posts";
import Style from "./style";
import { useHistory, useParams } from "react-router-dom";
import CustomAlert from "../../components/utils/CustomAlert";

const Form = () => {
  const dispatch = useDispatch();
  const muiTheme = useTheme();
  const posts = useSelector((state) => state.posts);
  const prevPostsCount = Array.from(posts).length;
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
    const post = posts.find((p) => p.title === data.title);
    if (post) {
      onResetHandler();
      history.push("/home");
    }
  }, [posts]);

  const schema = Joi.object().shape({
    title: Joi.string().min(1).max(255).required(),
    description: Joi.string().min(1).max(1024),
    tags: Joi.array(),
    selectedFile: Joi.string().required(),
  });

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    schema.validate(data).catch((e) => {
      return console.log(e.message);
    });
    const flag = await schema.isValid(data);

    if (!flag) return console.log("validation failed");
    dispatch(SendPostData(data));
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

  const handleUpload = async (e) => {
    const image = e.target.files[0];
    let compressedFile;
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };
    try {
      compressedFile = await imageCompression(image, options);
    } catch (error) {
      console.log(error);
    }
    const file = new FileReader();
    if (compressedFile) {
      file.onloadend = (fle) => {
        const base64 = fle.target.result;
        setImagedata(base64);
        setData({ ...data, selectedFile: base64 });
      };
      file.readAsDataURL(compressedFile);
    } else {
      console.log("error");
    }
    console.log(data.selectedFile);
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
        {/* Form header */}
        <div className={classes.form__header}>
          <Typography variant="subtitle1" className={classes.header__title}>
            <KeyboardBackspaceIcon />
            Create Memory
          </Typography>
          <Typography className={classes.header__post__button} onClick={onSubmitHandler}>
            POST
          </Typography>
        </div>

        {/* Form Title filed */}
        <div className={classes.form__title}>
          <LabelImportantIcon style={{ color: muiTheme.palette.success.dark }} />
          <Input placeholder="Add a unique title" disableUnderline required id="title" value={data.title} onChange={(e) => setData({ ...data, title: e.target.value })} />
        </div>

        {/* Form Description filed */}
        <div className={classes.form__description}>
          <GestureIcon style={{ color: muiTheme.palette.secondary.dark }} />
          <Input placeholder="Describe more..." disableUnderline required id="description" fullWidth multiline value={data.description} onChange={(e) => setData({ ...data, description: e.target.value })} />
        </div>

        {/* Form Upload image filed */}
        <div className={classes.form__upload}>
          <input type="file" id="file" hidden onChange={handleUpload} />
          <Paper className={classes.uploaded_image}>{data.selectedFile ? <img src={data.selectedFile} /> : null}</Paper>
        </div>

        {/* Form tags filed */}
        <div className={classes.form__tags}>
          <LocalOfferIcon style={{ color: muiTheme.palette.warning.dark }} />
          <Input placeholder="#hash tags (optional)" disableUnderline id="tags" value={data.tags} onChange={handleTags} />
        </div>
      </form>

      {/* Form upload image icon fileds */}
      <Paper className={classes.bottom__tools}>
        <Typography variant="h6">Upload an image....</Typography>
        <label htmlFor="file">
          <PhotoCameraIcon style={{ color: muiTheme.palette.success.main }} />
          <ImageIcon style={{ color: muiTheme.palette.info.dark }} />
          <VideocamOffIcon style={{ color: muiTheme.palette.error.main }} />
        </label>
      </Paper>
    </Paper>
  );
};

export default Form;
