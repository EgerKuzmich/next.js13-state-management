import React, { useEffect, useState } from "react";
import PostCard from "../post";
import { useHotStore } from "@/src/store/zustand/hot";
import { Post } from "@/src/store/zustand/post";

const MIN_QUERY_LENGTH = 3;

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

  const { list } = useHotStore((state) => {
    const { list } = state;

    if (query.length < MIN_QUERY_LENGTH) {
      return { list };
    }

    const result = list.filter((post) => post.title.includes(query));
    return { list: result };
  });

  return (
    <div className="flex flex-col grow w-full">
      <input
        type="text"
        placeholder="Search posts"
        className="input input-bordered w-full mb-5 "
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
