"use client";

import { ClientOnly } from "@/src/helpers/next";
import { RootState } from "@/src/store/redux";
import { Post } from "@/src/store/redux/post";
import { userActions } from "@/src/store/redux/user";
import { ControlledFavoriteButton } from "@/src/ui/button";
import { createSelector } from "@reduxjs/toolkit";
import React from "react";
import { useSelector, useStore } from "react-redux";

interface PostCardProps extends Post {
  isFavorite: boolean;
}

const PostCard = (props: PostCardProps) => {
  const { id, title, body, isFavorite } = props;

  const { addFavorite, removeFavorite } = userActions;

  const dispatch = useStore().dispatch;

  const onToggleFavorite = (value: boolean) => {
    value ? dispatch(addFavorite(id)) : dispatch(removeFavorite(id));
  };

  return (
    <li className="card bg-base-100 shadow-xl">
      <blockquote>
        <div className="card-body">
          <p className="flex grow justify-between gap-5 items-start">
            <cite className="card-title card-title--custom mt-2">{title}</cite>

            <ClientOnly>
              <ControlledFavoriteButton
                active={isFavorite}
                onClick={onToggleFavorite}
              />
            </ClientOnly>
          </p>
          <p>{body}</p>
        </div>
      </blockquote>
    </li>
  );
};

export default PostCard;
