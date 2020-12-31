import { Paper, Typography, Divider, Input } from "@material-ui/core";
import { useSpring, animated } from "react-spring";
import { useTheme } from "@material-ui/core/styles";
import imageCompression from "browser-image-compression";
import GestureIcon from "@material-ui/icons/Gesture";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import ImageIcon from "@material-ui/icons/Image";
import VideocamOffIcon from "@material-ui/icons/VideocamOff";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import Style from "./style";

const PostForm = ({ data, setData, onSubmitHandler }) => {
  const classes = Style();

  const muiTheme = useTheme();

  const imageUploadHandler = async (e) => {
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
        setData({ ...data, selectedFile: base64 });
      };
      file.readAsDataURL(compressedFile);
    } else {
      console.log("error");
    }
  };

  const handleTags = (e) => {
    const value = e.target.value;
    if (!value) {
      setData({ ...data, tags: [] });
      return;
    } else {
      const convertedTags = value.split(" ");
      setData({ ...data, tags: convertedTags });
    }
  };

  const anime = useSpring({
    width: "100%",
    height: "100%",
    paddingBottom: "8vh",
    position: "relative",
    top: "0%",
    opacity: 1,
    from: {
      top: "100%",
      opacity: 0,
    },
  });

  return (
    <animated.div style={anime}>
      <Paper elevation={0} className={classes.root}>
        <Paper className={classes.form}>
          <form noValidate autoComplete="off" onSubmit={onSubmitHandler}>
            {/* Form header */}
            <div className={classes.form__header}>
              <Typography variant="subtitle1" className={classes.header__title}>
                <KeyboardBackspaceIcon />
                Create Memory
              </Typography>
              <Typography className={classes.header__post__button} onClick={onSubmitHandler}>
                Post
              </Typography>
            </div>

            <Divider />

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
              <input type="file" id="file" hidden onChange={imageUploadHandler} />
              <Paper className={classes.uploaded_image}>{data.selectedFile ? <img src={data.selectedFile} /> : null}</Paper>
            </div>

            {/* Form tags filed */}
            <div className={classes.form__tags}>
              <LocalOfferIcon style={{ color: muiTheme.palette.warning.dark }} />
              <Input placeholder="#hash tags (optional)" disableUnderline id="tags" value={data.tags} onChange={handleTags} />
            </div>
          </form>
        </Paper>

        <Divider />
        {/* Form upload image icon fileds */}
        <Paper elevation={0} className={classes.bottom__tools}>
          <Typography variant="h6">Upload an image....</Typography>
          <label htmlFor="file">
            <PhotoCameraIcon style={{ color: muiTheme.palette.success.main }} />
            <ImageIcon style={{ color: muiTheme.palette.info.dark }} />
            <VideocamOffIcon style={{ color: muiTheme.palette.error.main }} />
          </label>
        </Paper>
      </Paper>
    </animated.div>
  );
};

export default PostForm;
