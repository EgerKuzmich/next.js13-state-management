import { create } from "zustand";
import { Post } from "..";

export interface HotStore {
  list: Post[];
}

export const useHotStore = create<HotStore>(() => ({
  list: [],
}));
