"use client";
import React, {
  useRef,
  createContext,
  useContext,
  useCallback,
  useSyncExternalStore,
  FC,
  PropsWithChildren,
  useEffect,
  useMemo,
  useState,
} from "react";

export interface UsePubSubReturn<Store> {
  get: () => Store;
  set: (value: Partial<Store>) => void;
  subscribe: (callback: () => void) => () => void;
}

interface ProviderProps<Store> extends PropsWithChildren {
  initial: Store;
}

type CreatePubSubContextReturn<Store> = [
  Provider: FC<ProviderProps<Store>>,
  useStore: <SelectorOutput>(
    selector: (store: Store) => SelectorOutput
  ) => [SelectorOutput, (value: Partial<Store>) => void]
];

type SyncFn = (callback: () => void) => void;

export function useSyncStore<T>(syncFn: SyncFn, getSnapshot: () => T): T {
  const [state, setState] = useState(getSnapshot);

  useEffect(() => {
    syncFn(() => setState(getSnapshot));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return state;
}

export function usePubSub<Store>(initial: Store): UsePubSubReturn<Store> {
  const store = useRef(initial);

  const get = useCallback(() => store.current, []);

  const subscribers = useRef(new Set<() => void>());

  const set = useCallback((value: Partial<Store>) => {
    store.current = { ...store.current, ...value };

    subscribers.current.forEach((callback) => callback());
  }, []);

  const subscribe = useCallback((callback: () => void) => {
    subscribers.current.add(callback);
    return () => subscribers.current.delete(callback);
  }, []);

  return useMemo(
    () => ({
      get,
      set,
      subscribe,
    }),
    [get, set, subscribe]
  );
}

export default function createPubSubContext<Store>({
  initialState,
  ctxName,
}: {
  initialState: Store;
  ctxName?: string;
}): CreatePubSubContextReturn<Store> {
  const StoreContext = createContext<UsePubSubReturn<Store> | null>(null);

  StoreContext.displayName = ctxName;

  function useStore<SelectorOutput>(
    selector: (store: Store) => SelectorOutput
  ): [SelectorOutput, (value: Partial<Store>) => void] {
    const store = useContext(StoreContext);

    if (!store) {
      throw new Error("useStore must be used within a StoreContext.Provider");
    }

    const state = useSyncStore(store.subscribe, () => selector(store.get()));

    return [state, store.set];
  }

  function Provider({ initial, children }: ProviderProps<Store>) {
    const value = usePubSub(initial ?? initialState);

    return (
      <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
    );
  }

  return [Provider, useStore];
}
