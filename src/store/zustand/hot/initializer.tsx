"use client";
import { HotStore, useHotStore } from ".";
import { Post } from "../post";
import StoreInitializer from "../utils";

export const HotStoreInitializer = (props: { list: Post[] }) => {
  const { list } = props;

  return <StoreInitializer<HotStore> store={useHotStore} values={{ list }} />;
};
