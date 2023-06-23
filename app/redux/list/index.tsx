"use client";
import React from "react";
import PostCard from "../post";
import { RootState, store } from "@/src/store/redux";
import { Post } from "@/src/store/redux/post";
import { useSelector } from "react-redux";

const selectFavorites = (state: RootState) => state.user.favorites;

const PostList = ({ list }: { list: Post[] }) => {
  const favorites = useSelector(selectFavorites);

  return (
    <ul className="flex flex-col grow gap-5">
      {list.slice(0, 10).map((post) => {
        const isFavorite = favorites.includes(post.id);

        return <PostCard key={post.id} {...post} isFavorite={isFavorite} />;
      })}
    </ul>
  );
};

export default PostList;
