import { PropsWithChildren } from "react";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface ContextStore {
  posts: Post[];
}

export interface ProviderProps extends PropsWithChildren {
  initial?: ContextStore;
}
