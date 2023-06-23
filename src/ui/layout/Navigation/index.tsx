"use client";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import React from "react";

const BASE_CLASSES = "btn btn-link btn-link--custom normal-case text-xl ml-6";

const MainNavigation = () => {
  const segment = useSelectedLayoutSegment();

  return (
    <nav className="flex ">
      <Link
        href="/redux"
        className={`${BASE_CLASSES} ${
          segment === "redux" ? "btn-link--active" : ""
        }`}
      >
        Rtk
      </Link>
      <Link
        href="/zustand"
        className={`${BASE_CLASSES} ${
          segment === "zustand" ? "btn-link--active" : ""
        }`}
      >
        Zustand
      </Link>
      <Link
        href="/context"
        className={`${BASE_CLASSES} ${
          segment === "context" ? "btn-link--active" : ""
        }`}
      >
        Context
      </Link>
    </nav>
  );
};

export default MainNavigation;
