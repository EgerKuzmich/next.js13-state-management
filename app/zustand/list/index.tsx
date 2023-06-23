import { Post, usePostStore } from "@/src/store/zustand/post";
import React from "react";
import PostCard from "../post";

const PostList = ({ list }: { list: Post[] }) => {
  return (
    <ul className="flex flex-col grow gap-5">
      {list.slice(0, 10).map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </ul>
  );
};

export default PostList;
