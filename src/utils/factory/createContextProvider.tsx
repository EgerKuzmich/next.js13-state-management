import { createContext, useContext as useCtx } from 'react';

interface IParams {
  displayName: string;
  errorMessage: string;
}

const DEF_PARAMS = {};
// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export function createContextProvider<T extends Record<string, any> | null>({
  displayName,
  errorMessage,
}: Partial<IParams> = DEF_PARAMS) {
  const Ctx = createContext<T | undefined>(undefined);

  if (displayName) {
    Ctx.displayName = displayName;
  }

  function useContext() {
    const c = useCtx(Ctx);

    if (!c) {
      const message = errorMessage ?? 'You must wrap your component in ContextProvider';

      throw new Error(message);
    }

    return c;
  }

  return [useContext, Ctx.Provider] as const;
}
