import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import Captions from "./Captions";
import VideoComments from "./VideoComments";
import CommentsList from "./CommentsList";
import { commentsData } from "../utils/data";

const Watch = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <>
      <div className="px-5 text-wrap">
        <iframe
          width="1200"
          height="600"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <Captions videoId={searchParams.get("v")} />
        <VideoComments />
        <CommentsList comments={commentsData} />
      </div>
    </>
  );
};

export default Watch;
