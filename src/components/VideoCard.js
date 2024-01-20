import React from "react";

const VideoCard = ({ title, cTitle, vCount, thumbNail }) => {
  return (
    <div className="p-2 m-2 w-72 shadow-lg">
      <img src={thumbNail} alt="thumbnail" className="rounded-lg" />
      <div>
        <span className="font-bold block py-2">{title}</span>
        <span className="text-gray-400 block">{cTitle}</span>
        <span className="text-gray-400 block">{vCount}views</span>
      </div>
    </div>
  );
};
export const EnhancedVideoCard = (videoCard) => {
  return (
    <div className="p-1 m-1 border border-black">
      <VideoCard />
    </div>
  );
};
export default VideoCard;
