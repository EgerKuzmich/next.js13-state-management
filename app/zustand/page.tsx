import { PostService } from "@/src/lib/post";
import React from "react";
import PostList from "./list";
import HotSection from "./hot-section";
import { HotStoreInitializer } from "@/src/store/zustand/hot/initializer";
import { useUserStore } from "@/src/store/zustand/user";

const postService = new PostService();

const ZustandPage = async () => {
  const posts = await postService.getPosts();

  const { getUser } = useUserStore.getState();

  await getUser();

  return (
    <div className="grow px-6 py-4 relative">
      <PostList list={posts} />

      <HotStoreInitializer list={posts.slice(0, 10)} />

      <HotSection />
    </div>
  );
};

export default ZustandPage;
