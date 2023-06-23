import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

export interface Settings {
  counters: number;
  banners: number;
}

const initialState: Settings = {
  counters: 0,
  banners: 0,
};

export const getSettings = createAsyncThunk(
  "products/getSettings",
  async () => {
    return await new Promise<Settings>((resolve) => {
      setTimeout(() => {
        resolve({
          counters: 1,
          banners: 1,
        });
      }, 1000);
    });
  }
);

export const { actions: settingsActions, reducer: settingsReducer } =
  createSlice({
    name: "settings",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(
        getSettings.fulfilled,
        (state, action: PayloadAction<Settings>) => {
          state = action.payload;
        }
      );
    },
  });
