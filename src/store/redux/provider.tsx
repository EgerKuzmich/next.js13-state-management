"use client";
import { Provider } from "react-redux";
import { createStore } from "./index";
import { PropsWithChildren } from "react";

interface StoreProviderProps<State> extends PropsWithChildren {
  preloadedState?: State;
}

export function StoreProvider<State extends Record<string, any>>({
  children,
  preloadedState,
}: StoreProviderProps<State>) {
  const store = createStore(preloadedState);

  return <Provider store={store}>{children}</Provider>;
}
