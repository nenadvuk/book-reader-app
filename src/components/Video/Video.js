import React from "react";
import Item from "../../images/video.mp4";
import { Wrapper } from "./VideoStyle";

const Video = () => {
  return (
    <Wrapper>
      <video loop autoPlay>
        <source src={Item} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Wrapper>
  );
};

export default Video;
