import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PostItem } from "../components/PostItem";
import { getAllPosts } from "../redux/features/post/postSlice";

export const PostsSlides = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  if (!posts || !posts.length) {
    return (
      <div className="text-xl text-center text-white py-10">
        There are no posts.
      </div>
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="max-w-[900px] mx-auto py-10">
      <Slider {...settings}>
        {posts.map((post, idx) => (
          <div key={idx}>
            <PostItem post={post} />
          </div>
        ))}
      </Slider>
    </div>
  );
};
