import React from "react";
import Comment from "./Comment";

const CommentsList = ({ comments }) => {
  return (
    <div>
      {comments.map((comment, index) => (
        <div>
          <Comment key={index} data={comment} />
          <div className="pl-5 border border-l-black">
            <CommentsList key={index} comments={comment.replies} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentsList;
