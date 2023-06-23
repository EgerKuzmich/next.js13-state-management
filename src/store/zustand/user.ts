import { User, UserService } from "@/src/lib/user";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

interface UserStore {
  user: User;
  addFavorite: (favorite: number) => void;
  removeFavorite: (favorite: number) => void;
  isFavorite: (id: number) => boolean;
  getUser: () => Promise<void>;
}

const DEFAULT_USER: User = {
  name: "",
  age: NaN,
  isAuth: false,
  favorites: [],
};

const userService = new UserService();

const initializer = immer<UserStore>((set, get) => ({
  user: DEFAULT_USER,
  getUser: async () => {
    const user = await userService.getUser();
    set((state) => {
      state.user = user;
    });
  },
  addFavorite: (favorite) =>
    set((state) => {
      state.user.favorites.push(favorite);
    }),
  removeFavorite: (favorite) =>
    set((state) => {
      state.user.favorites = state.user.favorites.filter((f) => f !== favorite);
    }),
  isFavorite: (id) => {
    const {
      user: { favorites },
    } = get();

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
