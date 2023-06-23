import { store } from "@/src/store/redux";
import UserAvatar from "@/src/ui/layout/Avatar";
import React from "react";

const ReduxUserBlock = () => {
  const { user } = store.getState();
  return (
    <>
      <UserAvatar isAuth={isAuth} />
    </>
  );
};

export default ReduxUserBlock;
