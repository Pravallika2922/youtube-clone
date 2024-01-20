import React from "react";
import { useSelector } from "react-redux";

const Captions = ({ videoId }) => {
  const videoDetails = useSelector((store) => store.app.videos);
  const reqVideoDetails = videoDetails.filter((video) => video.id === videoId);
  const { snippet } = reqVideoDetails[0];
  const { title, channelTitle, description } = snippet;
  return (
    <div className="text-wrap m-2 p-2">
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold"> {title}</h1>
        <h3 className="text-3xl font-bold">{channelTitle}</h3>
        <p className="text-wrap w-2/3">{description}</p>
      </div>
    </div>
  );
};

export default Captions;
