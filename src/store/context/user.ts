import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

interface UserStore {
  favorites: number[];
  addFavorite: (favorite: number) => void;
  removeFavorite: (favorite: number) => void;
  isFavorite: (id: number) => boolean;
}

const initializer = immer<UserStore>((set, get) => ({
  favorites: [],
  addFavorite: (favorite) =>
    set((state) => {
      state.favorites.push(favorite);
    }),
  removeFavorite: (favorite) =>
    set((state) => {
      state.favorites = state.favorites.filter((f) => f !== favorite);
    }),
  isFavorite: (id) => {
    const { favorites } = get();

    if (!favorites?.length) {
      return false;
    }

    return favorites.some((f) => f === id);
  },
}));

export const useUserStore = create(
  persist(initializer, {
    name: "user-storage",
  })
);
