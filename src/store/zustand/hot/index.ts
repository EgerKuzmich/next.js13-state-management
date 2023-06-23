import { create } from "zustand";
import { Post } from "../post";

export interface HotStore {
  list: Post[];
}

export const useHotStore = create<HotStore>(() => ({
  list: [],
}));
