import { create } from "zustand";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PostStore {
  error: string;
  posts: Post[];
  setPosts: (posts: Post[]) => void;
  getPosts: () => Promise<void>;
}

export const usePostStore = create<PostStore>((set) => ({
  error: "",
  posts: [],
  setPosts: (posts) => set({ posts }),
  getPosts: async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const posts = await response.json();
      set(posts);
      return posts;
    } catch (error) {
      const errorWithMessage = error as Error;

      set({ error: errorWithMessage.message });
    }
  },
}));
