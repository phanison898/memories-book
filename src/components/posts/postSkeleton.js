import { Card, CardHeader, CardMedia, CardContent } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
//-------local-imports------------//
import Style from "./style";

const PostSkeleton = () => {
  const classes = Style();

  const Avatar = () => <Skeleton variant="circle" width={50} height={50} />;
  const Title = () => <Skeleton variant="text" width={100} height={20} />;
  const Subheader = () => <Skeleton variant="text" width={50} height={20} />;

  return (
    <Card elevation={0} className={classes.skeleton}>
      <CardHeader avatar={<Avatar />} title={<Title />} subheader={<Subheader />} />

      <CardMedia>
        <Skeleton variant="rect" width={550} height={300} />
      </CardMedia>

      <CardContent>
        <Skeleton variant="text" />
        <Skeleton variant="text" />
        <Skeleton variant="text" width={200} height={20} />
      </CardContent>
    </Card>
  );
};

export default PostSkeleton;
