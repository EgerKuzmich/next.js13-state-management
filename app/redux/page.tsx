import { PostService } from "@/src/lib/post";
import React from "react";
import PostList from "./list";
import HotSection from "./hot-section";
import { getPosts } from "@/src/store/redux/post";
import { store } from "@/src/store/redux";

const postService = new PostService();

const ReduxPage = async () => {
  const posts = await postService.getPosts();

  return (
    <div className="grow px-6 py-4 relative">
      <PostList list={posts} />

      <HotSection />
    </div>
  );
};

export default ReduxPage;
