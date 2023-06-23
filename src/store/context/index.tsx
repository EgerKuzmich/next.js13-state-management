"use client";
import createPubSubContext, {
  UsePubSubReturn,
  usePubSub,
  useSyncStore,
} from "@/src/helpers/pub-sub-context";
import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
} from "react";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface ContextStore {
  posts: Post[];
}

interface ProviderProps extends PropsWithChildren {
  initial?: ContextStore;
}

const initialState = {
  posts: [],
};

export const StoreContext = createContext<UsePubSubReturn<ContextStore> | null>(
  null
);

// StoreContext.displayName = "StoreContext";

// export function useContextStore<SelectorReturn>(
//   selector: (store: ContextStore) => SelectorReturn
// ): [SelectorReturn, (value: ContextStore) => void] {
//   const store = useContext(StoreContext);

//   if (!store) {
//     throw new Error("useStore must be used within a StoreContext.Provider");
//   }

//   const state = useSyncStore<SelectorReturn>(store.subscribe, () =>
//     selector(store.get())
//   );

//   return [state, store.set];
// }

// export function ContextStoreProvider({ initial, children }: ProviderProps) {
//   const value = usePubSub(initial ?? initialState);

//   return (
//     <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
//   );
// }
const [ContextStoreProvider, useContextStore] =
  createPubSubContext<ContextStore>({ initialState });

export { ContextStoreProvider, useContextStore };
