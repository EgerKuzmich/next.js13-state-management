"use client";

import { ClientOnly } from "@/src/helpers/next";
import { Post } from "@/src/store/zustand/post";
import { useUserStore } from "@/src/store/zustand/user";
import { ControlledFavoriteButton } from "@/src/ui/button";
import React from "react";

const PostCard = (props: Post) => {
  const { id, title, body } = props;

  const { isFavorite, addFavorite, removeFavorite } = useUserStore();

  const onToggleFavorite = (value: boolean) => {
    value ? addFavorite(id) : removeFavorite(id);
  };

  return (
    <li className="card bg-base-100 shadow-xl">
      <blockquote>
        <div className="card-body">
          <p className="flex grow justify-between gap-5 items-start">
            <cite className="card-title card-title--custom mt-2">{title}</cite>

            <ClientOnly>
              <ControlledFavoriteButton
                active={isFavorite(id)}
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
