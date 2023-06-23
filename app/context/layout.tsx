import { PostService } from "@/src/lib/post";
import { ContextStoreProvider } from "@/src/store/context";
import React, { PropsWithChildren } from "react";

const postService = new PostService();

const ContextLayout = async ({ children }: PropsWithChildren) => {
  const payload = await postService.getPosts();

  const posts = payload.slice(0, 10);

  return (
    <ContextStoreProvider initial={{ posts }}>{children}</ContextStoreProvider>
  );
};

export default ContextLayout;
