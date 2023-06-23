import { UserService } from "@/src/lib/user";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

export interface User {
  name: string;
  age: number;
  isAuth: boolean;
  favorites: number[];
}

const initialState: User = {
  name: "",
  age: NaN,
  isAuth: false,
  favorites: [],
};

const userService = new UserService();

export const getUser = createAsyncThunk(
  "products/getUser",
  userService.getUser
);

export const { actions: userActions, reducer: userReducer } = createSlice({
  name: "user",
  initialState,
  reducers: {
    addFavorite(state, { payload }: PayloadAction<number>) {
      state.favorites.push(payload);
    },
    removeFavorite: (state, { payload }: PayloadAction<number>) => {
      state.favorites = state.favorites.filter((f) => f !== payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUser.fulfilled, (state, action: PayloadAction<User>) => {
      state = action.payload;
    });
  },
});
