import React from "react";
import PostList from "./list";
import HotSection from "./hot-section";

const ReduxPage = async () => {
  return (
    <div className="grow px-6 py-4 relative">
      <PostList />

      <HotSection />
    </div>
  );
};

export default ReduxPage;
