import React, { useState, useEffect } from "react";
import { AiFillEye, AiOutlineMessage } from "react-icons/ai";
import Moment from "react-moment";
import { Link } from "react-router-dom";

export const PostItem = ({ post }) => {
  const [showDeletedMessage, setShowDeletedMessage] = useState(false);

  useEffect(() => {
    let timeoutId;

    // Show the deleted message and set a timeout to hide it after 7 seconds
    if (!post) {
      setShowDeletedMessage(true);
      timeoutId = setTimeout(() => {
        setShowDeletedMessage(false);
      }, 2000);
    }

    // Clear the timeout if the component unmounts or the post is updated
    return () => clearTimeout(timeoutId);
  }, [post]);

  return (
    <Link to={post ? `/${post._id}` : "#"}>
      <div className="flex flex-col basis-1/4 flex-grow">
        {showDeletedMessage && (
          <div className="text-xl text-center text-white py-10">
            This post was deleted...
          </div>
        )}

        {post && (
          <React.Fragment>
            <div
              className={
                post.imgUrl ? "flex rounded-sm h-80" : "flex rounded-sm"
              }
            >
              {post.imgUrl && (
                <img
                  src={`http://localhost:8080/${post.imgUrl}`}
                  alt="img"
                  className="object-cover w-full rounded-2xl"
                />
              )}
            </div>
            <div className="flex justify-between items-center pt-2">
              <div className="text-xs text-white opacity-50">
                {post.username}
              </div>
              <div className="text-xs text-white opacity-50">
                <Moment date={post.createdAt} format="D MMM YYYY" />
              </div>
            </div>
            <div className="text-white text-xl">{post.title}</div>
            <p className="text-white opacity-60 text-xs pt-4 line-clamp-4">
              {post.text}
            </p>

            <div className="flex gap-3 items-center mt-2">
              <button className="flex items-center justify-center gap-2 text-xs text-white opacity-50">
                <AiFillEye /> <span>{post.views}</span>
              </button>
              <button className="flex items-center justify-center gap-2 text-xs text-white opacity-50">
                <AiOutlineMessage /> <span>{post.comments?.length || 0} </span>
              </button>
            </div>
          </React.Fragment>
        )}
      </div>
    </Link>
  );
};
