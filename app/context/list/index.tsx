"use client";
import React from "react";
import PostCard from "../post";
import { useContextStore } from "@/src/store/context";

const PostList = () => {
  const [list] = useContextStore((state) => state.posts);

  return (
    <ul className="flex flex-col grow gap-5">
      {list.slice(0, 10).map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </ul>
  );
};

export default PostList;
