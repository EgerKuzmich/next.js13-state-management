import React, { useEffect, useState } from "react";
import PostCard from "../post";
import { Post } from "@/src/store/zustand/post";
import { RootState } from "@/src/store/redux";
import { createDraftSafeSelector, createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const selectPosts = (state: RootState) => state.post.list;
const selectPostByQuery = createSelector(
  [selectPosts, (state, query) => query],
  (result, query) => result.filter((post) => post.title.includes(query))
);

const Content = ({ list }: { list: Post[] }) => {
  return (
    <ul className="flex flex-col grow gap-5">
      {list.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </ul>
  );
};

const HotList = () => {
  const [query, setQuery] = useState("");

  const list = useSelector((state: RootState) =>
    selectPostByQuery(state, query)
  );

  return (
    <div className="flex flex-col grow w-full">
      <input
        type="text"
        placeholder="Search posts"
        className="input input-bordered w-full mb-5"
        onChange={(e) => setQuery(e.target.value)}
      />

      {list?.length ? (
        <Content list={list} />
      ) : (
        <p className="text-center">No posts found</p>
      )}
    </div>
  );
};

export default HotList;
