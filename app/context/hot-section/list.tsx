"use client";
import React, { memo, useState } from "react";
import PostCard from "../post";
import { Post, useContextStore } from "@/src/store/context";

const MIN_QUERY_LENGTH = 3;

const Content = memo(({ list }: { list: Post[] }) => {
  return (
    <ul className="flex flex-col grow gap-5">
      {list.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </ul>
  );
});

Content.displayName = "Content";

const HotList = () => {
  const [query, setQuery] = useState("");

  const [list] = useContextStore((state) => state.posts.slice(0, 10));

  const filteredList = list.filter((post) => {
    if (query.length < MIN_QUERY_LENGTH) {
      return true;
    }

    return post.title.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <div className="flex flex-col grow w-full">
      <input
        type="text"
        placeholder="Search posts"
        className="input input-bordered w-full mb-5 "
        onChange={(e) => setQuery(e.target.value)}
      />

      {filteredList?.length ? (
        <Content list={filteredList} />
      ) : (
        <p className="text-center">No posts found</p>
      )}
    </div>
  );
};

export default HotList;
