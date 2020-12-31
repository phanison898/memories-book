import React from "react";
import { useSpring, animated } from "react-spring";

const Profile = () => {
  const props = useSpring({
    fontSize: 32,
    from: {
      fontSize: 0,
    },
  });

  return <animated.div style={props}>Profile</animated.div>;
};

export default Profile;
