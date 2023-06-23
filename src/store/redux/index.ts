import { configureStore } from "@reduxjs/toolkit";

import { postReducer } from "./post";
import { useDispatch } from "react-redux";
import { userReducer } from "./user";
import { settingsReducer } from "./settings";

export function createStore(preloadedState = {}) {
  const store = configureStore({
    reducer: {
      post: postReducer,
      user: userReducer,
      settings: settingsReducer,
    },
    preloadedState,
  });

  return store;
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export const store = createStore({});
