import { store } from "@/src/store/redux";
import { getPosts } from "@/src/store/redux/post";
import { StoreProvider } from "@/src/store/redux/provider";
import { getSettings } from "@/src/store/redux/settings";
import { getUser } from "@/src/store/redux/user";
import React, { PropsWithChildren } from "react";

const ReduxLayout = async ({ children }: PropsWithChildren) => {
  const response = await Promise.all([
    store.dispatch(getUser()),
    store.dispatch(getSettings()),
    store.dispatch(getPosts()),
  ]);

  const [{ payload: user }, { payload: settings }, { payload: posts }] =
    response;

  return (
    <StoreProvider preloadedState={{ user, settings, post: { list: posts } }}>
      {children}
    </StoreProvider>
  );
};

export default ReduxLayout;
