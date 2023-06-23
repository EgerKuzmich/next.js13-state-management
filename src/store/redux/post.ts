import { PostService } from "@/src/lib/post";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PostState {
  list: Post[];
}

const initialState: PostState = {
  list: [],
};

const postService = new PostService();

export const getPosts = createAsyncThunk(
  "products/getPosts",
  postService.getPosts
);

export const { actions: postActions, reducer: postReducer } = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getPosts.fulfilled,
      (state, action: PayloadAction<Post[]>) => {
        state.list = action.payload;
      }
    );
  },
});
