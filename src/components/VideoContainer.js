import React, { useEffect } from "react";
import { YT_VIDEO_API } from "../utils/constants";
import { addVideos } from "../utils/appSlice";
import { useDispatch } from "react-redux";
import VideoCard from "./VideoCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const dispatch = useDispatch();
  const videoData = useSelector((store) => store.app?.videos);

  useEffect(() => {
    loadVideos();
  }, []);
  const loadVideos = async () => {
    const data = await fetch(YT_VIDEO_API);
    const json = await data.json();
    dispatch(addVideos(json.items));
  };

  return (
    <div className="flex flex-wrap">
      {videoData.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard
            key={video.id}
            title={video.snippet.title}
            vCount={video.statistics.viewCount}
            cTitle={video.snippet.channelTitle}
            thumbNail={video.snippet.thumbnails.medium.url}
          />
        </Link>
      ))}
      <VideoCard />
    </div>
  );
};

export default VideoContainer;
