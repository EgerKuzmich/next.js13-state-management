import { MutableRefObject, useEffect, useRef } from 'react';

export function useAsyncEffect<T extends (state: MutableRefObject<boolean>) => void, D>(fn: T, deps: D[]) {
  const cancelEffectRef = useRef<boolean>(false);

  useEffect(() => {
    fn(cancelEffectRef);

    return () => {
      cancelEffectRef.current = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps, fn]);
}
