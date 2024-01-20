import React from "react";
import { USER_ICON } from "../utils/constants";

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex bg-gray-100 rounded-lg my-2 w-1/2">
      <img src={USER_ICON} alt="user icon" className="w-12 h-12" />
      <div className="px-2 ">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comment;
